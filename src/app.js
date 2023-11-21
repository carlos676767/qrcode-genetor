//declara as variaveis
let botao = document.getElementById('botao');
let qr = new QRCode(document.getElementById('tela'));
let img = document.getElementById('img');
let check = document.getElementById('check');
let header = document.getElementById(`header`)




//cria uma funcao no scroll para quando rolar ficar trasnaparente.
onscroll = function(){
    let label = document.getElementById(`label`)
    if (document.body.scroll > 50 || document.documentElement.scrollTop > 50) {
        header.style.backgroundColor = `transparent`
        label.style.color = `black`
    } else{
        header.style.backgroundColor = `#0D3487`
        label.style.color = `white`
    }
} 



//cria uma funcao para o botao sumir
function botaosumir() {
    botao.style.display = 'none';
}




//cria uma funcao que gera o qrcode
function gerarqrcode() {
    let input = document.getElementById(`input`).value;
    const color1 = document.getElementById('color1').value;
    const color2 = document.getElementById('color2').value;

    if (check.checked) {
        qr = new QRCode(document.getElementById('tela'), {
            text: input,
            colorDark:  `white`,
            colorLight: color2,
        });
    } else{
        qr = new QRCode(document.getElementById('tela'), {
            text: input,
            colorDark: color1,
            colorLight: color2,
        });
    }
}  





//cria uma funcao que some a imagem
function sumirimg() {
    img.style.display = 'none';
}





//cria uma funcao que limpa
function limpar() {
    document.getElementById('tela').innerHTML = '';
    img.style.display = 'none';
}




 
//funcao para aparecer a mensagem de vazio.
function mensagemdevazio() {
    Swal.fire({
        title: 'Campo vazio!',
        text: 'Campo de entrada vazio, preencha com os dados!',
        icon: 'error',
        confirmButtonText: 'OK'
    });
}





//funcao para exibir a mensagem de sucesso.
function exibirToastSucesso() {
    Swal.fire({
        icon: 'success',
        title: 'Os dados irão aparecer logo abaixo. 😊'
    });
}






//chama as funcoes pra quando clicar no botao
botao.addEventListener('click', function() {
    let input = document.getElementById('input').value;
    if (input === '') {
        mensagemdevazio();
    } else {
        gerarqrcode();
        exibirToastSucesso();
        sumirimg();
        botaosumir()
    }
});




