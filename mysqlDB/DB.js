
// import Sequelize from "sequelize";
// const sequelize = new Sequelize("defaultdb", "doadmin", "AVNS_XYWUqEVuyU_6iXKVAkx", {
//   host: "db-mysql-nyc1-45575-do-user-14134084-0.b.db.ondigitalocean.com",
//   dialect: "mysql",
//   port: 25060,
//   sslmode : "REQUIRED",
//   logging:false,
//   // dialectOptions: {
//   //   connectTimeout: 30000, // 30 seconds
//   // },
// });
 
import mongoose from "mongoose";

const db = async()=>{
  mongoose.connect('mongodb+srv://sahiljoya11:sahil1122@cluster0.syubkoh.mongodb.net/A2Groups').then(()=>{
    console.log("database connected.");
  }).catch((err)=>console.log(err.message))
}
export default db