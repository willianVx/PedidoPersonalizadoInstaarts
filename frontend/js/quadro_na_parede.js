jQuery(document).ready(function($){
    $(".b_quadro_na_parede").tooltip();
    //seleciona renderiza a imagem do ambiente de acordo com o index 
    var render_ambiente = function(index){
        var img = $(".iap_img_ambiente");
        ambientes = [
            'https://instaarts.com/wp-content/uploads/2018/07/ab_2.jpg',
            'https://instaarts.com/wp-content/uploads/2018/07/ab_1.jpg',
            'https://instaarts.com/wp-content/uploads/2018/07/ab_3.jpg',
            'https://instaarts.com/wp-content/uploads/2018/07/ab_4.jpg',
            'https://instaarts.com/wp-content/uploads/2018/07/ab_5.jpg'
        ];
        img["0"].attributes[1].nodeValue = ambientes[index];
    };

    //habilita botão quando a imagem é definida 
    var enabled_button = function(){
        $('.b_quadro_na_parede').prop("disabled", true);
        $('.b_quadro_na_parede').removeAttr("disabled");
    }

    //renderiza imagem na div
    var render_canvas = function(img){
        var imagem = document.createElement('img');
        imagem.src = img;
        $('#ipa_canvas_img_a').append(imagem);
    }

    //define acao para botao next e prev
    var slider = function(){
        var slider_controle = 0;
        $('.next').click(function(){
            if (slider_controle == 4) {
                slider_controle = 0;
                render_ambiente(slider_controle);
            }else{
                slider_controle = slider_controle + 1;
                render_ambiente(slider_controle);
            }
        });
        $('.prev').click(function(){
            if (slider_controle == 0) {
                slider_controle = 4;
                render_ambiente(slider_controle);
            }else{
                slider_controle = slider_controle - 1;
                render_ambiente(slider_controle);
            }
        });
    }();

    //redimenciona a imagem de acordo com o tamanho escolhido 
    var resize_image = function(x){

        if (x == 20) {
            resize_css(130);
        }
        if(x > 20 && x <= 30){
            resize_css(150);
        }
        if (x > 30 && x <= 40) {
            resize_css(170);
        }
        if (x > 40 && x <= 50) {
            resize_css(190);
        }
        if (x > 50 && x <= 60) {
            resize_css(210);
        }
        if (x > 60 && x <= 70) {
            resize_css(230);
        }
        if (x > 70 && x <= 80) {
            resize_css(250);
        }
        if (x > 80 && x <= 90) {
            resize_css(280);
        }
        function resize_css(max_width){
            var img = $('.ipa_canvas_img_a').find('img');
                img.css("max-width", max_width + "px");
        }

    }

    //renderiza moldura no quadro que está na parede
    var renderiza_moldura = function(nome_moldura){
        var img = $('.ipa_canvas_img_a').find('img');
            img.removeClass();
            img.addClass(nome_moldura);
    }

    //insere imagem de atualização 
    var loading = {
        start: function(){
            console.log("Carregando!");
        },
        stop: function(){
            console.log("Imagens carregadas");
        }
    }

    //incia módulo
    var init = function(img){
        enabled_button();
        render_canvas(img);
        render_ambiente(0);
    }
    
    window.init_quadro_na_parede = init;
    window.resize_image = resize_image;
    window.renderiza_moldura = renderiza_moldura;
});
