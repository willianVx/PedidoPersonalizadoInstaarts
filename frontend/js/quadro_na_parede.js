jQuery(document).ready(function($){
    
    $(".b_quadro_na_parede").tooltip();
    //seleciona renderiza a imagem do ambiente de acordo com o index 
    $('.loading_img').css('z-index', 1);

    var render_ambiente = function(index){
        $('.loading_img').css('z-index', 100);
        var quando_na_parede = $('.ipa_canvas_img_a').find('img');
        $(quando_na_parede).css('display', 'none');

        var img = $(".iap_img_ambiente");
        ambientes = [
            'https://instaarts.com/wp-content/uploads/2018/08/ab_1.jpg',
            'https://instaarts.com/wp-content/uploads/2018/08/ab_2.jpg',
            'https://instaarts.com/wp-content/uploads/2018/08/ab_3.jpg',
            'https://instaarts.com/wp-content/uploads/2018/08/ab_4.jpg',
            'https://instaarts.com/wp-content/uploads/2018/08/ab_5.jpg',
            'https://instaarts.com/wp-content/uploads/2018/08/ab_6.jpg',
            'https://instaarts.com/wp-content/uploads/2018/08/ab_7.jpg'
        ];

        for (let index = 0; index < ambientes.length; index++) {
            const element = ambientes[index];
            var render_cache = document.createElement('img');
                render_cache.src = element;
        }

        img["0"].attributes[1].nodeValue = ambientes[index];
        img.css('opacity', 0);
        var div_ambiente = $('.iap_img_ambiente');

        setTimeout(function(){
            $('.loading_img').fadeTo(400, 0);
            $(quando_na_parede).css('display', 'block');
            img.fadeTo(200, 1, function(){
                $('.loading_img').css('z-index', -1);
            });
        },200);
    };

    //armazena imagens no cache
    var cache_img = function(){
        var moldura = [
            'https://instaarts.com/wp-content/uploads/2018/07/molduras_instaarts_4.png',
            'https://instaarts.com/wp-content/uploads/2018/08/m_nova_york_tabaco.png',
            'https://instaarts.com/wp-content/uploads/2018/07/m_basel_preta.png',
            'https://instaarts.com/wp-content/uploads/2018/07/m_basel_tabaco.png',
            'https://instaarts.com/wp-content/uploads/2018/07/m_berlim_preta.png',
            'https://instaarts.com/wp-content/uploads/2018/07/m_berlim_branca.png',
            'https://instaarts.com/wp-content/uploads/2018/08/amazonas-areia.png',
            'https://instaarts.com/wp-content/uploads/2018/08/m_londres_bege.png',
            'https://instaarts.com/wp-content/uploads/2018/08/m_florenca_dourada.png',
            'https://instaarts.com/wp-content/uploads/2018/08/m_instambul_dourada.png',
            'https://instaarts.com/wp-content/uploads/2018/08/m_paris_preta.png',
            'https://instaarts.com/wp-content/uploads/2018/08/m_paris_branca.png',
            'https://instaarts.com/wp-content/uploads/2018/08/m_roma_preta.png',
            'https://instaarts.com/wp-content/uploads/2018/08/m_roma_branca.png'

        ]
        for (let index = 0; index < moldura.length; index++) {
            const element = moldura[index];
            var render_cache_moldura = document.createElement('img');
                render_cache_moldura.src = element;
        }
    }();

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
            if (slider_controle == 6) {
                slider_controle = 0;
                render_ambiente(slider_controle);
            }else{
                slider_controle = slider_controle + 1;
                render_ambiente(slider_controle);
            }
        });
        $('.prev').click(function(){
            if (slider_controle == 0) {
                slider_controle = 6;
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
