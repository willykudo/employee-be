import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserModel from "../models/user.model.js";
import BaseController from "./base.controller.js";
import { uploadFile } from '../services/awsFile.service.js'

class UserController extends BaseController {
  constructor() {
    super(UserModel);
  }

  async returnDataUser(req, res, next) {

    try {
      const userData = req.user._doc || req.user;

      return res.status(200).json({ userLogin: userData });

    } catch (error) {
      next(error)
    }
  }

  // GET ALL DATA USER 
  async getData_aggregate(req, res, next) {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const keyword = req.query.keyword || "";
    const sortBy = req.query.sortBy || 'createdAt';
    const orderBy = parseInt(req.query.orderBy) || 1;
    const location = req.query.location || "";
    const department = req.query.department || "";
    const jobPosition = req.query.jobPosition || "";
    const getAll = req.query.getAll === 'true';

    const userLoginNow = req.user;

    try {
      const pipeLine = [
        // USERINFORMATION ID
        // Filter JUST DOKUMENT HAVE userInformationID NOT NULL
        { $match: { userInformationID: { $ne: null } } },
        {
          $lookup: {
            from: 'userinformations',
            localField: 'userInformationID',
            foreignField: 'uId',
            as: 'userInformation'
          }
        },
        { $unwind: { path: '$userInformation', preserveNullAndEmptyArrays: true } },

        // EMPLOYEE STATUS
        {
          $match: {
            'userInformation.employeementDetail.employeeStatus': { $ne: null }
          }
        },
        // DO LOOKUP MORE
        {
          $lookup: {
            from: 'employeestatuses',
            localField: 'userInformation.employeementDetail.employeeStatus',
            foreignField: 'uId',
            as: 'employeeStatus'
          }
        },
        { $unwind: { path: '$employeeStatus', preserveNullAndEmptyArrays: true } },

        // LOCATION AGGREGATE
        {
          $match: {
            'userInformation.employeementDetail.locations': { $ne: null }
          }
        },
        // DO LOOKUP MORE
        {
          $lookup: {
            from: 'locations',
            localField: 'userInformation.employeementDetail.locations',
            foreignField: 'uId',
            as: 'locations'
          }
        },
        { $unwind: { path: '$location', preserveNullAndEmptyArrays: true } },

        // DEPARTMENT AGGREGATE IN LOCATION 
        {
          $lookup: {
            from: 'locations',
            localField: 'userInformation.employeementDetail.departments',
            foreignField: 'uId',
            as: 'department'
          }
        },
        { $unwind: { path: '$department', preserveNullAndEmptyArrays: true } },

        {
          // FACET FOR GET COUNT ALL THE DATA
          $facet: {
            data: [
              // SHORT BY
              { $sort: { [sortBy]: orderBy } },
              // PAGINATION
              { $skip: (page - 1) * limit },
              { $limit: limit },
              // FILTER BY KEYWORD
              {
                $match: {
                  $and: [
                    keyword ? {
                      $or: [
                        { 'firstName': { $regex: keyword, $options: "i" } },
                        { 'type': { $regex: keyword, $options: "i" } }
                      ]
                    } : {},
                    location ? { 'locations.locationName': location } : {},
                    department ? { 'locations.departments.department': department } : {},
                    jobPosition ? { 'locations.departments.jobPosition': jobPosition } : {}
                  ]
                }
              },

              // FILTER BY QUERY BASED ON SCHEMA
              req.query ? {
                $match: Object.keys(req.query).reduce((acc, key) => {
                  if (
                    key !== 'page' &&
                    key !== 'limit' &&
                    key !== 'sortBy' &&
                    key !== 'keyword' &&
                    key !== 'orderBy' &&
                    key !== 'location' &&
                    key !== 'department' &&
                    key !== 'jobPosition' &&
                    key !== 'getAll'
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
              // COUNT TOTAL DATA
              { $count: 'total' }
            ]
          },
        },

        {
          $unwind: { path: '$totalCount', preserveNullAndEmptyArrays: true }
        }

      ];

      const result = await this.model.aggregate(pipeLine).exec();
      // console.log(result[0].data)

      const organizationID = userLoginNow.organizationID;
      const userUidLogin = userLoginNow.uId
      const userRole = userLoginNow.role
      const userLocation = userLoginNow.locationName
      const ceckRole = userRole.includes("Supervisor")

      let dataSupervisor;
      let dataAll;

      if (ceckRole) {
        dataSupervisor = result[0].data.filter(item => {
          const reportToid = item.reportTo

          return organizationID === item.organizationID && userLocation === item.locations[0].locationName && item.uId !== userUidLogin && userUidLogin === reportToid
        })
      }

      if (getAll) {
        // If getAll is true, skip all other filtering
        dataAll = result[0].data;
      } else {
        // FIRST FILTER BY ORGANIZATION ID AND ROLE ADMIN
        dataAll = result[0].data.filter((item, _) => {
          return item.organizationID === organizationID && item.uId !== userUidLogin;
        });
      }

      // SECOND FILTER BY REPORTTO
      const totalDocSupervisor = req.query && dataSupervisor?.length
      const totalAllData = req.query ? dataAll.length : result[0].totalCount.total


      res.status(200).json({
        limit,
        page,
        totalDocs: ceckRole ? totalDocSupervisor : totalAllData,
        data: ceckRole && !getAll ? dataSupervisor : dataAll,
      })

    } catch (error) {
      next(error);
    }
  }

  // GET USER DATA BY UID
  async getOne_data(req, res, next) {
    const { uId } = req.params

    try {
      const user = await this.model.findOne({ uId })

      if (!user) {
        return res.status(500).json({
          msg: "User Not Found!"
        })
      }

      const pipeLine = [
        {
          $match: { uId: uId } // Filter dokumen berdasarkan uId
        },
        { $match: { userInformationID: { $ne: null } } },
        {
          $lookup: {
            from: 'userinformations',
            localField: 'userInformationID',
            foreignField: 'uId',
            as: 'userInformation'
          }
        },
        { $unwind: { path: '$userInformation', preserveNullAndEmptyArrays: true } },

        // EMPLOYEE STATUS
        {
          $match: {
            'userInformation.employeementDetail.employeeStatus': { $ne: null }
          }
        },
        // Lakukan lookup tambahan
        {
          $lookup: {
            from: 'employeestatuses',
            localField: 'userInformation.employeementDetail.employeeStatus',
            foreignField: 'uId',
            as: 'employeeStatus'
          }
        },
        { $unwind: { path: '$employeeStatus', preserveNullAndEmptyArrays: true } },

        // LOCATION
        {
          $match: {
            'userInformation.employeementDetail.locations': { $ne: null }
          }
        },
        // Lakukan lookup tambahan
        {
          $lookup: {
            from: 'locations',
            localField: 'userInformation.employeementDetail.locations',
            foreignField: 'uId',
            as: 'locations'
          }
        },
        { $unwind: { path: '$locations', preserveNullAndEmptyArrays: true } },

      ]

      const data = await this.model.aggregate(pipeLine).exec();

      if (data.length === 0) {
        return res.status(200).json({
          data: user
        })
      } else {
        return res.status(200).json({
          data: data
        })
      }

    } catch (error) {
      next(error)
    }
  }

  async create_user(req, res, next) {

    try {
      const email = req.body.email;
      const password = req.body.password;

      // Cek Email already registered
      const existingUser = await this.model.findOne({ email });
      if (existingUser) {
        return res.status(500).json({
          msg: "Email already registered!",
        });
      }

      const genSalPasword = await bcrypt.genSalt();
      // Hash Password
      const hashPassword = await bcrypt.hash(password, genSalPasword);

      // UPLOAD IMAGE
      const file = req.files.photo[0];

      // UPLOAD LOCATION PATH IMAGE
      const upload = await uploadFile(file);

      const dataImage = {
        name: upload.Key.replace('uploads/', ''),
        link: upload.Location
      }

      const createdData = await this.model.create({ ...req.body, password: hashPassword, photo: dataImage });

      if (!createdData) {
        throw customizeError(400, "Create data failed");
      }
      // Convert createdData to plain object
      const plainCreatedData = createdData.toObject();

      if (plainCreatedData && plainCreatedData.password) {
        delete plainCreatedData.password;
      }

      const expired = "1d";

      // CREATE TOKEN
      const accessToken = jwt.sign(plainCreatedData, process.env.JWT_SECRET, {
        expiresIn: expired,
      });

      return res.status(200).json({ data: createdData, token: accessToken, expired });
    } catch (error) {
      next(error);
    }
  }

  // UPDATE USER
  async update_user(req, res, next) {
    const { uId } = req.params;

    try {
      const existingData = await this.model.findOne({ uId });

      if (!existingData) {
        return res.status(500).json({
          msg: "Data Not Found!"
        })
      }

      let updateFields = {};

      const genSalPasword = await bcrypt.genSalt();
      // Hash Password
      const hashPassword = req.body.password && await bcrypt.hash(req.body.password, genSalPasword);

      // CHECK IF ROLE PREVIOUSLY EMPLOYEE CHANGE TO SUPERVISOR12323 ALWAYS ++

      const fieldsToUpdate = {
        organizationID: req.body.organizationID,
        reportTo: req.body.reportTo,
        userInformationID: req.body.userInformationID,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        password: hashPassword || existingData.password,
        role: req.body.role,
        phoneNumber: req.body.phoneNumber,
        gender: req.body.gender,
        bloodTypes: req.body.bloodTypes,
        religions: req.body.religions,
        dateOfBirth: req.body.dateOfBirth,
        address: req.body.address,
        maritalStatus: req.body.maritalStatus,
        country: req.body.country,
        postalCode: req.body.postalCode,
      };

      // Iterasi melalui objek fieldsToUpdate untuk memeriksa apakah field tersebut ada dan berbeda
      for (const [key, value] of Object.entries(fieldsToUpdate)) {
        if (value !== undefined && value !== existingData[key]) {
          updateFields[key] = value;
        }
      }

      // Update attachments if files are uploaded
      if (req.files && req.files["photo"]) {
        const files = req.files["photo"];
        const existingAttachments = existingData.photo || [];

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

        updateFields['photo'] = existingAttachments;
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

  // GET ORGANIZATION STRUCTURE
  async getOrganization_structure(req, res, next) {

    try {
      const pipeLine = [
        { $match: { userInformationID: { $ne: null } } },
        {
          $lookup: {
            from: 'userinformations',
            localField: 'userInformationID',
            foreignField: 'uId',
            as: 'userInformation'
          }
        },
        { $unwind: { path: '$userInformation', preserveNullAndEmptyArrays: true } },

        // EMPLOYEE STATUS
        {
          $match: {
            'userInformation.employeementDetail.employeeStatus': { $ne: null }
          }
        },
        // DO LOOKUP MORE
        {
          $lookup: {
            from: 'employeestatuses',
            localField: 'userInformation.employeementDetail.employeeStatus',
            foreignField: 'uId',
            as: 'employeeStatus'
          }
        },
        { $unwind: { path: '$employeeStatus', preserveNullAndEmptyArrays: true } },

        // LOCATION
        {
          $match: {
            'userInformation.employeementDetail.locations': { $ne: null }
          }
        },
        // DO LOOKUP MORE
        {
          $lookup: {
            from: 'locations',
            localField: 'userInformation.employeementDetail.locations',
            foreignField: 'uId',
            as: 'locations'
          }
        },
        { $unwind: { path: '$location', preserveNullAndEmptyArrays: true } },

        // DEPARTMENT AGGREGATE IN LOCATION 
        {
          $lookup: {
            from: 'locations',
            localField: 'userInformation.employeementDetail.departments',
            foreignField: 'uId',
            as: 'department'
          }
        },
        { $unwind: { path: '$department', preserveNullAndEmptyArrays: true } },

        // DEPARTMENT AGGREGATE IN JOB POSITION 
        {
          $lookup: {
            from: 'locations',
            localField: 'userInformation.employeementDetail.jobPosition',
            foreignField: 'uId',
            as: 'jobPosition'
          }
        },
        { $unwind: { path: '$jobPosition', preserveNullAndEmptyArrays: true } },
      ]

      const result = await this.model.aggregate(pipeLine).exec();

      const resultFilter = result.map((item, _) => {
        const useruId = item.uId;
        const userInformationID = item.userInformation.uId;
        const firstName = item.firstName;
        const lastName = item.lastName;
        const photo = item.photo[0].link;
        const location = item.locations[0].locationName
        const department = item.department.departments[0].department;
        const jobPosition = item.jobPosition.departments[0].department;
        const jobLevel = item.userInformation.employeementDetail.jobLevel;
        const color = item.locations[0].color;
        const role = item.role;

        const reportTo = item.reportTo;
        const locationID = item.userInformation.employeementDetail.locations;
        const departmentID = item.userInformation.employeementDetail.departments;
        const jobPositionID = item.userInformation.employeementDetail.jobPosition;

        return {
          useruId, userInformationID, firstName, lastName, photo, jobPosition, role, location, department, jobLevel, reportTo, color, locationID, departmentID, jobPositionID
        }
      })

      // Separate employees with and without a reportTo value
      const filterNoReport = resultFilter.filter(item => item.reportTo !== "");
      const filterReportNull = resultFilter.filter(item => item.reportTo === "");

      // Map Data untuk menyimpan semua karyawan berdasarkan ID 
      const employeeMap = {};
      const employeeData = [];

      filterNoReport.forEach(employee => {
        employee.subordinates = [];
        employeeMap[employee.useruId] = employee;
        employeeData.push(employee);
      });

      // Bangun struktur hierarki berdasarkan lokasi
      const locationHierarchy = {};

      // Fungsi pembantu untuk menambahkan employee ke dalam hierarki
      function addToHierarchy(employee) {
        if (!locationHierarchy[employee.location]) {
          locationHierarchy[employee.location] = [];
        }
        const parent = employeeMap[employee.reportTo];
        if (parent && parent.location === employee.location) {
          parent.subordinates.push(employee);
        } else {
          locationHierarchy[employee.location].push(employee);
        }
      }

      // Menambahkan semua employee ke hierarki lokasi masing-masing
      employeeData.forEach(employee => {
        addToHierarchy(employee);
      });

      // Group filterReportNull employees by location
      const filterReportNullByLocation = {};

      filterReportNull.forEach(employee => {
        if (!filterReportNullByLocation[employee.location]) {
          filterReportNullByLocation[employee.location] = {
            color: employee.color,
            data: []
          };
        }
        filterReportNullByLocation[employee.location].data.push(employee);
      });

      // Create the final structure with root-level nodes for each location
      function removeEmptySubordinates(employee) {
        if (employee.subordinates && employee.subordinates.length === 0) {
          delete employee.subordinates;
        } else if (employee.subordinates) {
          employee.subordinates.forEach(removeEmptySubordinates);
        }
      }

      const hierarchyByLocation = Object.keys(locationHierarchy).map(location => {
        const color = locationHierarchy[location][0] ? locationHierarchy[location][0].color : null;
        locationHierarchy[location].forEach(removeEmptySubordinates);
        return {
          location: location,
          color: color,
          length: locationHierarchy[location].length,
          data: locationHierarchy[location]
        };
      });

      const allData = {
        filterReportNull: Object.keys(filterReportNullByLocation).map(location => {
          const locationData = filterReportNullByLocation[location];
          return {
            location: location,
            color: locationData.color,
            length: locationData.data.length,
            data: locationData.data
          };
        }),
        hierarchyByLocation
      };
      res.status(200).json({
        data: allData
      })

    } catch (error) {
      next(error)
    }

  }

  // GET COMUNITY CLUB
  async getComunityClub(req, res, next) {

    const { hobby, gender, nationality, department, languages, religion, maritalStatus, age } = req.query

    try {
      const pipeLine = [
        { $match: { userInformationID: { $ne: null } } },
        {
          $lookup: {
            from: 'userinformations',
            localField: 'userInformationID',
            foreignField: 'uId',
            as: 'userInformation'
          }
        },
        { $unwind: { path: '$userInformation', preserveNullAndEmptyArrays: true } },

        // EMPLOYEE STATUS
        {
          $match: {
            'userInformation.employeementDetail.employeeStatus': { $ne: null }
          }
        },
        // DO LOOKUP MORE
        {
          $lookup: {
            from: 'employeestatuses',
            localField: 'userInformation.employeementDetail.employeeStatus',
            foreignField: 'uId',
            as: 'employeeStatus'
          }
        },
        { $unwind: { path: '$employeeStatus', preserveNullAndEmptyArrays: true } },

        // LOCATION
        {
          $match: {
            'userInformation.employeementDetail.locations': { $ne: null }
          }
        },
        // DO LOOKUP MORE
        {
          $lookup: {
            from: 'locations',
            localField: 'userInformation.employeementDetail.locations',
            foreignField: 'uId',
            as: 'locations'
          }
        },
        { $unwind: { path: '$location', preserveNullAndEmptyArrays: true } },

        // DEPARTMENT AGGREGATE IN LOCATION 
        {
          $lookup: {
            from: 'locations',
            localField: 'userInformation.employeementDetail.departments',
            foreignField: 'uId',
            as: 'department'
          }
        },
        { $unwind: { path: '$department', preserveNullAndEmptyArrays: true } },

        // DEPARTMENT AGGREGATE IN JOB POSITION 
        {
          $lookup: {
            from: 'locations',
            localField: 'userInformation.employeementDetail.jobPosition',
            foreignField: 'uId',
            as: 'jobPosition'
          }
        },
        { $unwind: { path: '$jobPosition', preserveNullAndEmptyArrays: true } },
      ]

      const result = await this.model.aggregate(pipeLine).exec();

      let resultGroup;

      // RESPONSE API
      const resultFilter = result.map((item, _) => {
        const uId = item.uId;
        const firstName = item.firstName;
        const lastName = item.lastName;
        const photo = item.photo[0].link;
        const email = item.email;
        const gender = item.gender;

        // GENERATE AGE
        let dateOfBirth = new Date(item.dateOfBirth);
        let currentDate = new Date();

        // Buat objek Date dari string dateOfBirth
        let birthDate = new Date(dateOfBirth);

        // Dapatkan tahun, bulan, dan hari dari kedua tanggal
        let birthYear = birthDate.getFullYear();
        let birthMonth = birthDate.getMonth();
        let birthDay = birthDate.getDate();

        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();

        // Hitung selisih dalam tahun
        let age = currentYear - birthYear;

        // Sesuaikan jika tanggal lahir belum terjadi tahun ini
        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
          age--;
        }

        const maritalStatus = item.maritalStatus;
        const religion = item.religions;
        const location = item.locations[0].locationName
        const salary = item.userInformation.paymentDetail.basicSalary;
        const nationality = item.userInformation.identificationDocument.nationality;
        const hobbies = item.userInformation.hobbies;
        const lengthWork = item.userInformation.employeementDetail.joinDate
        const languages = item.userInformation.languages;
        const department = item.department.departments[0].department;
        const phoneNumber = item.phoneNumber;
        const jobPosition = item.jobPosition.departments[0].department

        return {
          uId, firstName, lastName, email, gender, phoneNumber, photo, age, maritalStatus, jobPosition, religion, location, salary, nationality, hobbies, lengthWork, languages, department
        }
      })

      if (age) {
        // RANGE AGE
        const ageGroups = [
          { range: "0 - 10", min: 0, max: 10, data: [] },
          { range: "11 - 20", min: 11, max: 20, data: [] },
          { range: "21 - 30", min: 21, max: 30, data: [] },
          { range: "31 - 40", min: 31, max: 40, data: [] },
          { range: "41 - 50", min: 41, max: 50, data: [] },
          { range: "51 - 60", min: 51, max: 60, data: [] },
          { range: "61 - 70", min: 61, max: 70, data: [] },
        ];

        resultFilter.forEach(person => {
          ageGroups.forEach(group => {
            // PUSH USER KEDALAM ARRAY JIKA MEMENUHI KONDISI
            if (person.age >= group.min && person.age <= group.max) {
              group.data.push(person);
            }
          });
        });

        // JIKA DATA DI AGE GROUPS KOSONG JANGAN MASUKKAN DATA
        resultGroup = ageGroups
          .filter(group => group.data.length > 0)
          .map(group => {

            return {
              averageAge: group.range,
              data: group.data,
              length: group.data.length
            };
          });
      } else if (hobby) {

        const hobbiesGroup = {}

        resultFilter.forEach(item => {

          item.hobbies.forEach(hobby => {
            if (!hobbiesGroup[hobby]) {
              hobbiesGroup[hobby] = [];
            }
            hobbiesGroup[hobby].push({ ...item })
          })
        })

        resultGroup = Object.keys(hobbiesGroup).map(hobby => {
          return {
            hobbies: hobby,
            data: hobbiesGroup[hobby],
            length: hobbiesGroup[hobby].length
          }
        })
      } else if (gender) {
        const groupedByGender = {};

        // Iterasi melalui setiap item dalam responseData
        resultFilter.forEach(person => {
          const gender = person.gender;

          if (!groupedByGender[gender]) {
            groupedByGender[gender] = [];
          }

          groupedByGender[gender].push({ ...person });
        });

        // Mengubah object groupedByGender menjadi array dengan format yang diinginkan
        resultGroup = Object.keys(groupedByGender).map(gender => {
          return {
            gender: gender,
            data: groupedByGender[gender],
            length: groupedByGender[gender].length
          };
        });
      } else if (nationality) {
        const groupItem = {}

        resultFilter.forEach(person => {
          const nationality = person.nationality;
          if (!groupItem[nationality]) {
            groupItem[nationality] = [];
          }
          groupItem[nationality].push({ ...person });
        });

        resultGroup = Object.keys(groupItem).map(item => {
          return {
            nationality: item,
            data: groupItem[item],
            length: groupItem[item].length
          }
        })
      } else if (department) {
        const groupItem = {}

        resultFilter.forEach(person => {
          const department = person.department;
          if (!groupItem[department]) {
            groupItem[department] = [];
          }
          groupItem[department].push({ ...person });
        });

        resultGroup = Object.keys(groupItem).map(depart => {
          return {
            department: depart,
            data: groupItem[depart],
            length: groupItem[depart].length
          }
        })

      } else if (languages) {
        const langGroup = {}

        resultFilter.forEach(item => {

          item.languages.forEach(lang => {
            if (!langGroup[lang]) {
              langGroup[lang] = [];
            }
            langGroup[lang].push({ ...item })
          })
        })

        resultGroup = Object.keys(langGroup).map(lang => {
          return {
            languages: lang,
            data: langGroup[lang],
            length: langGroup[lang].length
          }
        })
      } else if (religion) {
        // Object untuk mengelompokkan data berdasarkan gender
        const groupByReligion = {};

        // Iterasi melalui setiap item dalam responseData
        resultFilter.forEach(person => {
          const religion = person.religion;
          if (!groupByReligion[religion]) {
            groupByReligion[religion] = [];
          }
          groupByReligion[religion].push({ ...person });
        });

        // Mengubah object groupByReligion menjadi array dengan format yang diinginkan
        resultGroup = Object.keys(groupByReligion).map(religion => {
          return {
            religion: religion,
            data: groupByReligion[religion],
            length: groupByReligion[religion].length,
          };
        });
      } else if (maritalStatus) {
        // Object untuk mengelompokkan data berdasarkan gender
        const groupedByGender = {};

        // Iterasi melalui setiap item dalam responseData
        resultFilter.forEach(person => {
          const status = person.maritalStatus;

          if (!groupedByGender[status]) {
            groupedByGender[status] = [];
          }

          groupedByGender[status].push({ ...person });
        });

        // Mengubah object groupedByGender menjadi array dengan format yang diinginkan
        resultGroup = Object.keys(groupedByGender).map(status => {
          return {
            status: status,
            data: groupedByGender[status],
            length: groupedByGender[status].length
          };
        });
      } else {
        return res.status(500).json({ msg: "Please type query !" })
      }

      res.status(200).json({
        data: resultGroup
      })
    }
    catch (err) {
      next(err)
    }
  }

}

const userController = new UserController();
export default userController;