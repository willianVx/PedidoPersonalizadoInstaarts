/*
*
*
*   Apresenta banner de acordo com o contexto
*
*
*/
jQuery(document).ready(function($){

    var init_banner = function(){

        var $banner       = $('.side_banner');//resgata div com o banner
        var $image_banner = $banner["0"].children["0"].children["0"];//resgata imagem dentro do banner

        //define posição do banner de acordo com o contexto 
        if (iap_define_tipo() == 'porta_retrato') {
            $banner.css("right","519px");
        }
        if(window.innerWidth < 1800){
            $banner.hide();
        }
        //lista com link das imagens do banner 
        var images = [
            'https://instaarts.com/wp-content/uploads/2018/06/canvas.jpg',
            'https://instaarts.com/wp-content/uploads/2018/06/meta-3.jpg',
            'https://instaarts.com/wp-content/uploads/2018/06/meta-4.jpg',
            'https://instaarts.com/wp-content/uploads/2018/06/meta-5.jpg',
            'https://instaarts.com/wp-content/uploads/2018/06/meta-7-mm.jpg',
            'https://instaarts.com/wp-content/uploads/2018/06/meta-ACM.jpg',
            'https://instaarts.com/wp-content/uploads/2018/06/UV-ACM.jpg',
            'https://instaarts.com/wp-content/uploads/2018/06/UV-PS.jpg',
            'https://instaarts.com/wp-content/uploads/2018/06/photobloco.jpg',
            'https://instaarts.com/wp-content/uploads/2018/06/porta-retratos-1.jpg',
        ];
        if (iap_define_tipo() == 'imagem_acrilico') {
            var new_image = Math.floor(Math.random() * (10 - 8) + 8);//nova imagem a ser renderizada
        }else{
            var new_image = Math.floor(Math.random() * 8);
        }
        $image_banner.src = images[new_image];

        $($image_banner).click(function() {
            if (new_image == 8) {
                window.location.assign("https://instaarts.com/photoblocos/");
            }
            if (new_image == 9) {
                window.location.assign("https://instaarts.com/porta-retratos-2/");
            }
            if (new_image == 0) {
                window.location.assign("https://instaarts.com/produto/quadro-personalizado-iap");
            }
            if (new_image >= 1 && new_image <= 5) {
                window.location.assign("https://instaarts.com/metacrilato/");
            }
            if (new_image >= 6 && new_image <= 7) {
                window.location.assign("https://instaarts.com/impressao-uv/");
            }
        });

    }()
});