import sequelize from '../config/sequelizeConfig.js'
import { DataTypes, Model } from 'sequelize'

export default class carModel extends Model{}

carModel.init({
    id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true 
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'car',
    underscored: true
})