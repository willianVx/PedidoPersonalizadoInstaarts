var iap_canvas_width = 750;
var iap_canvas_controller = 0;
jQuery(document).ready(function($){

var iap_imagem = document.getElementById('editable-image');

$("#b-photobloco").click(function(){
    if (iap_canvas_controller != 0) {
        console.log("já estivemos aqui!!");
    }
});

$("#photobloco_10x10").click(function(){  
    iap_start_crop(10 / 10);
    iap_canvas_controller = 1;
});

$("#photobloco_10x15").click(function(){    
    iap_start_crop(15 / 10);
    iap_canvas_controller = 2;
});

function iap_start_crop(aspect_ratio){

    var cropper = new Cropper(iap_imagem, {
        aspectRatio: aspect_ratio,
        zoomable: false,
        viewMode: 1,
        crop: function(event) {

        }
      }); 
    
    $("#photobloco_10x10").click(function(){  
        cropper.setAspectRatio(10 / 10);
    });
    
    $("#photobloco_10x15").click(function(){    
        cropper.setAspectRatio(15 / 10);
    });

    $("#iap_crop").click(function(){
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
        cropper.getCroppedCanvas();

        cropper.getCroppedCanvas({
            width: 160,
            height: 90,
            minWidth: 256,
            minHeight: 256,
            maxWidth: 4096,
            maxHeight: 4096,
            fillColor: '#fff',
            imageSmoothingEnabled: false,
            imageSmoothingQuality: 'high'
        });

console.log(cropper.getCroppedCanvas());

var swidth  = cropper.getCroppedCanvas().width;
var sheight = cropper.getCroppedCanvas().height;

var canvas = document.getElementById('iap_crop_image');
var ctx = canvas.getContext('2d');

ctx.drawImage(iap_imagem, cropper.getData().x, cropper.getData().y, swidth, sheight, 0, 0, iap_canvas_width, iap_imagem_proporcional(swidth, sheight));

/*
    // Upload cropped image to server 
    cropper.getCroppedCanvas().toBlob(function (blob) {
        var form_data = new FormData();
    
        form_data.append('croppedImage', blob);
        form_data.append("action", "iap_imageTransfer");

        $.ajax({
            type: "post",
            url: comprar.ajax_url,
            contentType: false,
            processData: false,
            cache: false,
            data: form_data,
            success: function(result) {
                if (result == "0") {
                    alert(
                        "Ocorreu um erro em nosso sistema. Por favor, tente novamente mais tarde."
                    );
                } else {
                    results = result.split("|", 2);
                    $("#edited_image_url").val(results[1]);
                    $("#edited_image_id").val(results[0]);
                    console.log(results);
                }
                $("body").removeClass("loading");
                submittingImage = false;
            },
            error: function(response) {
                alert(
                    "Ocorreu um erro em nosso sistema. Por favor, atualize a página e tente novamente."
                );
                $("body").removeClass("loading");
                submittingImage = false;
            }
        });


    });*/
        });  
    }
});

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