const connect = require("./services/database.service");
require("dotenv").config();

(async () => {
  console.log("Test connect database");
  await connect();
})();
