'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car.belongsTo(models.Make, {
        foreignKey: 'makeId',
      })
    }
  }
  Car.init({
    name: DataTypes.STRING,
    color: {
      type: DataTypes.ENUM('Black', 'White', 'Red', 'Grey'),
      defaultValue: 'Black'
    },
    makeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Makes',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Car',
  });
  return Car;
};