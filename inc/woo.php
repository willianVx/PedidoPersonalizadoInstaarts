<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly
}
/*
 * Define o preço correto para o produto no cart
 */
add_action( 'woocommerce_before_calculate_totals', 'iap_custom_price' );
function iap_custom_price( $cart_object ) {
    $custom_price = 10; // This will be your custome price  
    foreach ( $cart_object->cart_contents as $key => $value ) {
		if (isset($value['preco']))
            $value['data']->set_price($value['preco']);
            $value['data']->set_width($value['x']);
            $value['data']->set_height($value['y']);
    }
}


/*
 * Adicionar as informações do produto no meta
 */
add_action('woocommerce_add_order_item_meta','iap_woo_meta_produto_ordem',1,2);
function iap_woo_meta_produto_ordem($item_id, $values) {
    
    global $woocommerce;

    if (isset($values['preco'])) {
        
        $image = $values['imagem'];
        $img = "<img src=\"$image\" style=\"max-width: 300px; max-height:150px; float:right; margin-top:5px;\" />";
        
        wc_add_order_item_meta($item_id,'Moldura',$values['moldura']);
        wc_add_order_item_meta($item_id,'Acabamento',$values['acabamento']);
        wc_add_order_item_meta($item_id,'Largura',$values['x']);
        wc_add_order_item_meta($item_id,'Altura',$values['y']);
        //wc_add_order_item_meta($item_id,'Imagem',$values['imagem']);
        wc_add_order_item_meta($item_id,'Imagem',$img);

        if ($values['imagemEditada'] == '')
            $values['imagemEditada'] = 'Sem Edições';

            if (isset($values['imagem2'])) {
                $image2 = $values['imagem2'];
                $img2 = "<img src=\"$image2\" style=\"max-width: 300px; max-height:150px; float:right; margin-top:5px;\" />";

                $image3 = $values['imagem3'];
                $img3 = "<img src=\"$image3\" style=\"max-width: 300px; max-height:150px; float:right; margin-top:5px;\" />";

                $image4 = $values['imagem4'];
                $img4 = "<img src=\"$image4\" style=\"max-width: 300px; max-height:150px; float:right; margin-top:5px;\" />";

                $image5 = $values['imagem5'];
                $img5 = "<img src=\"$image5\" style=\"max-width: 300px; max-height:150px; float:right; margin-top:5px;\" />";

                /*
                $image6 = $values['imagem6'];
                $img6 = "<img src=\"$image6\" style=\"max-width: 300px; max-height:150px; float:right; margin-top:5px;\" />";
                */
                wc_add_order_item_meta($item_id,'Imagem 2',$img2);
                wc_add_order_item_meta($item_id,'Imagem 3',$img3);
                wc_add_order_item_meta($item_id,'Imagem 4',$img4);
                wc_add_order_item_meta($item_id,'Imagem 5',$img5);
                //wc_add_order_item_meta($item_id,'Imagem 6',$img6);

                /*
                wc_add_order_item_meta($item_id,'imagemEditada_2',$values['imagemEditada2']);
                wc_add_order_item_meta($item_id,'imagemEditada_3',$values['imagemEditada3']);
                wc_add_order_item_meta($item_id,'imagemEditada_4',$values['imagemEditada4']);
                wc_add_order_item_meta($item_id,'imagemEditada_5',$values['imagemEditada5']);
                wc_add_order_item_meta($item_id,'imagemEditada_6',$values['imagemEditada6']);
                */

            }
            
            if (isset($values['cropper_x'])) {

                wc_add_order_item_meta($item_id,'_cropper_x',$values['cropper_x']);
                wc_add_order_item_meta($item_id,'_cropper_y',$values['cropper_y']);
                wc_add_order_item_meta($item_id,'_cropper_width',$values['cropper_width']);
                wc_add_order_item_meta($item_id,'_cropper_height',$values['cropper_height']);
                wc_add_order_item_meta($item_id,'_cropper_dx',$values['cropper_dx']);
                wc_add_order_item_meta($item_id,'_cropper_dy',$values['cropper_dy']);
                wc_add_order_item_meta($item_id,'_cropper_dWidth',$values['cropper_dWidth']);
                wc_add_order_item_meta($item_id,'_cropper_dHeight',$values['cropper_dHeight']);
                wc_add_order_item_meta($item_id,'_canvas_width',$values['canvas_width']);
                wc_add_order_item_meta($item_id,'_canvas_height',$values['canvas_height']);
                wc_add_order_item_meta($item_id,'_image_width',$values['image_width']);
                wc_add_order_item_meta($item_id,'_image_height',$values['image_height']);

            }

            if (isset($values['cropper_x_1'])) {

                wc_add_order_item_meta($item_id,'_cropper_x_1',$values['cropper_x_1']);
                wc_add_order_item_meta($item_id,'_cropper_y_1',$values['cropper_y_1']);
                wc_add_order_item_meta($item_id,'_cropper_width_1',$values['cropper_width_1']);
                wc_add_order_item_meta($item_id,'_cropper_height_1',$values['cropper_height_1']);
                wc_add_order_item_meta($item_id,'_cropper_dx_1',$values['cropper_dx_1']);
                wc_add_order_item_meta($item_id,'_cropper_dy_1',$values['cropper_dy_1']);
                wc_add_order_item_meta($item_id,'_cropper_dWidth_1',$values['cropper_dWidth_1']);
                wc_add_order_item_meta($item_id,'_cropper_dHeight_1',$values['cropper_dHeight_1']);
                wc_add_order_item_meta($item_id,'_canvas_width_1',$values['canvas_width_1']);
                wc_add_order_item_meta($item_id,'_canvas_height_1',$values['canvas_height_1']);
                wc_add_order_item_meta($item_id,'_image_width_1',$values['image_width_1']);
                wc_add_order_item_meta($item_id,'_image_height_1',$values['image_height_1']);

                wc_add_order_item_meta($item_id,'_cropper_x_2',$values['cropper_x_2']);
                wc_add_order_item_meta($item_id,'_cropper_y_2',$values['cropper_y_2']);
                wc_add_order_item_meta($item_id,'_cropper_width_2',$values['cropper_width_2']);
                wc_add_order_item_meta($item_id,'_cropper_height_2',$values['cropper_height_2']);
                wc_add_order_item_meta($item_id,'_cropper_dx_2',$values['cropper_dx_2']);
                wc_add_order_item_meta($item_id,'_cropper_dy_2',$values['cropper_dy_2']);
                wc_add_order_item_meta($item_id,'_cropper_dWidth_2',$values['cropper_dWidth_2']);
                wc_add_order_item_meta($item_id,'_cropper_dHeight_2',$values['cropper_dHeight_2']);
                wc_add_order_item_meta($item_id,'_canvas_width_2',$values['canvas_width_2']);
                wc_add_order_item_meta($item_id,'_canvas_height_2',$values['canvas_height_2']);
                wc_add_order_item_meta($item_id,'_image_width_2',$values['image_width_2']);
                wc_add_order_item_meta($item_id,'_image_height_2',$values['image_height_2']);

                wc_add_order_item_meta($item_id,'_cropper_x_3',$values['cropper_x_3']);
                wc_add_order_item_meta($item_id,'_cropper_y_3',$values['cropper_y_3']);
                wc_add_order_item_meta($item_id,'_cropper_width_3',$values['cropper_width_3']);
                wc_add_order_item_meta($item_id,'_cropper_height_3',$values['cropper_height_3']);
                wc_add_order_item_meta($item_id,'_cropper_dx_3',$values['cropper_dx_3']);
                wc_add_order_item_meta($item_id,'_cropper_dy_3',$values['cropper_dy_3']);
                wc_add_order_item_meta($item_id,'_cropper_dWidth_3',$values['cropper_dWidth_3']);
                wc_add_order_item_meta($item_id,'_cropper_dHeight_3',$values['cropper_dHeight_3']);
                wc_add_order_item_meta($item_id,'_canvas_width_3',$values['canvas_width_3']);
                wc_add_order_item_meta($item_id,'_canvas_height_3',$values['canvas_height_3']);
                wc_add_order_item_meta($item_id,'_image_width_3',$values['image_width_3']);
                wc_add_order_item_meta($item_id,'_image_height_3',$values['image_height_3']);

                wc_add_order_item_meta($item_id,'_cropper_x_4',$values['cropper_x_4']);
                wc_add_order_item_meta($item_id,'_cropper_y_4',$values['cropper_y_4']);
                wc_add_order_item_meta($item_id,'_cropper_width_4',$values['cropper_width_4']);
                wc_add_order_item_meta($item_id,'_cropper_height_4',$values['cropper_height_4']);
                wc_add_order_item_meta($item_id,'_cropper_dx_4',$values['cropper_dx_4']);
                wc_add_order_item_meta($item_id,'_cropper_dy_4',$values['cropper_dy_4']);
                wc_add_order_item_meta($item_id,'_cropper_dWidth_4',$values['cropper_dWidth_4']);
                wc_add_order_item_meta($item_id,'_cropper_dHeight_4',$values['cropper_dHeight_4']);
                wc_add_order_item_meta($item_id,'_canvas_width_4',$values['canvas_width_4']);
                wc_add_order_item_meta($item_id,'_canvas_height_4',$values['canvas_height_4']);
                wc_add_order_item_meta($item_id,'_image_width_4',$values['image_width_4']);
                wc_add_order_item_meta($item_id,'_image_height_4',$values['image_height_4']);

                wc_add_order_item_meta($item_id,'_cropper_x_5',$values['cropper_x_5']);
                wc_add_order_item_meta($item_id,'_cropper_y_5',$values['cropper_y_5']);
                wc_add_order_item_meta($item_id,'_cropper_width_5',$values['cropper_width_5']);
                wc_add_order_item_meta($item_id,'_cropper_height_5',$values['cropper_height_5']);
                wc_add_order_item_meta($item_id,'_cropper_dx_5',$values['cropper_dx_5']);
                wc_add_order_item_meta($item_id,'_cropper_dy_5',$values['cropper_dy_5']);
                wc_add_order_item_meta($item_id,'_cropper_dWidth_5',$values['cropper_dWidth_5']);
                wc_add_order_item_meta($item_id,'_cropper_dHeight_5',$values['cropper_dHeight_5']);
                wc_add_order_item_meta($item_id,'_canvas_width_5',$values['canvas_width_5']);
                wc_add_order_item_meta($item_id,'_canvas_height_5',$values['canvas_height_5']);
                wc_add_order_item_meta($item_id,'_image_width_5',$values['image_width_5']);
                wc_add_order_item_meta($item_id,'_image_height_5',$values['image_height_5']);

                /*
                wc_add_order_item_meta($item_id,'_cropper_x_6',$values['cropper_x_6']);
                wc_add_order_item_meta($item_id,'_cropper_y_6',$values['cropper_y_6']);
                wc_add_order_item_meta($item_id,'_cropper_width_6',$values['cropper_width_6']);
                wc_add_order_item_meta($item_id,'_cropper_height_6',$values['cropper_height_6']);
                wc_add_order_item_meta($item_id,'_cropper_dx_6',$values['cropper_dx_6']);
                wc_add_order_item_meta($item_id,'_cropper_dy_6',$values['cropper_dy_6']);
                wc_add_order_item_meta($item_id,'_cropper_dWidth_6',$values['cropper_dWidth_6']);
                wc_add_order_item_meta($item_id,'_cropper_dHeight_6',$values['cropper_dHeight_6']);
                wc_add_order_item_meta($item_id,'_canvas_width_6',$values['canvas_width_6']);
                wc_add_order_item_meta($item_id,'_canvas_height_6',$values['canvas_height_6']);
                wc_add_order_item_meta($item_id,'_image_width_6',$values['image_width_6']);
                wc_add_order_item_meta($item_id,'_image_height_6',$values['image_height_6']);
                */

            }
            
        wc_add_order_item_meta($item_id,'_ImagemEditada',$values['imagemEditada']);
    }

}