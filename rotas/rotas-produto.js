module.exports = {

    fileSystem: "",

    utils: "",

    produtoController: require("../controller/produto-controller.js"),

    adicionarRotasProduto: function(app){

        this.produtoController.dirProj = app.dirName;
        this.produtoController.fileSystem = this.fileSystem;
        this.produtoController.utils = this.utils;
        this.produtoController.configurarFileSystem();

        app.get("/produto",function(req,res){
            this.produtoController.listarProdutos(req,res);
        }.bind(this));
        
        app.get("/produto/:id",function(req,res){
            this.produtoController.listarProduto(req,res);
        }.bind(this));
        
        app.post("/produto",function(req,res){
            this.produtoController.criarProduto(req,res);
        }.bind(this));
        
        app.put("/produto/:id", async function(req,res){
            this.produtoController.editarProduto(req,res);
        }.bind(this));
        
        app.delete("/produto/:id", async function(req,res){
            this.produtoController.excluirProduto(req,res);
        }.bind(this));
    }
}


