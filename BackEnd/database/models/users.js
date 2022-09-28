module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      userName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      file: DataTypes.STRING,
    },
    {
      tableName: "users",
      paranoid: true,
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
    }
  );
  User.associate = function (models) {
    User.belongsToMany(models.PokeFavorite, {
      as: "pokefavorites",
      through: "pokefavorites_users",
      foreignKey: "userId",
      otherKey: "pokemonId",
    });
  };
  return User;
};
