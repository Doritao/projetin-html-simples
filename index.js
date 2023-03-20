function clicar(cor) {
    var color = cor
    var img = document.getElementById(`img-iphone`)
    var circulo = document.querySelector(`.circulo`)
    if(cor == 'azul') {
        img.src = 'img/iphone-azul.png'
        circulo.style.background = '#81A5C4'
        
    }
    if(cor == 'amarelo') {
        img.src = 'img/iphone-amarelo.png'
        circulo.style.background = '#F7DA47'
    }
    if(cor == 'branco') {
        img.src = 'img/iphone-branco.png'
        circulo.style.background = '#C1C1C1'
    }
    if(cor == 'preto') {
        img.src = 'img/iphone-preto.png'
        circulo.style.background = '#272D33'
    }
    if(cor == 'vermelho') {
        img.src = 'img/iphone-vemelho.png'
        circulo.style.background = '#B50012'
    }
    if(cor == 'roxo') {
        img.src = 'img/iphone-roxo.png'
        circulo.style.background = '#EDE7F1'
    }
 
 /*   switch (cor) {
        case 'azul':
            img.src = 'img/iphone-azul.png'
            console.log(`to louco`)
            break;
        case 'amarelo':
            img.src = 'img/iphone-amarelo.png'
            break;
        case 'branco':
            img.src = 'img/iphone-branco.png'
            break;
        case 'preto':
            img.src = 'img/iphone-preto.png'
            break;
        case 'vermelho':
            img.src = 'img/iphone-vemelho.png'
            break;
        case 'roxo':
            img.src = 'img/iphone-roxo.png'
            break;
        default:
            console.log(cor)
            window.alert('error')
            break;
    }*/
}