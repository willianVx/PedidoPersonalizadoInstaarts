    var x = 20;
    var y = 18;
    var tipoMoldura = 0;
    var nome_moldura = " Sem Moldura ";
    var nome_acabamento = " Metacrilato 3mm ";
    var preco = 343.6;
    var tipo_moldura = 0;

jQuery(document).ready(function($){
    //define tamanho 
   
    var tamanho = {
        setTamanho(x,y){
            if (typeof imgWidth == "undefined" | typeof imgHeight == "undefined" | typeof ylistaA == "undefined") {
                this.x = x;
                this.y = y;
                this.tamanhoTexto(x,y);
            }
            else{
                this.x = x;
                this.y = y;
                this.tamanhoTexto(x,y);
            }
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
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(20,18);
        }else{
            tamanho.setTamanho(20,ylistaA);
        }
        enviaDados();
    });

    $("#tamanho2").click(function(){
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(30,27);
        }else{
            tamanho.setTamanho(30,ylistaB);
        }
        enviaDados();
    });

    $("#tamanho3").click(function(){
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(40,36);
        }else{
            tamanho.setTamanho(40,ylistaC);
        }
        enviaDados();
    });

    $("#tamanho4").click(function(){
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(50,45);
        }else{
            tamanho.setTamanho(50,ylistaD);
        }
        enviaDados();
    });

    $("#tamanho5").click(function(){
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(60,54);
        }else{
            tamanho.setTamanho(60,ylistaE);
        }
        enviaDados();
    });

    $("#tamanho6").click(function(){
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(70,64);
        }else{
            tamanho.setTamanho(70,ylistaF);
        }
        enviaDados();
    });

    $("#tamanho7").click(function(){
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(80,72);
        }else{
            tamanho.setTamanho(80,ylistaG);
        }
        enviaDados();
    });

    $("#tamanho8").click(function(){
        if (typeof ylistaA == "undefined") {
            tamanho.setTamanho(90,82);
        }else{
            tamanho.setTamanho(80,ylistaH);
        }
        enviaDados();
    });

    //define acabamento 

    function setAcabamento(acabamento){
        this.acabamento = acabamento;   
    }
    function getAcabamento(){
        return this.acabamento;
    }
    function printAcabamento(TextoAcabamento){
        $("#s-metacrilato").html(TextoAcabamento);
    }

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
        enviaDados();
        this.parametro = true;
    });

    $("#papelAcetinato").click(function(){
        setAcabamento("papelAcetinato");
        checaCompatibilidade();
        printAcabamento("papel Acetinato");
        enviaDados();
    });

    $("#papelBrilhante").click(function(){
        setAcabamento("papelBrilhante");
        checaCompatibilidade();
        printAcabamento("Papel Brilhante");
        enviaDados();
    });

    $("#papelFosco").click(function(){
        setAcabamento("papelFosco");
        checaCompatibilidade();
        printAcabamento("Papel Fosco");
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
    $("#m_basel").click(function(){
        moldura.setMoldura("Basel");
        moldura.setTipo(2);
        enviaDados();
    });
    $("#m_berlim").click(function(){
        moldura.setMoldura("Berlim");
        moldura.setTipo(3);
        enviaDados();
    });
    $("#m_miami").click(function(){
        moldura.setMoldura("Miami");
        moldura.setTipo(1);
        enviaDados();
    });
    $("#m_nova_york").click(function(){
        moldura.setMoldura("Nova York");
        moldura.setTipo(2);
        enviaDados();
    });
    $("#m_sao_paulo").click(function(){
        moldura.setMoldura("São Paulo");
        moldura.setTipo(2);
        enviaDados();
    });
    $("#m_amazonas").click(function(){
        moldura.setMoldura("Amazonas");
        moldura.setTipo(2);
        enviaDados();
    });
    $("#m_amsterdam").click(function(){
        moldura.setMoldura("Amsterdam");
        moldura.setTipo(2);
        enviaDados();
    });
    $("#m_buenosaires").click(function(){
        moldura.setMoldura("Buenos Aires");
        moldura.setTipo(2);
        enviaDados();
    });
    $("#m_londres").click(function(){
        moldura.setMoldura("Londres");
        moldura.setTipo(1);
        enviaDados();
    });
    $("#m_santiago").click(function(){
        moldura.setMoldura("Santiago");
        moldura.setTipo(1);
        enviaDados();
    });
    $("#m_florenca").click(function(){
        moldura.setMoldura("Florença");
        moldura.setTipo(3);
        enviaDados();
    });
    $("#m_istambul").click(function(){
        moldura.setMoldura("Istambul");
        moldura.setTipo(3);
        enviaDados();
    });
    $("#m_paris").click(function(){
        moldura.setMoldura("Paris");
        moldura.setTipo(3);
        enviaDados();
    });
    $("#m_roma").click(function(){
        moldura.setMoldura("Roma");
        moldura.setTipo(1);
        enviaDados();
    });
    $("#n_moldura").click(function(){
        moldura.setMoldura("Moldura");
        moldura.setTipo(0);
        enviaDados();
    });
    
    //define valores iniciais

    tamanho.setTamanho(20,18);
    setAcabamento("meta3mm");
    moldura.setTipo(0);
    enviaDados();

    //envia dados para o servidor e retorna preço 
    
    function enviaDados(){
        $("#s-preco").html("carregando...");
        x = tamanho.getTamanho(x);
        y = tamanho.getTamanho(y);
        nome_acabamento = getAcabamento();
        nome_moldura = moldura.getMoldura();
        tipo_moldura = moldura.getTipo();
        $.ajax({
            type: "POST",
            url: comprar.ajax_url,
            data: {
                d1: "d1",
                action: "iap_order",
                acabamento: nome_acabamento,
                tipoMoldura: tipo_moldura,
                x: x,
                y: y
            },
            success: function(data) {
                if (data == "0") {
                    alert("Erro no processamento. Tente mais tarde.");
                } else {
                    $("#s-preco").html(data);
                }
            },
            error: function(data) {
                alert("Erro no processamento. Tente mais tarde.");
            }
        });
        
    }

});