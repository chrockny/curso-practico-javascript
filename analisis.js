const salariosCol = colombia.map(
    personita =>{
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    (salaryA,salaryB)=>{
        return salaryA - salaryB;
    }
);
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

function esPar(numerito){
    return (numerito % 2 === 0);
}

function medianaSalarios(lista){
    let mitad = parseInt(lista.length / 2);
    if(esPar(lista.length)){
        let personitaMitad1 = lista[mitad -1];
        let personitaMitad2 = lista[mitad -2];
        return calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
    }else{
        let personitaMitad = lista[mitad];
        return personitaMitad;
    }
}
const medianaGeneralCol = medianaSalarios();

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;
const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log(medianaSalarios(salariosColSorted));