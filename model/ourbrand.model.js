import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';

const brand = sequelize.define('our brand', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url:{
        type: DataTypes.STRING,
        allowNull: false
    },
    smallbanner_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'our brand',
    timestamps: true
});

sequelize.sync();
export default brand;