jQuery(document).ready(function($){

var iap_imagem = document.getElementById('editable-image');

$("#photobloco_10x10").click(function(){  
    iap_start_crop(10 / 10);
});

$("#photobloco_10x15").click(function(){    
    iap_start_crop(15 / 10);
});

function iap_start_crop(aspect_ratio){

    window.crop_control = 1;
    
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
            imageSmoothingQuality: 'high',
        });
    console.log(cropper.getCroppedCanvas())    
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