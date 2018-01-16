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
        
        wc_add_order_item_meta($item_id,'ImagemEditada',$values['imagemEditada']);
    }

}