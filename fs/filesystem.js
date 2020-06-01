module.exports = {
    diretorio:"",

    fs: require("fs"),

    existeArquivo: function(){
        return new Promise(function(resolve,reject){
            this.fs.exists(this.diretorio,(existe)=>existe?resolve():reject());
        }.bind(this));
    },

    lerArquivo: function(){        
        return new Promise(function(resolve,reject){
            this.fs.readFile(this.diretorio,{encoding:"UTF-8"},(err,dados)=>{
                if(err){
                    return reject(err);
                }
                resolve(JSON.parse(dados));
            });
        }.bind(this));
    },

    escreverArquivo: function(dados){
        return new Promise(function(resolve,reject){
            this.fs.writeFile(this.diretorio,JSON.stringify(dados),(err)=>{
                if(err){
                    return reject(err);
                }
                resolve();
            });
        }.bind(this))
    },

}