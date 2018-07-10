//define valor para canvas (onde a imagem deve aparecer após cortada)
var iap_canvas_width = 568;
//define valor para canvas caso a tela seja a de um smartphone
if (window.screen.availWidth <= 414) {
    var iap_canvas_width = 200;
}
//controla qual foi o último tamanho do canvas (para podermos definir um novo tamanho)
var iap_canvas_controller = 0;

jQuery(document).ready(function($){
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
    
    if (porta_retrato_13x13_config.d_porta_retrato_tamanho == "13x13cm") {
        iap_start_crop(13 / 13);
        iap_canvas_controller = 3;
        $("#iap_crop").show();
        return
    }

    iap_start_crop(18 / 13);
    iap_canvas_controller = 3;
    $("#iap_crop").show();
});      

$("#m_iap_crop_porta_retrato").click(function(){
    if (iap_canvas_controller != 0) {
        return;
    }
    
    if (porta_retrato_13x13_config.d_porta_retrato_tamanho == "13x13cm") {
        iap_start_crop(13 / 13);
        iap_canvas_controller = 3;
        $("#iap_crop").show();
        return
    }

    iap_start_crop(18 / 13);
    iap_canvas_controller = 3;
    $("#iap_crop").show();
});  
//função de crop 
function iap_start_crop(aspect_ratio){

    var c_width = porta_retrato_13x13_config.c_width;
    var d_height = porta_retrato_13x13_config.d_height;

    //Cropper
    var cropper = new Cropper(iap_imagem, {
        aspectRatio: aspect_ratio,
        zoomable: false,
        viewMode: 1,
        minCropBoxHeight: 500,
        crop: function(event) {
            //muda o nome do botao adicionar e cortar no contexto do porta-retrato

            tamanho_cropper = {
                width: cropper.image.clientWidth,
                height: cropper.image.clientHeight,
                naturalWidth: cropper.image.naturalWidth,
                naturalHeight: cropper.image.naturalHeight
            }
            return tamanho_cropper;
        }
      });
    window.cropper = cropper;
    //altera proporção do corte
    $("#photobloco_10x10").click(function(){
        iap_canvas_controller = 1;
        cropper.setAspectRatio(10 / 10);
    });
    
    $("#photobloco_10x15").click(function(){
        iap_canvas_controller = 2;   
        cropper.setAspectRatio(15 / 10);
    });

    $(".ret-resize-vertical").click(function(){
        c_width = 53;
        d_height = 69;
        cropper.setAspectRatio(13 / 18);
    });
    $(".ret-resize-horizontal").click(function(){
        c_width = 69;
        d_height = 53;
        cropper.setAspectRatio(18 / 13);
    });
    $(".m_ret_horizontal").click(function() {
        c_width = 69;
        d_height = 53;
        cropper.setAspectRatio(18 / 13);
    });
    $(".m_ret_vertical").click(function(){
        c_width = 53;
        d_height = 69;
        cropper.setAspectRatio(13 / 18);
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
    /*
    console.log(cropper.getData().x, cropper.getData().y, swidth, sheight, 0, 0, iap_canvas_width, iap_imagem_proporcional(swidth, sheight));
    console.log(canvas.width, canvas.height);
    console.log(cropper.getImageData().width, cropper.getImageData().height);
    */
    var meta_data_canvas = {

        cropper_x: cropper.getData().x,
        cropper_y: cropper.getData().y,
        cropper_width: swidth,
        cropper_height: sheight,
        cropper_dx: 0,
        cropper_dy: 0,
        cropper_dWidth: iap_canvas_width,
        cropper_dHeight: iap_imagem_proporcional(swidth, sheight),
        canvas_width: canvas.width,
        canvas_height: canvas.height,
        image_width: cropper.getImageData().width,
        image_height: cropper.getImageData().height

    }

    ctx.drawImage(iap_imagem, cropper.getData().x, cropper.getData().y, swidth, sheight, 0, 0, iap_canvas_width, iap_imagem_proporcional(swidth, sheight));

    $('#iap_imagem_cortada').modal('show');

    metadata_canvas.add_lista(cropper.getData().x,cropper.getData().y,swidth,sheight,0,0,iap_canvas_width,iap_imagem_proporcional(swidth, sheight),canvas.width,canvas.height,cropper.getImageData().width,cropper.getImageData().height);

    });
        
    //corta a imagem do porta retrato e insere no block info -- botao crop quando estado inicial for porta retrato
    $("#iap_crop_porta_retrato").click(function(){
        
        $("#iap_adiciona_imagem_porta_retrato").show();
        if (cliente_imagem_url.lista.length == metadata_canvas.lista.length) {
            modal_info.constructor('Por favor, adicione outra imagem!', 'aviso');
            return
        }
        objeto_canvas = {
            imagem: iap_imagem,
            x: cropper.getData().x,
            y: cropper.getData().y,
            swidth: cropper.getCroppedCanvas().width,
            sheight: cropper.getCroppedCanvas().height,
            a: 0,
            b: 0,
            c: c_width,
            d: d_height,
            imgDataWidth: cropper.getImageData().width,
            imgDataHeight: cropper.getImageData().height
        }
        
        add_porta_retrato(objeto_canvas);
    });

    $("#m_iap_crop_porta_retrato").click(function(){
        
        $("#iap_adiciona_imagem_porta_retrato").show();
        if (cliente_imagem_url.lista.length == metadata_canvas.lista.length) {
            modal_info.constructor('Por favor, adicione outra imagem!', 'aviso');
            return
        }
        objeto_canvas = {
            imagem: iap_imagem,
            x: cropper.getData().x,
            y: cropper.getData().y,
            swidth: cropper.getCroppedCanvas().width,
            sheight: cropper.getCroppedCanvas().height,
            a: 0,
            b: 0,
            c: c_width,
            d: d_height,
            imgDataWidth: cropper.getImageData().width,
            imgDataHeight: cropper.getImageData().height
        }
        
        add_porta_retrato(objeto_canvas);

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
