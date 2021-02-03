'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Tag.hasMany(models.PlantTag, {
            foreignKey: ''
          })
    }
  };
  Tag.init({
    tagId : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    tagName: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};