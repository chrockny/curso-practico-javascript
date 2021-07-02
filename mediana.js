
function calcularMediaAritmetica(lista){
    //let sumaLista = 0;
   // for(let i = 0; i < lista1.length; i++) {
    //    sumaLista = sumaLista + lista[i];
   // }
    const sumaLista = lista.reduce(
    (valorAcumulado = 0,nuevoElemento)=>{
        return valorAcumulado + nuevoElemento;
        }
    );
    let promedioLista = sumaLista / lista.length;

    return promedioLista;  
}


function calcularMediana(lista){
    let listaOrdenada = lista.sort();
    const mitadLista = parseInt(listaOrdenada.length / 2);

    function esPar(numerito){
        if(numerito % 2 === 0){
            return true;
        }else{
            return false;
        }
    }
    var mediana;
    
    if(esPar(lista.length)){
        let elemento1 = listaOrdenada[mitadLista -1];
        let elemento2 = listaOrdenada[mitadLista];
    
        let promedioElemento1y2 =calcularMediaAritmetica([elemento1,elemento2]);
    
        mediana = promedioElemento1y2;
    
    }else{
        mediana = listaOrdenada[mitadLista];
    }

    return mediana;
}