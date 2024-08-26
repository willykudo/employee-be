
// each array's first index data are default for db schema

// ENUM USER.MODEL
const create_user_roles = ["user", "supervisor", "admin"]
const job_Level = ["employee", "supervisor"]
const gender = ["male", "female"]
const blood_Types = ["A", "B", "O", "A+", "B+", "O-", "AB", "AB+", "AB-"]
const religions = ["kristen", "islam", "budha", "hindu"]
const marital_Status = ["singgle", "married"]

// ENUM USERINFORMATION.MODEL
const hobbies = ["cycling", "reading", "football", "basket ball", "cooking"]
const skills = ["html", "css", "javascript", "react js", "express js"]
const languages = ["english", "japanese", "korean", "bahasa indonesia", "malay"]
const departments = ["all job positions", "supervisor", "cook", "cashier", "waiters"]
const covid19_Vaksination_Status = ["full", "vacciness"]
const rate_Of_Pays = ["montly", "years"]
const banks = ["Bank central asia", "Bri", "Bni"]
const currencies = ["Indonesia Rupiah (IDR)", "Dolar (SGP)"]
const paymentMethods = ["Bank transfer", "Virtual Account"]

// REGISTER 
const user_Register_Role = ["supervisor", "user", "admin", "superAdmin"]


export {
  // // ENUM USER.MODEL
  create_user_roles, job_Level, gender, blood_Types, religions, marital_Status,
  // ENUM USERINFORMATION.MODEL
  hobbies, skills, languages, departments, covid19_Vaksination_Status, rate_Of_Pays, banks, currencies, paymentMethods,
  // user login 
  user_Register_Role
};
