import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';


const touch = sequelize.define('get in touch', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    icon_value: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false,
        // get() {
        //     const value = this.getDataValue('value');
        //     return value ? JSON.parse(value) : null;
        // },
        // set(value) {
        //     this.setDataValue('value', JSON.stringify(value));
        // }
    }
},
    {
        tableName: 'get in touch',
        timestamps: true
    });

sequelize.sync();
export default touch;