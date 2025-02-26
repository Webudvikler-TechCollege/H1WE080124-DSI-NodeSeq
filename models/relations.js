import carModel from "./carModel.js";
import brandModel from "./brandModel.js";

export const setRelations = () => {
    carModel.belongsTo(brandModel, {
        // Defines the foreing key
        foreignKey: 'brand_id'
    })
    brandModel.hasMany(carModel, {
        // Defines the on delete action
        onDelete: 'CASCADE', 
        // Enables cascade deletion
        hooks: true     
    })
}