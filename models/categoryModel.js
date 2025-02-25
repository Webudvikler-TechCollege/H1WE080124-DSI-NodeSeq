import dbConfig from '../config/dbConfig.js'
import { DataTypes, Model } from 'sequelize'

export default class categoryModel extends Model{}

categoryModel.init({
    id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true 
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: dbConfig,
    modelName: 'category',
    underscored: true
})