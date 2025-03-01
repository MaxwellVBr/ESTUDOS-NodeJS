const  Sequelize  = require('sequelize');
const db = require ('../connection');
//const Usuario = require("../DAO/LoginDAO");
const Pedidos = require("..");

/*async function insertCustomer(customer) {
    try {
        await Usuario.create({
            Nome: customer.nome,
            Senha: customer.senha,
            Tipo: customer.tipo
        });
        console.log('Usuário inserido com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir usuário:', error);
    }
};*/

async function insertCustomerPed(customerPed) {
    try {
        await Pedidos.create({
            Nome: customerPed.nome,
            Senha: customerPed.endereco,
            Email: customerPed.email,
            Telefone: customerPed.telefone,
            Produto: customerPed.produto,
            Quantidadem2: customerPed.quantidadem2,
            ModoTelha: customerPed.modotelha,

        });
        console.log('Pedido inserido com sucesso!');
    } catch (error) {
        console.error('Erro ao inserir usuário:', error);
    }
};

module.exports = insertCustomer, insertCustomerPed;''