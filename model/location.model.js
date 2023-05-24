import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';

const location = sequelize.define('location', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    house_no: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    counrty: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pin_code: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    post_code: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    zip_code: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    land_mark: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'location',
    timestamps: true
});

sequelize.sync();
export default location;
