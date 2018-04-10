//define valor para canvas (onde a imagem deve aparecer após cortada)
var iap_canvas_width = 568;
//define valor para canvas caso a tela seja a de um smartphone
if (window.screen.availWidth <= 414) {
    var iap_canvas_width = 365;
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
    $(".glyphicon").removeClass("glyphicon-scissors");
    $(".glyphicon").addClass("glyphicon-plus");
    $(".crop_texto").html("Adicionar")
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
    //corta a imgem do porta retrato e a insere no block info -- botao crop quando estado inicial for porta retrato
    $("#iap_crop_porta_retrato").click(function(){
        console.log("Botao Funciona!!");
        //define tamanho do recorte na imagem
        var swidth  = cropper.getCroppedCanvas().width;
        var sheight = cropper.getCroppedCanvas().height;

        //desenha o recorte da imagem no canvas 
        var canvas = document.getElementById('info_painel_crop');
        var ctx = canvas.getContext('2d');

        ctx.drawImage(iap_imagem, cropper.getData().x, cropper.getData().y, swidth, sheight, 0, 0, 69, 53);
        $("#info_painel_texto").show();
        $(".retirar_img_da_lista").show();
        $(".info_painel").css("border","none");
        $(".info_painel").addClass("info_painel_shadow");

        $("#quadros_restantes_numero").html(imagens_restantes.get_numero());
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

//retorna valor de imagens restantes 
var imagens_restantes = {
    numero: 6,
    get_numero: function(){
        if (imagens_restantes.numero == 0) {
            return
        }else{
            return --imagens_restantes.numero;
        }
    }
}