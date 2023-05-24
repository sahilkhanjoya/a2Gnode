
import Sequelize from "sequelize";
const sequelize = new Sequelize("A2group", "root", "", {
  host: "localhost",
  dialect: "mysql",
   logging:false
});
export default sequelize
