import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';

const meanbanner = sequelize.define('mean banner', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    discription: {
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
    mobile_number: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    social_link: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'mean banner',
    timestamps: true
});

sequelize.sync();
export default meanbanner;