//define valor para canvas (onde a imagem deve aparecer após cortada)
var iap_canvas_width = 568;
//define valor para canvas caso a tela seja a de um smartphone
if (window.screen.availWidth <= 414) {
    var iap_canvas_width = 365;
}
//controla qual foi o último tamanho do canvas (para podermos definir um novo tamanho)
var iap_canvas_controller = 0;

jQuery(document).ready(function($){

    $("#iap_reiniciar_porta_retrato").click(function(){
        location.reload(true);
    });

    var contador = 0;
    var $quadros_restantes = $("#quadros_restantes_numero");

    //modulo pra adicionar e deletar um recorte no contexto do porta retrato 
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
            this.$botao_crop = $('#iap_crop_porta_retrato');
        },
        bindEvents: function() {
            this.$button.on('click', this.addImage.bind(this));
            this.$ul.delegate('i.del', 'click', this.deleteImage.bind(this));
        },
        render: function() {
           //console.log(cliente_imagem_url.lista, contador);
            
           var data = {
               portaRetrato: this.porta_retrato,
               texto1: "Porta retrato",
               texto2: "Decor Cristal 3mm",
               tamanho: "13x18cm"
           };
           this.$ul.html(Mustache.render(this.template, data));

           function drawCanvas(id,imagens_canvas,index_canvas, index_imagem){
                    
                    var canvas = document.getElementById(id);
                    var ctx = canvas.getContext('2d');
                    const element = imagens_canvas[index_canvas];
                    canvas.width = element.c;
                    canvas.height = element.d;
                    ctx.drawImage(cliente_imagem_url.elemento_imagem(index_imagem), element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                        
                    if (pacote_porta_retrato.imagens_canvas.length > 1) {
        
                        var canvas = document.getElementById("1");
                        var ctx = canvas.getContext('2d');
                        const element = pacote_porta_retrato.imagens_canvas[0];
                        canvas.width = element.c;
                        canvas.height = element.d;
                        ctx.drawImage(cliente_imagem_url.elemento_imagem("0"), element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                    }

                    if (pacote_porta_retrato.imagens_canvas.length > 2) {

                        var canvas = document.getElementById("2");
                        var ctx = canvas.getContext('2d');
                        const element = pacote_porta_retrato.imagens_canvas[1];
                        canvas.width = element.c;
                        canvas.height = element.d;
                        ctx.drawImage(cliente_imagem_url.elemento_imagem("1"), element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                    }

                    if (pacote_porta_retrato.imagens_canvas.length > 3) {

                        var canvas = document.getElementById("3");
                        var ctx = canvas.getContext('2d');
                        const element = pacote_porta_retrato.imagens_canvas[2];
                        canvas.width = element.c;
                        canvas.height = element.d;
                        ctx.drawImage(cliente_imagem_url.elemento_imagem("2"), element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                    }

                    if (pacote_porta_retrato.imagens_canvas.length > 4) {

                        var canvas = document.getElementById("4");
                        var ctx = canvas.getContext('2d');
                        const element = pacote_porta_retrato.imagens_canvas[3];
                        canvas.width = element.c;
                        canvas.height = element.d;
                        ctx.drawImage(cliente_imagem_url.elemento_imagem("3"), element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                    }

                    if (pacote_porta_retrato.imagens_canvas.length > 5) {

                        var canvas = document.getElementById("5");
                        var ctx = canvas.getContext('2d');
                        const element = pacote_porta_retrato.imagens_canvas[4];
                        canvas.width = element.c;
                        canvas.height = element.d;
                        ctx.drawImage(cliente_imagem_url.elemento_imagem("4"), element.x, element.y, element.swidth, element.sheight, element.a, element.b, element.c, element.d);

                    }
                    
            }
            
            for (let index = 0; index < this.imagens_canvas.length; index++) {
                
                drawCanvas(contador, this.imagens_canvas, index, index);
               
            }
           
           $quadros_restantes.html(contador+" ");

               if (contador == 6) {
                $("#quadros_restantes").hide();
                $('.img_add_novo_quadro').hide();
                    var $b_comprar = $(".b_comprar_porta_retrato");
                        $b_comprar.addClass("btn-success");
                        $b_comprar.find("span").html(" R$ 149,94");

                        $b_comprar.click(function(){
                            console.log("Processando compra!!");

                            this.cropped_image = [

                                this.canvas_1 = document.getElementById("1"),
                                this.canvas_2 = document.getElementById("2"),
                                this.canvas_3 = document.getElementById("3"),
                                this.canvas_4 = document.getElementById("4"),
                                this.canvas_5 = document.getElementById("5"),
                                this.canvas_6 = document.getElementById("6")
                                
                            ];
                            upload_canvas(this.cropped_image);
                        });
               }else{
                $("#quadros_restantes").show();
                $(".img_add_novo_quadro").show();
           }
           
        },
        addImage: function(iap_imagem, x, y, swidth, sheight, a, b, c, d) {

            if (this.porta_retrato.length == 6) {
                return;
            }
            if (contador >= cliente_imagem_url.lista.length) {

                return alert("Adicione outra imagem!");
                
            }
           this.dataCanvas = {

                imagem  : cliente_imagem_url.elemento_imagem(),
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

            cliente_imagem_url.remove_lista();
            contador = contador -=1;
            var $remove = $(event.target).closest('li');
            var i = this.$ul.find('li').index($remove);
            this.porta_retrato.splice(i, 1);
            this.imagens_canvas.splice(i,1);
            this.render();

        }
    
    };
    
    pacote_porta_retrato.init();
    /*
    $(".img_add_novo_quadro").click(function(){
        pacote_porta_retrato.addImage();
    });   
    */
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
    iap_start_crop(18 / 13);
    iap_canvas_controller = 3;
    $("#iap_crop").show();
});    

//função de crop 
function iap_start_crop(aspect_ratio){
    var c_width = 69;
    var d_height = 53;
    //instancia novo Cropper
    var cropper = new Cropper(iap_imagem, {
        aspectRatio: aspect_ratio,
        zoomable: false,
        viewMode: 1,
        minCropBoxHeight: 500,
        crop: function(event) {
            //muda o nome do botao adicionar e cortar no contexto do porta-retrato
            $(".crop_texto").html("OK");

            tamanho_cropper = {
                width: cropper.image.clientWidth,
                height: cropper.image.clientHeight,
                naturalWidth: cropper.image.naturalWidth,
                naturalHeight: cropper.image.naturalHeight
            }
            return tamanho_cropper;
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

    $(".glyphicon-resize-vertical").click(function(){
        c_width = 53;
        d_height = 69;
        cropper.setAspectRatio(13 / 18);
    });
    $(".glyphicon-resize-horizontal").click(function(){
        c_width = 69;
        d_height = 53;
        cropper.setAspectRatio(18 / 13);
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
        
        $("#iap_adiciona_imagem_porta_retrato").show();
        x = cropper.getData().x;
        y = cropper.getData().y;
        a = 0; 
        b = 0; 
        c = c_width;
        d = d_height;
        var swidth  = cropper.getCroppedCanvas().width;
        var sheight = cropper.getCroppedCanvas().height;

        pacote_porta_retrato.addImage(iap_imagem, x, y, swidth, sheight, a, b, c, d);

    });

    //botao para adicionar outra imagem -- no contexto porta retrato
    var $nova_imagem =  $("#add_novo_quadro");
    var $nova_imagem_2 = $('#add_novo_quadro_2');

    $nova_imagem.click(function(){

        if (contador < cliente_imagem_url.lista.length) {
            alert("De ok na imagem anterior primeiro!");
            return
        }

        window.porta_retrato_upload_controlador = "uploadOK";
        $("#modalUpload").modal('show');
        return window.cropper = cropper;
      
    });

    $nova_imagem_2.click(function(){

        if (contador < cliente_imagem_url.lista.length) {
            alert("De ok na imagem anterior primeiro!");
            return
        }

        window.porta_retrato_upload_controlador = "uploadOK";
        $("#modalUpload").modal('show');
        return window.cropper = cropper;
      
    });

    }
   
    //retorna o valor minimo que a imagem pode ser cortada com o cropper 
    var imagem_atual_info = {

        cacheDom: function(){
            return this.$imagem = $("#editable-image");
        },
        minCropBoxHeight: function(tamanho_cropper){
            //console.log(tamanho_cropper || "nada para mostrar!");
            var h = this.cacheDom()["0"].naturalHeight;
            var w = this.cacheDom()["0"].naturalWidth;
            const tamanho_minimo = 800;
            
            if (h > w) {
                var tamanho_real = w;
                var tamanho_tela = tamanho_cropper || iap_imagem.clientWidth;
            }

            if (h < w) {
                var tamanho_real = h;
                var tamanho_tela = tamanho_cropper || iap_imagem.clientHeight;
            }
            
            if (h == w) {
                var tamanho_real = h;
                var tamanho_tela = tamanho_cropper || iap_imagem.clientWidth;
            }

            var resultado = tamanho_real / tamanho_tela;

            return tamanho_minimo / resultado;

        }

    }
    return window.imagem_atual_info = imagem_atual_info;
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
