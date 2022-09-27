module.exports = (sequelize, DataTypes) => {
    const PokeFavorite = sequelize.define('PokeFavorite', {
        id: { primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER},
        pokemon: DataTypes.STRING
    }, {
        tableName: 'pokefavorites',
        paranoid: true,
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        deletedAt: "deletedAt",
    });

    PokeFavorite.associate = function (models) {
        PokeFavorite.belongsToMany(models.User, {
            as: 'pokeFavorites',
            through: 'pokeFavorites_users',
            foreignKey: 'pokemonId',
            otherKey: 'userId'
        })
    }
    return PokeFavorite;
}