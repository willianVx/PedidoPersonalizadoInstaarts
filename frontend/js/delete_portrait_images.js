jQuery(document).ready(function($){

    //inicia valores para deletar a imagem selecionada
    var delete_image = function(porta_retrato, imagens_canvas, objeto_img_canvas, indice){

        this.porta_retrato  = porta_retrato;
        this.imagens_canvas = imagens_canvas;
        this.img_canvas     = objeto_img_canvas;
        this.indice         = indice;
        cacheDomImages();
        //console.log(porta_retrato, imagens_canvas, objeto_img_canvas, indice);
        //console.log(cliente_imagem_url.lista);
    }
    //cachedom dos elementos html que serão deletados 
    var cacheDomImages = function(){
        var $ul_porta_retrato = $('#porta_retrato');
        console.log($ul_porta_retrato["0"].children);
    }
    cacheDomImages.prototype = new delete_image();

    return window.delete_image = delete_image;
});