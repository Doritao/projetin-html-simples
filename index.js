function clicar(cor) {
    var color = cor
    var img = document.getElementById(`img-iphone`)
    if(cor == 'azul') {
        img.src = 'img/iphone-azul.png'
    }
    if(cor == 'amarelo') {
        img.src = 'img/iphone-amarelo.png'
    }
    if(cor == 'branco') {
        img.src = 'img/iphone-branco.png'
    }
    if(cor == 'preto') {
        img.src = 'img/iphone-preto.png'
    }
    if(cor == 'vermelho') {
        img.src = 'img/iphone-vemelho.png'
    }
    if(cor == 'roxo') {
        img.src = 'img/iphone-roxo.png'
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