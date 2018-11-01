img_acervo = "0";
//captura variavel na url
iap_resolve_url_acervo = function () {
     //captura link da imagem na url
     var url_string = window.location.href; 
     var url = new URL(url_string);
     var p_image_src = url.searchParams.get("img");

     /*
     var image_box = document.getElementById("editable-image");
     image_box.src = p_image_src;
    */
    img_acervo = "1";
    return p_image_src;
}
iap_resolve_url = function () {

  if (window.location.href.includes("kit-de-porta-retratos") || window.location.href.includes("photobloco")) {
    url = window.location.href;
    return url;
  }

  else{
    return "0";
  }
  
}

//define acao de acordo com o tipo da url
iap_define_tipo = function(){

    var tipo = iap_resolve_url();
    var photobloco = tipo.includes("photobloco");
    var porta_retrato = tipo.includes("kit-de-porta-retratos");
    var porta_retrato_13x13 = tipo.includes("13x13");

    if (photobloco) {
        return "photobloco";
    }

    if (porta_retrato_13x13) {
        porta_retrato_13x13_config.ligar();
        return "porta_retrato";
    }

    if (porta_retrato) {
        return "porta_retrato";
    }
    
    else{
        return "imagem_acrilico";
    }

}
//Define configurações para o porta retrato quadrado 13x13 
var porta_retrato_13x13_config = {

    altura: 18, 
    d_porta_retrato_acabamento: "Porta retrato",
    d_porta_retrato_tamanho: "13x18cm",
    c_width: 69,
    d_height: 53,
    valor: " R$ 169,90",

    ligar: function () {

        this.altura = 13;
        this.d_porta_retrato = "Porta retrato 13x13";
        this.d_porta_retrato_tamanho = "13x13cm";
        this.c_width = 69,
        this.d_height = 69,
        this.valor = " R$ 129,90"

    }

}
/*
//faz render da imagem do acervo na tela 
render_img_acervo = function (url) {

    var image_box = document.getElementById("editable-image");
        image_box.src = url;
        //exibe_img_acervo();
    var dropArea = document.getElementById("drop-area");
    var imgUploadLine = document.getElementsByClassName("mg-upload-line");

    dropArea.style = "display: none;";
    image_box.style = "display: initial;"
    console.log(image_box, dropArea, imgUploadLine);
}

/*
jQuery(document).ready(function($) {
    
    //return window.$teste = $("#drop-area").toggle();

    function exibe_img_acervo() {

        $("#drop-area").toggle();
        $("#editable-image").toggle();
        $(".img-upload-line").toggle();

    }
    
}); */