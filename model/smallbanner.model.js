import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../mysqlDB/DB.js';
import brand from './ourbrand.model.js';

const smallbanner = sequelize.define('small banner', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'small banner',
    timestamps: true
});

sequelize.sync();
export default smallbanner;

brand.belongsTo(smallbanner, { foreignKey: 'smallbanner_id' });
smallbanner.hasMany(brand, { foreignKey: 'smallbanner_id' });