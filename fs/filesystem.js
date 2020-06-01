module.exports = {
    diretorio:"",

    fs: require("fs"),

    existeArquivo: function(){
        return new Promise(function(resolve,reject){
            this.fs.exists(this.diretorio,(existe)=>existe?resolve():reject());
        }.bind(this));
    },

    lerArquivo: function(){        
        return this.fs.promises.readFile(this.diretorio,{encoding:"UTF-8"});
    },

    escreverArquivo: function(dados){
        return this.fs.promises.writeFile(this.diretorio,JSON.stringify(dados),{encoding:"UTF-8"});
    },

}