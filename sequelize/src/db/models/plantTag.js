"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PlantTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PlantTag.belongsTo(models.Plant, {
        foreignKey: "id",
      });
      PlantTag.belongsTo(models.Tag, {
        foreignKey: "id",
      });
    }
  }
  PlantTag.init(
    {
      plantId: {
        type: DataTypes.INTEGER,
        references: {
          model: Plant,
          key: "plantId",
        },
        tagId: {
          references: {
            model: Tag,
            key: "tagId",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "PlantTag",
    }
  );
  return PlantTag;
};
