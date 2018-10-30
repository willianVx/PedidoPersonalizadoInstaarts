jQuery(document).ready(function($){
    //funcionamento do bullet da imagem do conteúdo 
    $('#b_01').click(function(){
        $(this).addClass('bullet_color_active');
        $('#b_02').removeClass('bullet_color_active');

        $('#product_content_img_02').hide();
        $('#product_content_img_01').show();
    });
    $('#b_02').click(function(){
        $(this).addClass('bullet_color_active');
        $('#b_01').removeClass('bullet_color_active');

        $('#product_content_img_01').hide();
        $('#product_content_img_02').show();
    });

    //carrega conteúdo
    
});