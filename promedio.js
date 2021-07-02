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