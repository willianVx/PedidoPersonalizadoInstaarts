/*
*
*   Armazena dados para favoritar imagens com web storage API
*
*
*
*
*/
//Armazena lista de imagens favoritas que estão no webstorage // ** // tem os métodos do localStorage
var fav = function(){
    this.url_imagens = [];
    for (var key in localStorage) {
        if (localStorage.hasOwnProperty(key) & key.includes('image')) {
            this.url_imagens.push([key, localStorage[key]]);
        }
    }
    return this.url_imagens;
}
fav.prototype = window.localStorage;

//Adiciona uma nova imagem aos favoritos 
var add_fav = function(url){
    if (filtro(url) == -1) {
        var indice = 'image' + fav_indice_validate();
        fav.prototype.setItem(indice, url);
    }else{
        delete_fav(fav()[filtro(url)]["0"]);
        return
    }
}
add_fav.prototype = new fav();

//Deleta a imagem dos favoritos
var delete_fav = function(indice){
    fav.prototype.removeItem(indice);
}
delete_fav.prototype = new fav();

//compara a imagem a ser favoritada com as que estão salvas no webstorage
function filtro(url){
    var lista_url = [];
    for (let index = 0; index < fav().length; index++) {
        const element = fav()[index];
        lista_url.push(element[1]);
    }
    return lista_url.indexOf(url);
}
//valida indice
var fav_indice_validate = function(){
    let prop_indice = [];
    if (fav().length == 0) {
        return this.url_imagens.length + 11;
    }else{
        for (let index = 0; index < fav().length; index++) {
            const element = fav()[index];
            prop_indice.push(element[0]);
        }
        var ultimo_prop_indice = prop_indice[prop_indice.length -1];
        return apenasNumeros(ultimo_prop_indice) + 1;
    }
}
fav_indice_validate.prototype = new fav();

function apenasNumeros(string){
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}

//redenderiza as imagens salvas no localstorage 
jQuery(document).ready(function($){

    var $box_saved_images      =  $('.box_saved_images');
    var $saved_images          =  $('.saved_images');
    var $botao_imagem_salva    =  $('#imagem_salva');
    var $contador_imagem_salva =  $('.imagens_salvas_contador');

    if (fav().length > 0) {
        
        if (iap_define_tipo() == 'porta_retrato') {
            return
        }
        $saved_images.show();
        $botao_imagem_salva.show();
        $contador_imagem_salva.html(fav().length);
        get_image_show();
        
    }
    //exibe as imagens favoritadas ou que o usuário fez o upload
    function get_image_show(){

        for (let index = 0; index < fav().length; index++) {
            const element = fav()[index][1];

            var imagem_salva = document.createElement('img');
                imagem_salva.setAttribute('class', 'imagem_salva');
                
            var fileExtension = function( url ) {
                return url.split('.').pop().split(/\#|\?/)[0];
            }
            var i = element.split(".");
            var img_src = i[0] + "." + i[1] + "-300x300" + "." + fileExtension(element); 

                imagem_salva.src = img_src;
                imagem_salva.dataset.srcOriginal = element;

            var box_imagem_salva = document.createElement('div');
                box_imagem_salva.setAttribute('class', 'box_imagem_salva col-lg-6');

                box_imagem_salva.appendChild(imagem_salva);

            var x_exclui_imagem = document.createElement('span');
                x_exclui_imagem.setAttribute('class', 'x_exclui_imagem glyphicon glyphicon-remove');
        
            var usar_imagem = document.createElement('span');
                usar_imagem.setAttribute('class', 'glyphicon glyphicon-chevron-up');

                box_imagem_salva.appendChild(x_exclui_imagem);
                box_imagem_salva.appendChild(usar_imagem);

                $box_saved_images.append(box_imagem_salva);
        }
    }

    $('.box_imagem_salva').click(function(){
        //console.log($(this));
    });

    $('.glyphicon-chevron-up').click(function(){
        let src = $(this)[0].parentElement.childNodes[0].attributes[2].nodeValue;
        if (iap_define_tipo() == 'photobloco'){
            window.location.assign("https://instaarts.com/product/photobloco/?img="+src);
        }else{
            window.location.assign("https://instaarts.com/product/quadro-personalizado-instaarts/?img="+src);
        }
    });

    $('.box_imagem_salva').mouseover(function(){

        $(this).addClass('box_imagem_salva_hover');
        $(this).context.childNodes[1].style.display = "block";
        $(this)["0"].childNodes[2].style.display = "block";
    });

    //remove a imagem do local storage de acordo com o contexto
    $('.x_exclui_imagem').click(function(){
        add_fav($(this)[0].parentElement.childNodes[0].dataset.srcOriginal);
        $contador_imagem_salva.html(fav().length);
        $(this)["0"].parentElement.style.display = "none";
    });

    $('.box_imagem_salva').mouseout(function(){
        $(this).removeClass('box_imagem_salva_hover');
        $(this).context.childNodes[1].style.display = "none";
        $(this)["0"].childNodes[2].style.display = "none";
    });

});