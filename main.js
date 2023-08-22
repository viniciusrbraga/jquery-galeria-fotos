/* jQuery funciona através do $ e dos (), onde o elemento fica dentro dos (), 
   o READY diz o que deve acontecer quando o elemento estiver pronto          
   No exemplo abaixo, deve executar o ALERT                                   
   
$(document).ready(function() {
    alert("jQuery");
});
*/

/* Adicionando um evento a um elemento através de callback*/
$('header button').click(function () {

    /* Exibe o formulário usando a função slideDown */
    $('form').slideDown();
});

$('#botao-cancelar').click(function () {
    $('form').slideUp();
})

/* Adicionando um evento a um elemento através da função ON*/
$('form').on('submit', function (e) {
    /* previne o comportamento padrão do formulário, de atualizar a página, após a submissão */
    e.preventDefault();

    const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
    console.log(`${enderecoDaNovaImagem}`)
    /* Elemento HTML que irá conter a imagem e o link */
    /* style inserido aqui para que o elemento não seja exibido inicialmente, */
    /* só aparecendo com a função FADEIN() */
    const novoItem = $('<li style="display : none"></li>')

    /* Elemento IMG com o endereço recuperado e contatenado ao elemento anterior */
    $(`<img src="${enderecoDaNovaImagem}">`).appendTo(novoItem);

    $(`
        <div class="overlay-image-link">
            <a href="${enderecoDaNovaImagem}" title="Ver a imagem em tamanho real" target="_blank">
                Ver a imagem em tamanho real
            </a>
        </div>
    `).appendTo(novoItem);

    /* Adiciona o novo elemento na tela */
    $(novoItem).appendTo('ul');

    /* Exibe o elemento de forma animada */
    /* O parânetro é em milisegundos */
    $(novoItem).fadeIn(0500);

    /* Apaga o conteúdo do campo após a inclusão do novo item */
    $('#endereco-imagem-nova').val('');
})
