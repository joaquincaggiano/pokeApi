module.exports = (sequelize, DataTypes) => {
    const PokeTrivia = sequelize.define('PokeTrivia', {
        id: { primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER},
        question: DataTypes.STRING,
        answer1: DataTypes.STRING,
        answer2: DataTypes.STRING,
        answer3: DataTypes.STRING,
        answer4: DataTypes.STRING,
        correctAnswer: DataTypes.STRING,
        image: DataTypes.STRING

    }, {
        tableName: 'pokeTrivia',
        paranoid: true,
        timestamps: true,
        createdAt: "createdAt",
        updatedAt: "updatedAt",
        deletedAt: "deletedAt",
    });
    return PokeTrivia;
}