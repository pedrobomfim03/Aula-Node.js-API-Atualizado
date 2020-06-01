module.exports = {

    fileSystem: "",

    utils: "",

    produtoController: require("../controller/produto-controller.js"),

    pegarRotasProduto: function(dirName){
        let express = require("express");
        let router = express.Router();

        this.produtoController.dirProj = dirName;
        this.produtoController.fileSystem = this.fileSystem;
        this.produtoController.utils = this.utils;
        this.produtoController.configurarFileSystem();

        router.get("/",function(req,res){
            this.produtoController.listarProdutos(req,res);
        }.bind(this));
        
        router.get("/:id",function(req,res){
            this.produtoController.listarProduto(req,res);
        }.bind(this));
        
        router.post("/",function(req,res){
            this.produtoController.criarProduto(req,res);
        }.bind(this));
        
        router.put("/:id", async function(req,res){
            this.produtoController.editarProduto(req,res);
        }.bind(this));
        
        router.delete("/:id", async function(req,res){
            this.produtoController.excluirProduto(req,res);
        }.bind(this));

        return router;
    }
}


