const lista1 = [
    1,2,3,1,2,3,4,2,2,2,1
];

const lista1Count = {

};

lista1.map(item=>{
    if(lista1Count[item]){
        lista1Count[item] += 1;    
    }else{
        lista1Count[item] = 1;
    }
});

const lista1Array = Object.entries(lista1Count).sort(
    (elementoA,elementoB)=>{
    return elementoA[1] - elementoB[1];
    }
);

const moda = lista1Array[lista1Array.length - 1];
