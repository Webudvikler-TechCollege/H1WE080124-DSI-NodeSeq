import dbConfig from '../config/dbConfig.js'
import { DataTypes, Model } from 'sequelize'
import brandModel from './brandModel.js'

export default class carModel extends Model{}

carModel.init({
    id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true 
    },
    model: {
        type: DataTypes.STRING,
        allowNull: false
    },
    brand_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: brandModel,
            key: 'id'
        }
    },
    year: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelize: dbConfig,
    modelName: 'car',
    underscored: true
})