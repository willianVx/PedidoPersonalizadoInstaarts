//captura variavel na url 
iap_resolve_url = function () {
  
  if (window.location.href.includes("=")) {
    var url = window.location.href.split("=")[1];

    var url= url.split("%2F");
    var url = url.join("/");
  
    var url= url.split("%3A");
    var url = url.join(":"); 
  
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

    if (photobloco) {
        return "photobloco";
    }

    /*
    if (tipo == "porta_retrato") {
        console.log("inicia configuracao para porta retrato");
    }
    if (tipo == "photolight") {
        console.log("inicia configuracao para photolight");
    }
    if (tipo.endsWith("jpeg") || tipo.endsWith("png") || tipo.endsWith("gif") || tipo.endsWith("jpg")) {
        console.log("inicia configuracao para imagens");
    }*/

    else{
        return "imagem_acrilico";
    }

}
