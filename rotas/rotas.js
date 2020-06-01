const app = require("../app.js");
const utils = require("../utils/utils.js");
const fileSystem = require("../fs/filesystem.js");

let rotasProduto = require("./rotas-produto.js");
rotasProduto.fileSystem = fileSystem;
rotasProduto.utils = utils;
rotasProduto.adicionarRotasProduto(app,fileSystem,utils);

module.exports = app;