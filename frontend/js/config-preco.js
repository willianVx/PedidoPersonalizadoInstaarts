    var x = 20;
    var y = 18;
    var tipoMoldura = 0;
    var nome_moldura = " Sem Moldura ";
    var nome_acabamento = " Metacrilato 3mm ";
    var preco = 343.6;
    var tipo_moldura = 0;
    window.escolherPreco = 0;
    window.escolherAcabamento = 0;
    //editar_unlock define se o calculo de tamanho deve ser feito
    var editar_unlock = 0;

jQuery(document).ready(function($){
    //define tamanho 
    var tamanho = {
        setTamanho(x, y){
            window.escolherPreco = 1;
            
            if (typeof imgWidth == "undefined" | typeof imgHeight == "undefined" | typeof ylistaA == "undefined") {
                this.x = x;
                this.y = y;
                this.tamanhoTexto(x,y);
                enviaDados();
            }
            else{
                this.x = x;
                this.y = y;
                this.tamanhoTexto(x,y);
                enviaDados();
            }
            resize_image(x);
        },
        getTamanho(a){
           if(a === x){
               return this.x;
           }
           if(a === y){
               return this.y;
           }
        },
        tamanhoTexto(x,y){
            $("#s-tamanho").html(this.x+"x"+this.y+"cm");
        }
    }

    
    $("#tamanho1").click(function(){
        if (document.getElementById('tamanho1_input').disabled == true) {
            return;
        }
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(20,18);
        }else{
            tamanho.setTamanho(20,ylistaA);
        }
        enviaDados();
    });

    $("#tamanho2").click(function(){
        if (document.getElementById('tamanho3_input').disabled == true) {
            return;
        }
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(30,27);
        }else{
            tamanho.setTamanho(30,ylistaB);
        }
        enviaDados();
    });

    $("#tamanho3").click(function(){
        if (document.getElementById('tamanho3_input').disabled == true) {
            return;
        }
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(40,36);
        }else{
            tamanho.setTamanho(40,ylistaC);
        }
        enviaDados();
    });

    $("#tamanho4").click(function(){
        if (document.getElementById('tamanho4_input').disabled == true) {
            return;
        }
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(50,45);
        }else{
            tamanho.setTamanho(50,ylistaD);
        }
        enviaDados();
    });

    $("#tamanho5").click(function(){
        if (document.getElementById('tamanho5_input').disabled == true) {
            return;
        }
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(60,54);
        }else{
            tamanho.setTamanho(60,ylistaE);
        }
        enviaDados();
    });

    $("#tamanho6").click(function(){
        if (document.getElementById('tamanho6_input').disabled == true) {
            return;
        }
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(70,64);
        }else{
            tamanho.setTamanho(70,ylistaF);
        }
        enviaDados();
    });

    $("#tamanho7").click(function(){
        if (document.getElementById('tamanho7_input').disabled == true) {
            return;
        }
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(80,72);
        }else{
            tamanho.setTamanho(80,ylistaG);
        }
        enviaDados();
    });

    $("#tamanho8").click(function(){
        if (document.getElementById('tamanho8_input').disabled == true) {
            return;
        }
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(90,82);
        }else{
            tamanho.setTamanho(90,ylistaH);
        }
        enviaDados();
    });

    //define acabamento 

    function setAcabamento(acabamento){
        window.escolherAcabamento = 1;
        this.acabamento = acabamento;   
    }
    function getAcabamento(){
        return this.acabamento;
    }
    function printAcabamento(TextoAcabamento){
        $("#s-metacrilato").html(TextoAcabamento);
    }

    window.setAcabamento = setAcabamento;
    window.printAcabamento = printAcabamento;

    $("#meta7mm").click(function(){
        setAcabamento("meta7mm");
        printAcabamento("Metacrilato 7mm");
        enviaDados();
        this.parametro = false;
    });

    $("#meta5mm").click(function(){
        setAcabamento("meta5mm");
        printAcabamento("Metacrilato 5mm");
        enviaDados();
    });

    $("#meta3mm").click(function(){
        setAcabamento("meta3mm");
        printAcabamento("Metacrilato 3mm");
        enviaDados();
    });

    $("#meta4mm").click(function(){
        setAcabamento("meta4mm");
        printAcabamento("Metacrilato 4mm PS");
        enviaDados();
    });

    $("#meta3mm").click(function(){
        setAcabamento("meta3mm");
        printAcabamento("Metacrilato 3mm");
        enviaDados();
    });

    $("#acm5mm").click(function(){
        setAcabamento("acm5mm");
        printAcabamento("Metacrilato ACM");
        enviaDados();
    });

    $("#papelAlgodao").click(function(){
        setAcabamento("papelAlgodao");
        checaCompatibilidade();
        printAcabamento("Papel Algodão");
        renderiza_moldura();
        enviaDados();
        this.parametro = true;
    });

    $("#papelAcetinato").click(function(){
        setAcabamento("papelAcetinato");
        checaCompatibilidade();
        printAcabamento("papel Acetinato");
        renderiza_moldura();
        enviaDados();
    });

    $("#papelBrilhante").click(function(){
        setAcabamento("papelBrilhante");
        checaCompatibilidade();
        printAcabamento("Papel Brilhante");
        renderiza_moldura();
        enviaDados();
    });

    $("#papelFosco").click(function(){
        setAcabamento("papelFosco");
        checaCompatibilidade();
        printAcabamento("Papel Fosco");
        renderiza_moldura();
        enviaDados();
    });

    $("#papelCanvas").click(function(){
        setAcabamento("papelCanvas");
        printAcabamento("Canvas");
        enviaDados();
    });

    $("#uvPS").click(function(){
        setAcabamento("uvPS");
        printAcabamento("Impressão UV PS");
        enviaDados();
    });

    $("#uvACM").click(function(){
        setAcabamento("uvACM");
        printAcabamento("Impressão UV ACM");
        enviaDados();
    });

    // checa moldura em relacao a acabamento

    function checaCompatibilidade(){
        if(!moldura.getTipo() == 0){
            moldura.setMoldura("Moldura");
            moldura.setTipo(0);
        }
    }
  
    //define moldura

    var moldura = {
        setMoldura(moldura){
            if (getAcabamento() == "papelAlgodao" | getAcabamento() == "papelAcetinato" | getAcabamento() == "papelBrilhante" | getAcabamento() == "papelFosco" ) {
                $("#s-moldura").html("Moldura");
            }else{
                this.moldura = moldura;
                $("#s-moldura").html(this.moldura);
            }
        },
        getMoldura(){
            return this.moldura;
        },
        setTipo(tipoM){
            this.molduraTipo = tipoM;
        },
        getTipo(){
            return this.molduraTipo;
        }
    }
    $("#m_atenas").click(function(){
        moldura.setMoldura("Atenas");
        moldura.setTipo(1);
        enviaDados();
    });
    $("#m_basel_preta").click(function(){
        moldura.setMoldura("Basel Preta");
        moldura.setTipo(2);
        renderiza_moldura('m_basel_preta');
        enviaDados();
    });
    $("#m_basel_branca").click(function(){
        moldura.setMoldura("Basel Branca");
        moldura.setTipo(2);
        renderiza_moldura('m_basel_branca');
        enviaDados();
    });
    $("#m_basel_tabaco").click(function(){
        moldura.setMoldura("Basel Tabaco");
        moldura.setTipo(2);
        renderiza_moldura('m_basel_tabacco');
        enviaDados();
    });
    $("#m_basel_bege").click(function(){
        moldura.setMoldura("Basel Bege");
        moldura.setTipo(2);
        renderiza_moldura('m_basel_bege');
        enviaDados();
    });
    $("#m_berlim_preta").click(function(){
        moldura.setMoldura("Berlim Preta");
        moldura.setTipo(3);
        renderiza_moldura('m_berlim_preto');
        enviaDados();
    });
    $("#m_berlim_branca").click(function(){
        moldura.setMoldura("Berlim Branca");
        moldura.setTipo(3);
        renderiza_moldura('m_berlim_branca');
        enviaDados();
    });
    $("#m_miami_preta").click(function(){
        moldura.setMoldura("Miami Preta");
        moldura.setTipo(1);
        renderiza_moldura('m_miami_preto');
        enviaDados();
    });
    $("#m_miami_branca").click(function(){
        moldura.setMoldura("Miami Branca");
        moldura.setTipo(1);
        renderiza_moldura('m_miami_branca');
        enviaDados();
    });
    $("#m_nova_york_preta").click(function(){
        moldura.setMoldura("Nova York Preta");
        moldura.setTipo(2);
        renderiza_moldura('m_nova_york_preta');
        enviaDados();
    });
    $("#m_nova_york_Branca").click(function(){
        moldura.setMoldura("Nova York Branca");
        moldura.setTipo(2);
        renderiza_moldura('m_nova_york_branca');
        enviaDados();
    });
    $("#m_nova_york_tabaco").click(function(){
        moldura.setMoldura("Nova York Tabaco");
        moldura.setTipo(2);
        renderiza_moldura('m_nova_york_tabaco');
        enviaDados();
    });
    
    $("#m_amazonas_areia").click(function(){
        moldura.setMoldura("Amazonas Areia");
        moldura.setTipo(2);
        renderiza_moldura('m_amazonas_areia');
        enviaDados();
    });
    $("#m_amazonas_bege").click(function(){
        moldura.setMoldura("Amazonas Bege");
        moldura.setTipo(2);
        enviaDados();
    });
    $("#m_amazonas_tabaco").click(function(){
        moldura.setMoldura("Amazonas Tabaco");
        moldura.setTipo(2);
        renderiza_moldura('m_londres_tabaco');
        enviaDados();
    });
    $("#m_amsterdam").click(function(){
        moldura.setMoldura("Amsterdam");
        moldura.setTipo(2);
        enviaDados();
    });
    $("#m_buenosaires_preta").click(function(){
        moldura.setMoldura("Buenos Aires Preta");
        moldura.setTipo(2);
        renderiza_moldura('m_buenos_aires_preta');
        enviaDados();
    });
    /*
    $("#m_buenosaires_branca").click(function(){
        moldura.setMoldura("Geneve");
        moldura.setTipo(2);
        renderiza_moldura('m_buenos_aires_branca');
        enviaDados();
    });
    
    $("#m_buenosaires_Branca").click(function(){
        moldura.setMoldura("Buenos Aires Branca");
        moldura.setTipo(2);
        enviaDados();
    });
    */
    $("#m_londres_preta").click(function(){
        moldura.setMoldura("Londres Preta");
        moldura.setTipo(1);
        renderiza_moldura('m_londres_preta');
        enviaDados();
    });
    $("#m_londres_branca").click(function(){
        moldura.setMoldura("Londres Branca");
        moldura.setTipo(1);
        renderiza_moldura('m_londres_branca');
        enviaDados();
    });
    $("#m_londres_bege").click(function(){
        moldura.setMoldura("Londres Bege");
        moldura.setTipo(1);
        renderiza_moldura('m_londres_bege');
        enviaDados();
    });
    
    $("#m_florenca").click(function(){
        moldura.setMoldura("Florença");
        moldura.setTipo(3);
        renderiza_moldura('m_florenca_dourada');
        enviaDados();
    });
    $("#m_istambul").click(function(){
        moldura.setMoldura("Istambul");
        moldura.setTipo(3);
        renderiza_moldura('m_istambul_dourada');
        enviaDados();
    });
    $("#m_paris_preta").click(function(){
        moldura.setMoldura("Paris Preta");
        moldura.setTipo(3);
        renderiza_moldura('m_paris_preta');
        enviaDados();
    });
    $("#m_paris_branca").click(function(){
        moldura.setMoldura("Paris Branca");
        renderiza_moldura('m_paris_branca');
        moldura.setTipo(3);
        enviaDados();
    });
    $("#m_roma_preta").click(function(){
        moldura.setMoldura("Roma Preta");
        moldura.setTipo(1);
        renderiza_moldura('m_roma_preto');
        enviaDados();
    });
    $("#m_roma_branca").click(function(){
        moldura.setMoldura("Roma Branca");
        moldura.setTipo(1);
        renderiza_moldura('m_roma_branca');
        enviaDados();
    });
    $("#n_moldura").click(function(){
        moldura.setMoldura("Moldura");
        moldura.setTipo(0);
        renderiza_moldura();
        enviaDados();
    });

    $("#n_moldura_moderna").click(function(){
        moldura.setMoldura("Moldura");
        moldura.setTipo(0);
        renderiza_moldura();
        enviaDados();
    });

    $("#n_moldura_classica").click(function(){
        moldura.setMoldura("Moldura");
        moldura.setTipo(0);
        renderiza_moldura();
        enviaDados();
    });
    
    //envia dados para o servidor e retorna preço 
    function enviaDados(){
        if (typeof getAcabamento() == "undefined" | typeof tamanho.getTamanho(x) == "undefined") {
            return;
        }
        $("#s-preco").html("...");
        x = tamanho.getTamanho(x);
        y = tamanho.getTamanho(y);
        nome_acabamento = getAcabamento();
        nome_moldura = moldura.getMoldura();
        tipo_moldura = moldura.getTipo();
        cod_autor = localiza_autor.init(iap_resolve_url_acervo());

        $.ajax({
            type: "POST",
            url: comprar.ajax_url,
            data: {
                d1: "d1",
                action: "iap_order",
                acabamento: nome_acabamento,
                tipoMoldura: tipo_moldura,
                x: x,
                y: y,
                cod_autor: cod_autor
            },
            success: function(data) {
                if (data == "0") {
                    modal_info.constructor('Erro no processamento. Tente mais tarde.', 'aviso');
                } else {
                    //$("#s-preco").html(data);
                    resposta = JSON.parse(data);
                    render_parcelamento(resposta);
                    $("#comprar-botao").addClass("btn-success");
                    $("#comprar-botao").css('color', 'white');
                }
            },
            error: function(data) {
                modal_info.constructor('Erro no processamento. Tente mais tarde.', 'aviso');
            }
        });
    }
    window.enviaDados = enviaDados;
//renderiza formas de parcelamento 
var render_parcelamento = function(resposta){

    $("#s-preco").html("por R$ " + resposta[1]);
    var hud_botoes = $('.hud-botoes-mat');
    var div_parcelamentos = document.createElement('div');

    resposta_lista = Object.values(resposta);

    $('.iap_parcelamento').html("ou parcele em até " + resposta_lista.length+"x de R$" + resposta_lista[resposta_lista.length -1]);
}    


//envia dados para o servidor quando selecionado photobloco
$("#photobloco_10x10").click(function(){

    iap_photobloco.tipo_photobloco = "photobloco 10x10cm";
    iap_photobloco.tamanho_x = 10;
    iap_photobloco.tamanho_y = 10;

    $.ajax({
        type: "POST",
        url: comprar.ajax_url,
        data: {
            d4: "d4",
            action: "iap_order"
        },
        success: function(data) {
            if (data == "0") {
                modal_info.constructor('Erro no processamento. Tente mais tarde.', 'aviso');
            } else {
                resposta = JSON.parse(data);
                $("#s-preco-photobloco").html("R$ " + resposta["0"] + ".00");
                $(".iap_parcelamento_photobloco").html("ou por 3x de R$ " + resposta[1] + ".00");

                $("#s-photobloco").html("10x10cm");
                $("#comprar-botao-photobloco").addClass("btn-success");
            }
        },
        error: function(data) {
            modal_info.constructor('Erro no processamento. Tente mais tarde.', 'aviso');
        }
    });

});

$("#photobloco_10x15").click(function(){

    iap_photobloco.tipo_photobloco = "photobloco 10x15cm";
    iap_photobloco.tamanho_x = 10;
    iap_photobloco.tamanho_y = 15;

    $.ajax({
        type: "POST",
        url: comprar.ajax_url,
        data: {
            d5: "d5",
            action: "iap_order"
        },
        success: function(data) {
            if (data == "0") {
                modal_info.constructor('Erro no processamento. Tente mais tarde.', 'aviso');
            } else {
                resposta = JSON.parse(data);
                $("#s-preco-photobloco").html("R$ " + resposta["0"] + ".00");
                $(".iap_parcelamento_photobloco").html("ou por 4x de R$ " + resposta[1]);

                $("#s-photobloco").html("10x15cm");
                $("#comprar-botao-photobloco").addClass("btn-success");
            }
        },
        error: function(data) {
            modal_info.constructor('Erro no processamento. Tente mais tarde.', 'aviso');
        }
    });

});

return window.tamanho = tamanho;
});

var iap_photobloco = {

    tipo_photobloco : "indefinido",
    tamanho_x : 0,
    tamanho_y : 0

}