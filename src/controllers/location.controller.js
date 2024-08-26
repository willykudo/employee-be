import LocationModel from "../models/location.model.js";
import BaseController from "./base.controller.js";

class LocationController extends BaseController {
  constructor() {
    super(LocationModel);
  }

  async get_location(req, res, next) {
    const keyword = req.query.keyword
    // PAGINATION
    const pages = parseInt(req.query.pages) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (pages - 1) * limit;
    // SORTING BY ASCENDING OR DESCENDING
    const sortBy = req.query.sortBy || 'createdAt';
    const orderBy = req.query.orderBy || 1;

    const userLoginNow = req.user;

    // base on employeeType
    try {
      // QUERY BASE ON MODEL DATA
      let query = {};

      for (const key in req.query) {
        if (key !== 'pages' &&
          key !== 'limit' &&
          key !== 'sortBy' &&
          key !== 'keyword' &&
          key !== 'orderBy' && Object.prototype.hasOwnProperty.call(req.query, key)) {
          // Check if the field exists in the model
          const fieldExists = Object.keys(this.model.schema.paths).includes(key);
          if (fieldExists) {
            query[key] = req.query[key]; // Add to search criteria
          } else {
            return res.status(500).json({
              msg: `Field '${key}' Not Found`
            });
          }
        }
      }

      // SEARCH 
      if (keyword) {
        query = {
          ...query,
          $or: [
            { locationName: { $regex: keyword, $options: "i" } },
            { type: { $regex: keyword, $options: "i" } },
          ]
        }
      }

      // DATA QUERY
      const dataQuery = await this.model.find(query)
        .sort({ [sortBy]: orderBy })
        .limit(limit)
        .skip(skip)

      // CECK HERE IF ROLE ADMIN OR SUPERVISOR
      const organizationID = userLoginNow.organizationID;

      const filterData = dataQuery.filter((item, _) => {

        return organizationID === item.organizationID

      })

      return res.status(200).json({ pages: pages, limit: limit, totalDoc: filterData.length, data: filterData });

    } catch (error) {
      next(error)
    }
  }
}

const locationController = new LocationController();
export default locationController;