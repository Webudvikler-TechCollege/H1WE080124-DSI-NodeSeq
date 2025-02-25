import dbConfig from '../config/dbConfig.js'
import { DataTypes, Model } from 'sequelize'

export default class brandModel extends Model{}

brandModel.init({
    id: {
       type: DataTypes.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true 
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: dbConfig,
    modelName: 'brand',
    underscored: true
})