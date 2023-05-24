import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';

const journey = sequelize.define('journey', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'journey',
    timestamps: true
});

sequelize.sync();
export default journey;