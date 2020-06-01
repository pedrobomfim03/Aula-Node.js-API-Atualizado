module.exports = {
    enviarOk:(res,dados)=>{
        res.status(200);
        res.send(dados);
        res.end();
    },

    enviarErro:(res,msg)=>{
        res.status(400);
        res.send(msg);
        res.end();
    },
    
    pegarMaiorId:(listaItens)=>{
        let numeroMaior = 1;
        if(listaItens!=undefined){
            console.log(listaItens);
            listaItens.forEach((item)=>{
                numeroMaior = item.id>numeroMaior?item.id:numeroMaior;
            });
        }
        return parseInt(numeroMaior);
    },

    encontrarItem(lista,id){
        let indice = -1;
        lista.forEach((item,index)=>{
            if(item.id==id){
                indice = index;
            }
        });
        return indice;
    }
}