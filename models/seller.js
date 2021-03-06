const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Seller', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    provider: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: "local"
    },
    snsId: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    profile: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Seller',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
