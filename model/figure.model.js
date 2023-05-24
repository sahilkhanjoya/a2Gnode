import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';

const figure = sequelize.define('a2g figure', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    industuies: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false
    },
    office: {
        type: DataTypes.STRING,
        allowNull: false
    },
    proffessional: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'a2g figure',
    timestamps: true
});


sequelize.sync();
export default figure;
