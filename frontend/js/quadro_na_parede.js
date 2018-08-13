jQuery(document).ready(function($){
    
    $(".b_quadro_na_parede").tooltip();
    //seleciona e renderiza a imagem do ambiente de acordo com o index 
    $('.loading_img').css('z-index', 1);

    var tamanho_x = function(){
        var tamanho_x = tamanho.getTamanho(x) ? tamanho.getTamanho(x) : 90;
        return tamanho_x;
    }

    //define acao para botao next e prev
    var slider = function(){
        var slider_controle = 0;
        $('.next').click(function(){
            var ambientes = lista_ambientes();
            if (tamanho_x() <=30 && slider_controle > ambientes.length) {
                slider_controle = 1;
            }
            if (slider_controle == ambientes.length - 1) {
                slider_controle = 0;
                render_ambiente(slider_controle);
            }else{
                slider_controle = slider_controle + 1;
                render_ambiente(slider_controle);
            }
        });
        $('.prev').click(function(){
            var ambientes = lista_ambientes();
            if (tamanho_x() <= 30 && slider_controle > ambientes.length) {
                slider_controle = 1;
            }
            if (slider_controle == 0) {
                slider_controle = ambientes.length - 1;
                render_ambiente(slider_controle);
            }else{
                slider_controle = slider_controle - 1;
                render_ambiente(slider_controle);
            }
        });
    };
    slider();

    var lista_ambientes = function(){
        var ambientes = [];
        if (tamanho_x() <= 30) {
            ambientes = [
                'https://instaarts.com/wp-content/uploads/2018/08/ab_p_1.jpg',
                'https://instaarts.com/wp-content/uploads/2018/08/ab_p_2.jpg',
                'https://instaarts.com/wp-content/uploads/2018/08/ab_p_3.jpg'
            ]
        }else{
            ambientes = [
                'https://instaarts.com/wp-content/uploads/2018/08/ab_1.jpg',
                'https://instaarts.com/wp-content/uploads/2018/08/ab_2.jpg',
                'https://instaarts.com/wp-content/uploads/2018/08/ab_3.jpg',
                'https://instaarts.com/wp-content/uploads/2018/08/ab_4.jpg',
                'https://instaarts.com/wp-content/uploads/2018/08/ab_5.jpg',
                'https://instaarts.com/wp-content/uploads/2018/08/ab_6.jpg',
                'https://instaarts.com/wp-content/uploads/2018/08/ab_7.jpg'
            ];
        }
        return ambientes;
    }

    var render_ambiente = function(index){
        $('.loading_img').css('z-index', 100);
        var quando_na_parede = $('.ipa_canvas_img_a').find('img');
        $(quando_na_parede).css('display', 'none');

        var ambientes = lista_ambientes();

        var img = $(".iap_img_ambiente");

        for (let index = 0; index < ambientes.length; index++) {
            const element = ambientes[index];
            var render_cache = document.createElement('img');
                render_cache.src = element;
        }

        ambientes_config = {
            ab_1: {
                imagem: ambientes[0],
                top: function(){
                    if (tamanho_x() <= 30) {
                        return 370
                    }else{
                        return 122
                    }
                },
                max_width: function(){
                    if (tamanho_x() <= 30) {
                        return 290
                    }else{
                        return 150
                    }
                },
                left: function(){
                    if (tamanho_x() <= 30) {
                        return 290
                    }else{
                        return 355
                    }
                }
            },
            ab_2: {
                imagem: ambientes[1],
                top: function(){
                    if (tamanho_x() <= 30) {
                        return 297
                    }else{
                        return 100
                    }
                },
                max_width: function(){
                    if (tamanho_x() <= 30) {
                        return 105
                    }else{
                        return 180
                    }
                },
                left: function(){
                    if (tamanho_x() <= 30) {
                        return 652
                    }
                    else{
                        return 355
                    }
                }
            },
            ab_3: {
                imagem: ambientes[2],
                top: function(){
                    if (tamanho_x() <= 30) {
                        return 370
                    }else{
                        return 185
                    }
                },
                max_width:  function(){
                    if (tamanho_x() <= 30) {
                        return 290
                    }else{
                        return 180
                    }
                },
                left: function(){
                    if (tamanho_x() <= 30) {
                        return 284
                    }
                    else{
                        return 355
                    }
                }
            },
            ab_4: {
                imagem: ambientes[3],
                top: function(){
                    if (tamanho_x() <= 30) {
                        return 370
                    }else{
                        return 195
                    }
                },
                max_width: function(){
                    if (tamanho_x() <= 30) {
                        return 290
                    }else{
                        return 180
                    }
                },
                left: function(){
                    return 355
                }
            },
            ab_5: {
                imagem: ambientes[4],
                top: function(){
                    if (tamanho_x() <= 30) {
                        return 370
                    }else{
                        return 125
                    }
                },
                max_width: function(){
                    if (tamanho_x() <= 30) {
                        return 290
                    }else{
                        return 130
                    }
                },
                left: function(){
                    return 340
                }
            },
            ab_6: {
                imagem: ambientes[5],
                top: function(){
                    if (tamanho_x() <= 30) {
                        return 370
                    }else{
                        return 160
                    }
                },
                max_width: function(){
                    if (tamanho_x() <= 30) {
                        return 290
                    }else{
                        return 130
                    }
                },
                left: function(){
                    return 470
                }
            },
            ab_7: {
                imagem: ambientes[6],
                top: function(){
                    if (tamanho_x() <= 30) {
                        return 370
                    }else{
                        return 120
                    }
                },
                max_width: function(){
                    if (tamanho_x() <= 30) {
                        return 290
                    }else{
                        return 130
                    }
                },
                left: function(){
                    return 315
                }
            }
        }
        
        for (const key in ambientes_config) {
            if (ambientes_config.hasOwnProperty(key)) {
                const element = ambientes_config[key];
                if(element.imagem == ambientes[index]){
                    img_config.max_width = element.max_width() + tamanho_x();
                    img_config.top = element.top();
                    img_config.left = element.left();
                    resize_css();
                }
            }
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
        var b_quadro_na_parede =  $('.b_quadro_na_parede');
            b_quadro_na_parede.prop("disabled", true);
            b_quadro_na_parede.removeAttr("disabled");

            b_quadro_na_parede.click(function(){
                render_ambiente(0);
            });
    }

    //renderiza imagem na div
    var render_canvas = function(img){
        var imagem = document.createElement('img');
        imagem.src = img;
        $('#ipa_canvas_img_a').append(imagem);
    }

    //armazena informações sobre o estado (tamanho e disposição) da imagem para cada tipo de ambiente 
    var img_config = {
        max_width: 280,
        top:       75,
        left:      330
    }

    //altera diretamente o css, recebendo a largura máxima como parametro 
    function resize_css(max_width){
        var iap_canvas = $('.ipa_canvas_img_a');
        var img = iap_canvas.find('img');
        var img_max_width = max_width || img_config.max_width;
            img.css("max-width", img_max_width + "px");
            iap_canvas.css("top", img_config.top + "px");
            iap_canvas.css("left", img_config.left + "px");
    }

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
            resize_css(270);
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
        if (img) {
            enabled_button();
            render_canvas(img);
            render_ambiente(0);
        }
    };

    //inicia módulo automaticamente quando a imagem vem do acervo
    var auto_init = function(){
        var resolve_url = iap_resolve_url_acervo(); 
        if (resolve_url) {
            enabled_button();
            render_canvas(resolve_url);
            render_ambiente(0);
        }
    }();
    
    window.init_quadro_na_parede = init;
    window.resize_image = resize_image;
    window.renderiza_moldura = renderiza_moldura;
});