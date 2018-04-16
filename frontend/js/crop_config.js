//define valor para canvas (onde a imagem deve aparecer após cortada)
var iap_canvas_width = 568;
//define valor para canvas caso a tela seja a de um smartphone
if (window.screen.availWidth <= 414) {
    var iap_canvas_width = 365;
}
//controla qual foi o último tamanho do canvas (para podermos definir um novo tamanho)
var iap_canvas_controller = 0;

jQuery(document).ready(function($){
   
    var contador = 0;
    var $quadros_restantes = $("#quadros_restantes_numero");

    var pacote_porta_retrato = {
        porta_retrato: [],
        imagens_canvas: [],
        init: function() {
            this.cacheDom();
            this.bindEvents();
            //this.render();
        },
        cacheDom: function() {
            this.$el = $('#porta_retrato_module');
            this.$button = this.$el.find('button');
            this.$ul = this.$el.find('ul');
            this.template = this.$el.find('#porta_retrato_template').html();
        },
        bindEvents: function() {
            this.$button.on('click', this.addImage.bind(this));
            this.$ul.delegate('i.del', 'click', this.deleteImage.bind(this));
        },
        render: function() {

           var data = {
               portaRetrato: this.porta_retrato,
               teste: contador,
               texto1: "Porta retrato",
               texto2: "Decor Cristal 3mm",
               tamanho: "13x18cm"
           };
           this.$ul.html(Mustache.render(this.template, data));

            

            console.log(this.canvas);
            console.log(this.porta_retrato);
            console.log(this.imagens_canvas);

            
            for (let index = 0; index < this.imagens_canvas.length; index++) {

                this.canvas = document.getElementById(contador);
                var ctx = this.canvas.getContext('2d');
                const element = this.imagens_canvas[index];
                ctx.drawImage(element.imagem, element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                if (this.imagens_canvas.length >= 2) {

                    this.canvas = document.getElementById(1);
                    var ctx = this.canvas.getContext('2d');
                    const element = this.imagens_canvas[0];
                    ctx.drawImage(element.imagem, element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                }

                if (this.imagens_canvas.length >= 3) {

                    this.canvas = document.getElementById(2);
                    var ctx = this.canvas.getContext('2d');
                    const element = this.imagens_canvas[1];
                    ctx.drawImage(element.imagem, element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                }

                if (this.imagens_canvas.length >= 4) {

                    this.canvas = document.getElementById(3);
                    var ctx = this.canvas.getContext('2d');
                    const element = this.imagens_canvas[2];
                    ctx.drawImage(element.imagem, element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                }
                if (this.imagens_canvas.length >= 5) {

                    this.canvas = document.getElementById(4);
                    var ctx = this.canvas.getContext('2d');
                    const element = this.imagens_canvas[3];
                    ctx.drawImage(element.imagem, element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                }
                if (this.imagens_canvas.length >= 6) {

                    this.canvas = document.getElementById(5);
                    var ctx = this.canvas.getContext('2d');
                    const element = this.imagens_canvas[4];
                    ctx.drawImage(element.imagem, element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                }
            }
            
           
           $quadros_restantes.html(contador);
        },
        addImage: function(iap_imagem, x, y, swidth, sheight, a, b, c, d) {

           this.dataCanvas = {

                imagem  : iap_imagem,
                x       : x,
                y       : y,
                swidth  : swidth,
                sheight : sheight,
                a       : a,
                b       : b,
                c       : c,
                d       : d

           }

            contador = contador +=1;
            this.porta_retrato.push(contador);
            this.imagens_canvas.push(this.dataCanvas);
            this.render();

        },
        deleteImage: function(event) {

            contador = contador -=1;
            var $remove = $(event.target).closest('li');
            var i = this.$ul.find('li').index($remove);
            this.porta_retrato.splice(i, 1);
            this.imagens_canvas.splice(i,1);
            this.render();

        }
    
    };
    
    pacote_porta_retrato.init();
        
    $(".img_add_novo_quadro").click(function(){
        pacote_porta_retrato.addImage();
    });   

//captura imagem do usuário
var iap_imagem = document.getElementById('editable-image');
//inicia ferramenta de cropper 
    $("#photobloco_10x10").click(function(){
        if (iap_canvas_controller != 0) {
            return;
        }
        iap_start_crop(10 / 10);
        iap_canvas_controller = 1;
        $("#iap_crop").show();
    });

//inicia ferramenta de cropper
    $("#photobloco_10x15").click(function(){
        if (iap_canvas_controller != 0) {
            return;
        }
        iap_start_crop(15 / 10);
        iap_canvas_controller = 2;
        $("#iap_crop").show();
    });

//inicia ferramenta de cropper para porta retrato
$("#iap_crop_porta_retrato").click(function(){
    if (iap_canvas_controller != 0) {
        return;
    }
    $(".glyphicon").removeClass("glyphicon-scissors");
    $(".glyphicon").addClass("glyphicon-plus");
    iap_start_crop(18 / 13);
    iap_canvas_controller = 3;
    $("#iap_crop").show();
});    

//função de crop 
function iap_start_crop(aspect_ratio){
    //instancia novo Cropper
    var cropper = new Cropper(iap_imagem, {
        aspectRatio: aspect_ratio,
        zoomable: false,
        viewMode: 1,
        crop: function(event) {
            //muda o nome do botao adicionar e cortar no contexto do porta-retrato
            $(".crop_texto").html("Adicionar");
        }
      });
    
    //altera proporção do corte
    $("#photobloco_10x10").click(function(){
        iap_canvas_controller = 1;
        cropper.setAspectRatio(10 / 10);
    });
    
    $("#photobloco_10x15").click(function(){
        iap_canvas_controller = 2;   
        cropper.setAspectRatio(15 / 10);
    });
    // botao crop
    $("#iap_crop").click(function(){
    //atribui tamanho ao canvas de acordo com o iap_canvas_controller
    if (iap_canvas_controller == 0) {
        $("#iap_crop_image").attr("width", "0");
        $("#iap_crop_image").attr("height", "0");
    }

    if (iap_canvas_controller == 1) {
        $("#iap_crop_image").attr("width", iap_canvas_width);
        $("#iap_crop_image").attr("height", iap_canvas_width);
    }

    if (iap_canvas_controller == 2) {
        $("#iap_crop_image").attr("width", iap_canvas_width);
        $("#iap_crop_image").attr("height", iap_canvas_width / 1.5);
    }
    //define tamanho do recorte na imagem
    var swidth  = cropper.getCroppedCanvas().width;
    var sheight = cropper.getCroppedCanvas().height;

    //desenha o recorte da imagem no canvas 
    var canvas = document.getElementById('iap_crop_image');
    var ctx = canvas.getContext('2d');

    console.log(cropper.getData().x, cropper.getData().y, swidth, sheight, 0, 0, iap_canvas_width, iap_imagem_proporcional(swidth, sheight));

    ctx.drawImage(iap_imagem, cropper.getData().x, cropper.getData().y, swidth, sheight, 0, 0, iap_canvas_width, iap_imagem_proporcional(swidth, sheight));

    $('#iap_imagem_cortada').modal('show');

        });
    //corta a imagem do porta retrato e insere no block info -- botao crop quando estado inicial for porta retrato
    $("#iap_crop_porta_retrato").click(function(){
        
        console.log("Botao Funciona!!");
        x = cropper.getData().x;
        y = cropper.getData().y;
        a = 0; 
        b = 0; 
        c = 69;
        d = 53;
        var swidth  = cropper.getCroppedCanvas().width;
        var sheight = cropper.getCroppedCanvas().height;
        

        pacote_porta_retrato.addImage(iap_imagem, x, y, swidth, sheight, a, b, c, d);

        /*
        //define tamanho do recorte na imagem
        var swidth  = cropper.getCroppedCanvas().width;
        var sheight = cropper.getCroppedCanvas().height;

         //exclui um bloco da imagem no contexto do porta retrato
         $(".retirar_img_da_lista").click(function(){

            $("#info_painel_crop").hide();
            $("#info_painel_texto").hide();
            $("#retirar_img_da_lista").hide();
            $("#info_painel").removeClass("info_painel_shadow");
            $("#info_painel").addClass("info_painel");

            imagens_restantes.add_numero();
            $("#quadros_restantes_numero").html(imagens_restantes.numero);
        });

        var canvas = document.getElementById('info_painel_crop');
        var ctx = canvas.getContext('2d');

            $("#info_painel_texto").show();
            $(".retirar_img_da_lista").show();
            $(".info_painel").css("border","none");
            $(".info_painel").addClass("info_painel_shadow");

        ctx.drawImage(iap_imagem, cropper.getData().x, cropper.getData().y, swidth, sheight, 0, 0, 69, 53);

        $("#info_painel_crop").show();
        $("#info_painel_texto").show();
        $(".retirar_img_da_lista").show();
        $(".info_painel").css("border","none");
        $(".info_painel").addClass("info_painel_shadow");

        imagens_restantes.get_numero();
        
        $("#quadros_restantes_numero").html(imagens_restantes.numero);
        */
    });

    }
});

//ajusta o parametro do tamanho proporcionalmente
function iap_imagem_proporcional(x, y){

    var razao = 1.5;

    if(x == 0 || y == 0){
        return;
    }
    
    if(x > y){
    razao = x / y;
    }

    if(x < y){
    razao = y / x;
    }

    else{
    razao = x / y;
    }

    return iap_canvas_width / razao;

}

//retorna valor de imagens restantes no contexto do porta retrato

var imagens_restantes = {
    numero: 6,
    get_numero: function(){
        if (imagens_restantes.numero == 0) {
            return
        }else{
            imagens_restantes.numero--;
        }
    },
    add_numero: function(){
        if (imagens_restantes.numero >= 6) {
            return
        }else{
            imagens_restantes.numero++;
        }
    }
}