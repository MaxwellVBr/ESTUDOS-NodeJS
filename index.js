const express = require('express');
const app = express();
const Pedidos = require("./DAO/PedidosDAO");

// BodyParser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Config Template Engine Handlebars
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/pedido', function(req, res) {
    res.render('pedido');
});

app.post('/cadpedido', function(req, res) {
    Pedidos.create({
        Nome: req.body.nomeCliente,
        Endereco: req.body.enderecoCliente,
        Email: req.body.emailCliente,
        Telefone: req.body.telefoneCliente,
        Produto: req.body.produtoCliente,
        Quantidadem2: req.body.quantidadeProduto,
        ModoTelha: req.body.modoTelha
        // Adicionar outras propriedades ao objeto conforme for necessário
    })
    .then(function() {
        res.redirect('pedido');
    })
    .catch(function(erro) {
        console.error("Falha:", erro);
        res.status(500).json({ erro: "Falha: " + erro });
    });
});

/*app.get('/login', function(req, res) {
    res.render('login');
});

app.post('/login', function(req, res) {
    if (req.body.username == "usuario" && req.body.password == "senha") {
        res.redirect('test');
    } else {
        // Lógica para lidar com login inválido
    }
});*/

//req.flash("success_msg", "Pedido gerado com sucesso!")

// localhost:8080
app.listen(8080, function() {
    console.log("Servidor Rodando");
});