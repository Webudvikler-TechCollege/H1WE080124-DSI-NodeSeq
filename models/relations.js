import carModel from "./carModel.js";
import brandModel from "./brandModel.js";
import categoryModel from "./categoryModel.js";

export const setRelations = () => {
    carModel.belongsTo(brandModel, {
        foreignKey: 'brand_id'
    })
    brandModel.hasMany(carModel, {
        onDelete: 'CASCADE',
        hooks: true
    })
    carModel.belongsTo(categoryModel, {
        foreignKey: 'category_id'
    })
    categoryModel.hasMany(carModel, {
        onDelete: 'DELETE',
        hooks: true
    })
}
