jQuery(document).ready(function($){


    //define tamanho 

    class tamanho{
        setTamanho(x,y){
            this.x = x;
            this.y = y;
            this.tamanhoTexto(x,y);
        }
        tamanhoTexto(x,y){
            $("#s-tamanho").html(this.x+"x"+this.y+"cm");
        }
    }

    var t = new tamanho;
    
    $("#tamanho1").click(function(){
        t.setTamanho(20,18);
    });

    $("#tamanho2").click(function(){
        t.setTamanho(30,27);
    });

    $("#tamanho3").click(function(){
        t.setTamanho(40,36);
    });

    $("#tamanho4").click(function(){
        t.setTamanho(50,45);
    });

    $("#tamanho5").click(function(){
        t.setTamanho(60,54);
    });

    $("#tamanho6").click(function(){
        t.setTamanho(70,64);
    });

    $("#tamanho7").click(function(){
        t.setTamanho(80,72);
    });

    $("#tamanho8").click(function(){
        t.setTamanho(90,82);
    });

    //define acabamento 

    class acabamento{
        setAcabamento(acabamento){
            this.acabamento = acabamento;
            this.acabamentoTexto(this.acabamento);
        }
        acabamentoTexto(acabamento){
            $("#s-metacrilato").html(acabamento);
        }
    }

    ac = new acabamento;

    $("#meta7mm").click(function(){
        ac.setAcabamento("meta7mm");
    });

    $("#meta5mm").click(function(){
        ac.setAcabamento("meta5mm");
    });

    $("#meta3mm").click(function(){
        ac.setAcabamento("meta3mm");
    });

    $("#meta4mm").click(function(){
        ac.setAcabamento("meta4mm");
    });

    $("#meta3mm").click(function(){
        ac.setAcabamento("meta3mm");
    });

    $("#acm5mm").click(function(){
        ac.setAcabamento("acm5mm");
    });

    $("#papelAlgodao").click(function(){
        ac.setAcabamento("papelAlgodao");
    });

    $("#papelAcetinato").click(function(){
        ac.setAcabamento("papelAcetinato");
    });

    $("#papelBrilhante").click(function(){
        ac.setAcabamento("papelBrilhante");
    });

    $("#papelFosco").click(function(){
        ac.setAcabamento("papelFosco");
    });

    $("#papelCanvas").click(function(){
        ac.setAcabamento("papelCanvas");
    });

    $("#uvPS").click(function(){
        ac.setAcabamento("uvPS");
    });

    $("#uvACM").click(function(){
        ac.setAcabamento("uvACM");
    });


    //define moldura

    class moldura{
        setMoldura(moldura){
            this.moldura = moldura;
        }
    }

    m = new moldura;

    $("#molduraT1").click(function(){ 
        m.setMoldura(1);
        
    });
    $("#molduraT2").click(function(){
        m.setMoldura(2);
    });
    $("#molduraT3").click(function(){
        m.setMoldura(3);
    });

    //envia dados para o servidor e retorna preço 

});