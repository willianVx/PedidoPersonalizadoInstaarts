<?php
/*
 * Define o preço correto para o produto no cart
 */
add_action( 'woocommerce_before_calculate_totals', 'iap_custom_price' );
function iap_custom_price( $cart_object ) {
    $custom_price = 10; // This will be your custome price  
    foreach ( $cart_object->cart_contents as $key => $value ) {
		if (isset($value['preco']))
			$value['data']->set_price($value['preco']);
    }
}

/*
 * Adicionar as informações do produto no meta
 */
add_action('woocommerce_add_order_item_meta','iap_woo_meta_produto_ordem',1,2);
function iap_woo_meta_produto_ordem($item_id, $values) {
    
    global $woocommerce;

    if (isset($values['preco'])) {
        
        wc_add_order_item_meta($item_id,'Moldura',$values['moldura']);
        wc_add_order_item_meta($item_id,'Acabamento',$values['acabamento']);
        wc_add_order_item_meta($item_id,'Largura',$values['x']);
        wc_add_order_item_meta($item_id,'Altura',$values['y']);
        wc_add_order_item_meta($item_id,'Imagem',$values['imagem']);
        
        if ($values['imagemEditada'] == '')
            $values['imagemEditada'] = 'Sem Edições';
        
            if (isset($values['imagem2'])) {

                wc_add_order_item_meta($item_id,'Imagem_2',$values['imagem2']);
                wc_add_order_item_meta($item_id,'Imagem_3',$values['imagem3']);
                wc_add_order_item_meta($item_id,'Imagem_4',$values['imagem4']);
                wc_add_order_item_meta($item_id,'Imagem_5',$values['imagem5']);
                wc_add_order_item_meta($item_id,'Imagem_6',$values['imagem6']);
        
                wc_add_order_item_meta($item_id,'imagemEditada_2',$values['imagemEditada2']);
                wc_add_order_item_meta($item_id,'imagemEditada_3',$values['imagemEditada3']);
                wc_add_order_item_meta($item_id,'imagemEditada_4',$values['imagemEditada4']);
                wc_add_order_item_meta($item_id,'imagemEditada_5',$values['imagemEditada5']);
                wc_add_order_item_meta($item_id,'imagemEditada_6',$values['imagemEditada6']);
        
            }
            
            if (isset($values['cropper_x'])) {

                wc_add_order_item_meta($item_id,'cropper_x',$values['cropper_x']);
                wc_add_order_item_meta($item_id,'cropper_y',$values['cropper_y']);
                wc_add_order_item_meta($item_id,'cropper_width',$values['cropper_width']);
                wc_add_order_item_meta($item_id,'cropper_height',$values['cropper_height']);
                wc_add_order_item_meta($item_id,'cropper_dx',$values['cropper_dx']);
                wc_add_order_item_meta($item_id,'cropper_dy',$values['cropper_dy']);
                wc_add_order_item_meta($item_id,'cropper_dWidth',$values['cropper_dWidth']);
                wc_add_order_item_meta($item_id,'cropper_dHeight',$values['cropper_dHeight']);
                wc_add_order_item_meta($item_id,'canvas_width',$values['canvas_width']);
                wc_add_order_item_meta($item_id,'canvas_height',$values['canvas_height']);
                wc_add_order_item_meta($item_id,'image_width',$values['image_width']);
                wc_add_order_item_meta($item_id,'image_height',$values['image_height']);

            }
            
        wc_add_order_item_meta($item_id,'ImagemEditada',$values['imagemEditada']);
    }

}