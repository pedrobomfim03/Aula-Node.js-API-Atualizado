module.exports = {

    dirProj: "",

    diretorio: function(){return this.dirProj+"\\files\\produto.json"},

    fileSystem: "",

    utils: "",

    configurarFileSystem: function(){
        this.fileSystem.diretorio = this.diretorio();
    },

    listarProdutos: async function(req,res){
        try{
            let existe = this.fileSystem.existeArquivo();
            existe.then(async function(){
                let produtos = JSON.parse(await this.fileSystem.lerArquivo());
                this.utils.enviarOk(res,produtos);
            }.bind(this)).catch(function(){
                this.fileSystem.escreverArquivo([]);
                this.utils.enviarOk(res,"[]");
            }.bind(this));
        }catch(ex){
            console.log(ex);
            this.utils.enviarErro(res,"Ocorreu um erro na procura dos produtos");
        }
    },

    listarProduto: async function(req,res){
        try{
            let existe = this.fileSystem.existeArquivo();
            existe.then(async function(){
                let produtos = JSON.parse(await this.fileSystem.lerArquivo());
                this.utils.enviarOk(res,produtos.find((item)=>item.id==req.params.id));
            }.bind(this)).catch(function(){
                this.fileSystem.escreverArquivo([]);
                this.utils.enviarErro(res,"Produto não encontrado.");
            }.bind(this));
        }catch(ex){
            console.log(ex);
            this.utils.enviarErro(res,"Ocorreu um erro na procura pelo produto");
        }
    },

    criarProduto: async function(req,res){

        try{
            let produtos = JSON.parse(await this.fileSystem.lerArquivo());
            req.body.id = this.utils.pegarMaiorId(produtos)+1;
            produtos.push(req.body);
            await this.fileSystem.escreverArquivo(produtos);
            this.utils.enviarOk(res,"Produto criado com sucesso!");
        }catch(ex){
            console.log(ex);
            this.utils.enviarErro(res,"Produto não foi criado.");
        }

    },

    editarProduto: async function(req,res){
        try{
            let produtos = JSON.parse(await this.fileSystem.lerArquivo());
            let indice = this.utils.encontrarItem(produtos,req.params.id);
            if(indice==-1){
                this.utils.enviarErro(res,"O produto com o indice informado não existe!");
                return ;
            }
            req.body.id = req.params.id;
            produtos[indice] = req.body;
            await this.fileSystem.escreverArquivo(produtos);
            this.utils.enviarOk(res,"Produto editado com sucesso!");
        }catch(ex){
            console.log(ex);
            this.utils.enviarErro("Produto não foi editado.");
        }
    },

    excluirProduto: async function(req,res){
        try{
            let produtos = JSON.parse(await this.fileSystem.lerArquivo());
            let indice = this.utils.encontrarItem(produtos,req.params.id);
            if(indice==-1){
                this.utils.enviarErro(res,"O produto com o indice informado não existe!");
                return;
            }
            produtos.splice(indice,1);
            await this.fileSystem.escreverArquivo(produtos);
            this.utils.enviarOk(res,"Produto excluído com sucesso!")
        }catch(ex){
            console.log(ex);
            this.utils.enviarErro(res,"Produto não foi excluído");
        }
    }
}