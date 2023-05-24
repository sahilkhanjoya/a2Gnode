import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';

const venture = sequelize.define('list_venture', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discription: {
        type: DataTypes.STRING,
        allowNull: false
    },
    website_link: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'list_venture',
    timestamps: true
});

sequelize.sync();
export default venture;