jQuery(document).ready(function($){


    //define tamanho 

    var tamanho = {
        setTamanho(x,y){
            this.x = x;
            this.y = y;
            this.tamanhoTexto(x,y);
        },
        tamanhoTexto(x,y){
            $("#s-tamanho").html(this.x+"x"+this.y+"cm");
        }
    }
    
    $("#tamanho1").click(function(){
        tamanho.setTamanho(20,18);
    });

    $("#tamanho2").click(function(){
        tamanho.setTamanho(30,27);
    });

    $("#tamanho3").click(function(){
        tamanho.setTamanho(40,36);
    });

    $("#tamanho4").click(function(){
        tamanho.setTamanho(50,45);
    });

    $("#tamanho5").click(function(){
        tamanho.setTamanho(60,54);
    });

    $("#tamanho6").click(function(){
        tamanho.setTamanho(70,64);
    });

    $("#tamanho7").click(function(){
        tamanho.setTamanho(80,72);
    });

    $("#tamanho8").click(function(){
        tamanho.setTamanho(90,82);
    });

    //define acabamento 

    var acabamento = {
        setAcabamento(acabamento){
            this.acabamento = acabamento;
            this.acabamentoTexto(this.acabamento);
        },
        acabamentoTexto(acabamento){
            $("#s-metacrilato").html(acabamento);
        }
    }

    $("#meta7mm").click(function(){
        acabamento.setAcabamento("meta7mm");
    });

    $("#meta5mm").click(function(){
        acabamento.setAcabamento("meta5mm");
    });

    $("#meta3mm").click(function(){
        acabamento.setAcabamento("meta3mm");
    });

    $("#meta4mm").click(function(){
        acabamento.setAcabamento("meta4mm");
    });

    $("#meta3mm").click(function(){
        acabamento.setAcabamento("meta3mm");
    });

    $("#acm5mm").click(function(){
        acabamento.setAcabamento("acm5mm");
    });

    $("#papelAlgodao").click(function(){
        acabamento.setAcabamento("papelAlgodao");
    });

    $("#papelAcetinato").click(function(){
        acabamento.setAcabamento("papelAcetinato");
    });

    $("#papelBrilhante").click(function(){
        acabamento.setAcabamento("papelBrilhante");
    });

    $("#papelFosco").click(function(){
        acabamento.setAcabamento("papelFosco");
    });

    $("#papelCanvas").click(function(){
        acabamento.setAcabamento("papelCanvas");
    });

    $("#uvPS").click(function(){
        acabamento.setAcabamento("uvPS");
    });

    $("#uvACM").click(function(){
        acabamento.setAcabamento("uvACM");
    });


    //define moldura

    var moldura = {
        setMoldura(moldura){
            this.moldura = moldura;
            $("#s-moldura").html(this.moldura);
        },
        setTipo(tipoM){
            this.molduraTipo = tipoM;
        }
    }
    //
    $("#m_atenas").click(function(){
        moldura.setMoldura("Atenas");
        moldura.setTipo(1);
    });
    $("#m_basel").click(function(){
        moldura.setMoldura("Basel");
        moldura.setTipo(2);
    });
    $("#m_berlim").click(function(){
        moldura.setMoldura("Berlim");
        moldura.setTipo(3);
    });
    $("#m_miami").click(function(){
        moldura.setMoldura("Miami");
        moldura.setTipo(1);
    });
    $("#m_nova_york").click(function(){
        moldura.setMoldura("Nova York");
        moldura.setTipo(2);
    });
    $("#m_sao_paulo").click(function(){
        moldura.setMoldura("São Paulo");
        moldura.setTipo(2);
    });
    $("#m_amazonas").click(function(){
        moldura.setMoldura("Amazonas");
        moldura.setTipo(2);
    });
    $("#m_amsterdam").click(function(){
        moldura.setMoldura("Amsterdam");
        moldura.setTipo(2);
    });
    $("#m_buenosaires").click(function(){
        moldura.setMoldura("Buenos Aires");
        moldura.setTipo(2);
    });
    $("#m_londres").click(function(){
        moldura.setMoldura("Londres");
        moldura.setTipo(1);
    });
    $("#m_santiago").click(function(){
        moldura.setMoldura("Santiago");
        moldura.setTipo(1);
    });
    $("#m_florenca").click(function(){
        moldura.setMoldura("Florença");
        moldura.setTipo(3);
    });
    $("#m_istambul").click(function(){
        moldura.setMoldura("Istambul");
        moldura.setTipo(3);
    });
    $("#m_paris").click(function(){
        moldura.setMoldura("Paris");
        moldura.setTipo(3);
    });
    $("#m_roma").click(function(){
        moldura.setMoldura("Roma");
        moldura.setTipo(1);
    });
    $("#n_moldura").click(function(){
        moldura.setMoldura("Moldura");
        moldura.setTipo(0);
    });
    //envia dados para o servidor e retorna preço 

});