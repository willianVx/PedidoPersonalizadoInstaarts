jQuery(document).ready(function($) {

    var upload_canvas = {
        
        init: function(canvas){
            $('#porta_retrato_loading').modal('show');

            upload_canvas.cache_dom(canvas);
        },
        cache_dom: function(canvas){
            this.canvas = canvas;
            this.$contador = $(".contador_carregando_pr");
            upload_canvas.upload(canvas);
        },
        upload: function(canvas){
            for (let index = 0; index < canvas.length; index++) {
                const element = canvas[index];
                element.toBlob(function(blob){

                    var formdata = new FormData();
                    formdata.append('croppedImage', blob);
                    formdata.append("action", "iap_imageUpload_crop");
                    formdata.append("d_photobloco_imagem", "imagem");
                    
                    $.ajax({
                        type: "post",
                        url: comprar.ajax_url,
                        contentType: false,
                        processData: false,
                        cache: false,
                        data: formdata,
                        success: function(result){
                            imagem_url = cliente_imagem_url.lista[index];
                            upload_canvas.retorna_canvas_url(result, imagem_url);
                            $(".contador_carregando_pr").html(++index);
                        },
                        error: function(response) {
                            alert(
                                "Ocorreu um erro em nosso sistema. Por favor, atualize a página e tente novamente."
                            );
                        }
                    });
            
                });

            }
        },
        retorna_canvas_url: function(result, imagem_url){ 
            
            $.ajax({
                type: "POST",
                url: comprar.ajax_url,
                data: {
                    action: "iap_order",
                    d_porta_retrato: "d_porta_retrato",
                    acabamento: "Porta retrato",
                    largura: 13,
                    altura: 18,
                    imagem: imagem_url,
                    imagem_editada: result
                },
                success: function(data) {
                    if (data == "0") {
                        alert("Erro no processamento. Tente mais tarde.");
                    } else {
                        window.location = comprar.cart_url;
                        console.log(comprar.cart_url);
                    }
                },
                error: function(data) {
                    alert("Erro no processamento. Tente mais tarde.");
                }
            });
        }

    }

    return window.upload_canvas = upload_canvas.init;
});
