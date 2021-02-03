'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        User.hasMany(models.PlantTag, {
          foreignKey: ''
        })
      }
  };
  Plant.init({
    plantId : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    plantName: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Plant',
  });
  return Plant;
};