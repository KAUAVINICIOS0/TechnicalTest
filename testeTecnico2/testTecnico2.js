function calcularMulta() {
    // pegar os elementos do html
    let vlMulta = parseFloat(document.getElementById("vlMulta").value);
    let qtdAtraso = parseInt(document.getElementById("qtdAtraso").value);

    //console.log(vlMulta)
    //console.log(qtdAtraso)


    // validar os caracteres ds campos
    if (isNaN(vlMulta) || isNaN(qtdAtraso)) {
        document.getElementById("resultado").innerText = "Por favor, preencha os campos corretamente.";
        return;
    }

    let valorMultaFinal = vlMulta * qtdAtraso;

    //console.log(valorMultaFinal)

    // verificacao dos 1 real
    if (valorMultaFinal < 1) {
        valorMultaFinal = 1.00;
    }

    // retorno do valor da multa
    document.getElementById("resultado").innerText = 
        `O valor da multa para ${qtdAtraso} dias de atraso é: R$${valorMultaFinal.toFixed(2)}`;

}



// nao vai deixar colocar mais 2 casas apos a virgula (esqueci o nome)
function formatarValor(campo) {
    let valor = parseFloat(campo.value);
    if (!isNaN(valor)) {
        campo.value = valor.toFixed(2);
    }
}
