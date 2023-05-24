import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';
import SEO from './SEO.model.js';

const city = sequelize.define('city', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'city',
    timestamps: true
});

sequelize.sync();
export default city;

SEO.belongsTo(city, { foreignKey: 'city_id' });
city.hasMany(SEO, { foreignKey: 'city_id' });