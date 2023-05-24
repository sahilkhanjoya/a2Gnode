import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';

const HR = sequelize.define('HR executive', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_no: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    resume: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'HR executive',
    timestamps: true
});

sequelize.sync();
export default HR;