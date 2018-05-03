jQuery(document).ready(function($) {

    var upload_canvas = {
        canvas_url: new Array,
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
                            //imagem_url = cliente_imagem_url.lista[index];
                            canvas_url = result;
                            upload_canvas.armazena_dados_de_envio(canvas_url);
                            //upload_canvas.retorna_canvas_url(result, imagem_url);
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
        armazena_dados_de_envio: function(canvas_url){
            this.canvas_url.push(canvas_url);
            console.log(this.canvas_url);
            if (this.canvas_url.length == 6) {
                upload_canvas.retorna_canvas_url();
            }
        },
        retorna_canvas_url: function(){ 
            
            $.ajax({
                type: "POST",
                url: comprar.ajax_url,
                data: {
                    action: "iap_order",
                    d_porta_retrato: "d_porta_retrato",
                    acabamento: "Porta retrato",
                    largura: 13,
                    altura: 18,
                    imagem: cliente_imagem_url.lista[0],
                    imagem_editada: this.canvas_url[0],

                    imagem2: cliente_imagem_url.lista[1],
                    imagem_editada2: this.canvas_url[1],

                    imagem3: cliente_imagem_url.lista[2],
                    imagem_editada3: this.canvas_url[2],

                    imagem4: cliente_imagem_url.lista[3],
                    imagem_editada4: this.canvas_url[3],

                    imagem5: cliente_imagem_url.lista[4],
                    imagem_editada5: this.canvas_url[4],

                    imagem6: cliente_imagem_url.lista[5],
                    imagem_editada6: this.canvas_url[5],

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
