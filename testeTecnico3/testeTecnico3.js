function separar(){
    // capturando o elemento do html
    let frase = document.getElementById("frase").value;
    //console.log(frase);

    //AQUI EU TENTEI CONVERTER PARA UM ARRAY E FAZER UM DESEMPACOTAMENTO, PORÉM EU LEMBREI QUE EXISTE O SPLIT ENTÃO NAO PRECISEI CONVETER E DESEMPACOTAR, POIS NAO HAVIA NECESSIDADE

    // |
    // V

    // let toDespackage = new Array(frase);
    // console.log(toDespackage);
    // console.log(toDespackage.length);

    // for(palavras in toDespackage){
    //     let novaspalvras
    //     console.log(novaspalvras)
    // }


    // funções para separar e remover o espaço entre elas
    let palavras = frase.trim().split(" ");

    //console.log(palavras.length)
    //console.log(palavras)

    // retorno da quantidade de palavras na frase
    document.getElementById("resultado").innerText = 
        `A quantidade de palavras dentro da frase é de: ${palavras.length}`;



}
