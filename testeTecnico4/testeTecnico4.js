function Random() {
    // funcao para gerar os numeros aleatorios
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // criando e populando o array
    let arrayMain = [];
    for (let i = 0; i < 50; i++) {
        arrayMain.push(getRandom(-1, 100));
    }
    //console.log(arrayMain);



    // multplos de 3
    let arrayM3 = []; 
    // nao multplos de 3  
    let arrayNon3 = []; 

    // separando os multplos de 3
    for (let numero of arrayMain) {
        if (numero % 3 === 0) {
            arrayM3.push(numero); 
        } else {
            arrayNon3.push(numero); 
        }
    }
    //console.log(arrayM3); 
    //console.log(arrayNon3);




    // retorno de tudo nos <p> que estao invisiveis
    document.getElementById("aleatorio").innerText = 
        `Array aleatorio: ${arrayMain}`;

    document.getElementById("multiplosDe3").innerText = 
        `Array Multiplos de 3: ${arrayM3}`;

    document.getElementById("naoMultiplosDe3").innerText = 
        `Array NAO multiplos de 3: ${arrayNon3}`;
}

