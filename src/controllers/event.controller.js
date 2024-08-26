import EventModel from "../models/event.model.js";
import BaseController from "./base.controller.js";
import { uploadFile } from "../services/awsFile.service.js";

class EventController extends BaseController {
    constructor() {
        super(EventModel);
    }

    async get_all_event(req, res, next) {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const keyword = req.query.keyword;
        const sortBy = req.query.sortBy || 'createdAt';
        const orderBy = parseInt(req.query.orderBy) || 1;

        const userLoginNow = req.user;

        try {
            const pipeLine = [
                { $match: { location: { $ne: null } } },
                {
                    $lookup: {
                        from: 'locations',
                        localField: 'location',
                        foreignField: 'uId',
                        as: 'location'
                    }
                },
                { $unwind: { path: '$location', preserveNullAndEmptyArrays: true } },
                {
                    // FACET FOR GET COUNT ALL THE DATA
                    $facet: {
                        data: [
                            // SHORT BY
                            { $sort: { [sortBy]: orderBy } },
                            // PAGINATION
                            { $skip: (page - 1) * limit },
                            { $limit: limit },
                            {
                                $match: keyword ? {
                                    $or: [
                                        { nameEvent: { $regex: keyword, $options: "i" } },
                                        { type: { $regex: keyword, $options: "i" } }
                                    ]
                                } : { location: { $ne: null } }
                            },

                            // FILTER BY QUERY BASED ON SCHEMA
                            req.query ? {
                                $match: Object.keys(req.query).reduce((acc, key) => {
                                    if (
                                        key !== 'page' &&
                                        key !== 'limit' &&
                                        key !== 'sortBy' &&
                                        key !== 'keyword' &&
                                        key !== 'orderBy'
                                    ) {
                                        const fieldExists = Object.keys(this.model.schema.paths).includes(key);
                                        if (fieldExists) {
                                            acc[key] = req.query[key];
                                        } else {
                                            throw new Error(`Field '${key}' Not Found`);
                                        }
                                    }
                                    return acc;
                                }, {})
                            } : {}

                        ],
                        totalCount: [
                            { $count: 'total' }
                        ]
                    },

                },
                {
                    $unwind: { path: '$totalCount', preserveNullAndEmptyArrays: true }
                }
            ];

            const result = await this.model.aggregate(pipeLine).exec();

            const organizationID = userLoginNow._doc.organizationID;

            const responseData = result[0].data.filter((item, _) => {
                return item.organizationID === organizationID
            })

            res.status(200).json({
                limit,
                page,
                totalDocs: req.query ? responseData.length : result[0].totalCount.total,
                data: responseData ? responseData : [],
            });

        } catch (error) {
            next(error);
        }
    }



    async create_event(req, res, next) {

        try {
            // UPLOAD IMAGE
            const file = req.files.posterAttachment[0];

            // UPLOAD LOCATION PATH IMAGE
            const upload = await uploadFile(file);

            const dataImage = {
                name: upload.Key.replace('uploads/', ''),
                link: upload.Location
            }

            const createdData = await this.model.create({ ...req.body, posterAttachment: dataImage });

            if (!createdData) {
                throw customizeError(400, "Create data failed");
            }

            return res.status(200).json({ data: createdData });
        } catch (error) {
            next(error);
        }
    }

    async update_event(req, res, next) {

        const { uId } = req.params;
        try {

            const existingData = await this.model.findOne({ uId });

            if (!existingData) {
                return res.status(500).json({
                    msg: "Data Not Found!"
                })
            }

            const fieldsToUpdate = {
                organizationID: req.body.organizationID,
                nameEvent: req.body.nameEvent,
                startDate: req.body.startDate,
                endDate: req.body.endDate,
                duration: req.body.duration,
                isCompanyHoliday: req.body.isCompanyHoliday,
                posterAttachment: req.body.posterAttachment,
                note: req.body.note,
                location: req.body.location
            }

            let updateFields = {};

            for (const [key, value] of Object.entries(fieldsToUpdate)) {
                if (value && value !== existingData[key]) {
                    updateFields[key] = value;
                }
            }

            // Update attachments if files are uploaded
            if (req.files && req.files["posterAttachment"]) {
                const files = req.files["posterAttachment"];
                const existingAttachments = existingData.posterAttachment || [];

                // Stores the names of existing files in an array
                const existingFileNames = existingAttachments.map(attachment => attachment.name);

                // Stores the names of the currently uploaded files in an array
                const newFileNames = files.map(file => file.name);

                // Check which files should be deleted
                const filesToDelete = existingAttachments.filter(attachment => !newFileNames.includes(attachment.name));

                // Delete files that no longer exist from existingAttachments
                for (const fileToDelete of filesToDelete) {
                    const index = existingAttachments.indexOf(fileToDelete);
                    existingAttachments.splice(index, 1);
                }

                // Add a new file that does not yet exist
                for (const file of files) {
                    if (!existingFileNames.includes(file.name)) {
                        const upload = await uploadFile(file);

                        const dataImage = {
                            name: upload.Key.replace('uploads/', ''),
                            link: upload.Location
                        }

                        existingAttachments.push(dataImage);
                    }
                }

                updateFields['posterAttachment'] = existingAttachments;
            }

            // Perform update only if there are fields to update
            if (Object.keys(updateFields).length > 0) {
                const updatedData = await this.model.findOneAndUpdate({ uId }, updateFields, { new: true });

                res.status(200).json({
                    data: updatedData,
                });
            } else {
                // If no fields are updated, return existing data
                res.status(200).json({
                    data: existingData
                });
            }
        } catch (error) {
            next(error);
        }
    }
}

const eventController = new EventController();
export default eventController;