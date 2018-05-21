//captura variavel na url 
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
    valor: " R$ 149,90",

    ligar: function () {

        this.altura = 13;
        this.d_porta_retrato = "Porta retrato 13x13";
        this.d_porta_retrato_tamanho = "13x13cm";
        this.c_width = 69,
        this.d_height = 69,
        this.valor = " R$ 119,90"

    }

}