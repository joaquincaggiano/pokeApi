module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define ('User', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER
        },
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        file: DataTypes.STRING
    },
    {
       tableName: 'users',       
       paranoid: true
    });
    User.associate = function (models) {
        User.belongsToMany(models.PokeFavorite, {
            as: 'users',
            through: 'pokeFavorites_users',
            foreignKey: 'userId',
            otherKey: 'pokemonId'
        })
    }
    return User;
}