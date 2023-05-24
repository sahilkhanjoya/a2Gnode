import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';

const SEO = sequelize.define('SEO Executive', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Employee_Type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Experience: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Skill: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Salary: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Date_posted: {
        type: DataTypes.STRING,
        allowNull: false
    },
    job_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    job_Description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Responsibilities:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Required_skills:{
        type: DataTypes.STRING,
        allowNull: false
    },
    

}, {
    tableName: 'SEO Executive',
    timestamps: true
});

sequelize.sync();
export default SEO;
