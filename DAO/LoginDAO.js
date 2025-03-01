const  Sequelize  = require('sequelize');
const DB = require ("../Conexao/connection");

//Tabela e Colunas do DB

const Login = DB.define('logins', {
    idlogin: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});

//Criação da tabela no DB Obs.: Executar uma vez

//Login.sync();

module.exports = Login;