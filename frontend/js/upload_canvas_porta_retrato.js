jQuery(document).ready(function($) {
    
    var upload_canvas = {
        
        upload: function(){

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

                    cropper_x_1: metadata_canvas.lista[0][1][1],
                    cropper_y_1: metadata_canvas.lista[0][2][1],
                    cropper_width_1: metadata_canvas.lista[0][3][1],
                    cropper_height_1: metadata_canvas.lista[0][4][1],
                    cropper_dx_1: metadata_canvas.lista[0][5][1],
                    cropper_dy_1: metadata_canvas.lista[0][6][1],
                    cropper_dWidth_1: metadata_canvas.lista[0][7][1],
                    cropper_dHeight_1: metadata_canvas.lista[0][8][1],
                    canvas_width_1: metadata_canvas.lista[0][9][1],
                    canvas_height_1: metadata_canvas.lista[0][10][1],
                    image_width_1: metadata_canvas.lista[0][11][1],
                    image_height_1: metadata_canvas.lista[0][12][1],

                    imagem2: cliente_imagem_url.lista[1],

                    cropper_x_2: metadata_canvas.lista[1][1][1],
                    cropper_y_2: metadata_canvas.lista[1][2][1],
                    cropper_width_2: metadata_canvas.lista[1][3][1],
                    cropper_height_2: metadata_canvas.lista[1][4][1],
                    cropper_dx_2: metadata_canvas.lista[1][5][1],
                    cropper_dy_2: metadata_canvas.lista[1][6][1],
                    cropper_dWidth_2: metadata_canvas.lista[1][7][1],
                    cropper_dHeight_2: metadata_canvas.lista[1][8][1],
                    canvas_width_2: metadata_canvas.lista[1][9][1],
                    canvas_height_2: metadata_canvas.lista[1][10][1],
                    image_width_2: metadata_canvas.lista[1][11][1],
                    image_height_2: metadata_canvas.lista[1][12][1],

                    imagem3: cliente_imagem_url.lista[2],

                    cropper_x_3: metadata_canvas.lista[2][1][1],
                    cropper_y_3: metadata_canvas.lista[2][2][1],
                    cropper_width_3: metadata_canvas.lista[2][3][1],
                    cropper_height_3: metadata_canvas.lista[2][4][1],
                    cropper_dx_3: metadata_canvas.lista[2][5][1],
                    cropper_dy_3: metadata_canvas.lista[2][6][1],
                    cropper_dWidth_3: metadata_canvas.lista[2][7][1],
                    cropper_dHeight_3: metadata_canvas.lista[2][8][1],
                    canvas_width_3: metadata_canvas.lista[2][9][1],
                    canvas_height_3: metadata_canvas.lista[2][10][1],
                    image_width_3: metadata_canvas.lista[2][11][1],
                    image_height_3: metadata_canvas.lista[2][12][1],

                    imagem4: cliente_imagem_url.lista[3],

                    cropper_x_4: metadata_canvas.lista[3][1][1],
                    cropper_y_4: metadata_canvas.lista[3][2][1],
                    cropper_width_4: metadata_canvas.lista[3][3][1],
                    cropper_height_4: metadata_canvas.lista[3][4][1],
                    cropper_dx_4: metadata_canvas.lista[3][5][1],
                    cropper_dy_4: metadata_canvas.lista[3][6][1],
                    cropper_dWidth_4: metadata_canvas.lista[3][7][1],
                    cropper_dHeight_4: metadata_canvas.lista[3][8][1],
                    canvas_width_4: metadata_canvas.lista[3][9][1],
                    canvas_height_4: metadata_canvas.lista[3][10][1],
                    image_width_4: metadata_canvas.lista[3][11][1],
                    image_height_4: metadata_canvas.lista[3][12][1],

                    imagem5: cliente_imagem_url.lista[4],

                    cropper_x_5: metadata_canvas.lista[4][1][1],
                    cropper_y_5: metadata_canvas.lista[4][2][1],
                    cropper_width_5: metadata_canvas.lista[4][3][1],
                    cropper_height_5: metadata_canvas.lista[4][4][1],
                    cropper_dx_5: metadata_canvas.lista[4][5][1],
                    cropper_dy_5: metadata_canvas.lista[4][6][1],
                    cropper_dWidth_5: metadata_canvas.lista[4][7][1],
                    cropper_dHeight_5: metadata_canvas.lista[4][8][1],
                    canvas_width_5: metadata_canvas.lista[4][9][1],
                    canvas_height_5: metadata_canvas.lista[4][10][1],
                    image_width_5: metadata_canvas.lista[4][11][1],
                    image_height_5: metadata_canvas.lista[4][12][1],

                    imagem6: cliente_imagem_url.lista[5],

                    cropper_x_6: metadata_canvas.lista[5][1][1],
                    cropper_y_6: metadata_canvas.lista[5][2][1],
                    cropper_width_6: metadata_canvas.lista[5][3][1],
                    cropper_height_6: metadata_canvas.lista[5][4][1],
                    cropper_dx_6: metadata_canvas.lista[5][5][1],
                    cropper_dy_6: metadata_canvas.lista[5][6][1],
                    cropper_dWidth_6: metadata_canvas.lista[5][7][1],
                    cropper_dHeight_6: metadata_canvas.lista[5][8][1],
                    canvas_width_6: metadata_canvas.lista[5][9][1],
                    canvas_height_6: metadata_canvas.lista[5][10][1],
                    image_width_6: metadata_canvas.lista[5][11][1],
                    image_height_6: metadata_canvas.lista[5][12][1],

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

    return window.upload_canvas = upload_canvas;

    /*
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
            //console.log(this.canvas_url);
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
*/
    //return window.upload_canvas = upload_canvas.init;
});
