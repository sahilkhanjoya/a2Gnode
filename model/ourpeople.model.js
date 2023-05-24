import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';

const people = sequelize.define('our people', {
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
    dictionary: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'our people',
    timestamps: true
});

sequelize.sync();
export default people;
