const calculo = document.querySelector('#calculo');



function imc (){
    
    const nomee = document.querySelector('#nomee').value // como eu só vou  precisar do valor, posso colocar diretamente na função
    const alturaa = document.querySelector('#alturaa').value // como eu só vou  precisar do valor, posso colocar diretamente na função
    const pesoo = document.querySelector('#pesoo').value // como eu só vou  precisar do valor, posso colocar diretamente na função
    const resultado = document.querySelector('#resultado');

    if (nomee !== '' && alturaa !== '' && pesoo !== ''){
        const valorIMC = (pesoo / (alturaa * alturaa)).toFixed(1) // para fixar a uma casa decimal

        let classificacao = ''
        if(valorIMC < 18.5){
            classificacao = 'abaixo do peso.'
        } else if (valorIMC < 25) {
            classificacao = 'Com peso Ideal.'
        } else if (valorIMC < 30) {
            classificacao = 'Levemente acima do peso.'
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau 1.'
        } else if (valorIMC < 40){
            classificacao = 'com obesidade grau 2.'
        } else{
            classificacao = 'com obesidade grau 3.'
        }

        resultado.textContent = `${nomee} seu IMC é: ${valorIMC} e você está ${classificacao} `

    } else {
        resultado.textContent = 'Preencha todos os campos' // preenchimento do campo de resultado
    }
}

calculo.addEventListener('click', imc)
