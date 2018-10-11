<?php 
/*
*   Cria shortcodes para links e botões para ferramenta de pedido personalizado 
*
*/
//shortcode para pedido personalizado instaarts [pedido_link PedidoPersonalizado="iap"]
function iap_pedido_short($atts){
    $a = shortcode_atts(array(
        'PedidoPersonalizado' => 'iap'
    ), $atts);

    $produto = get_page_by_title('Quadro Personalizado Instaarts', OBJECT, 'product');
    $produto_ID  = $produto -> {'ID'};

    //$template = new shortcode_template;

    return '<button class="iap_botao_pedido"> <a href="'.get_permalink($produto_ID).'">Envie sua imagem!</a> </button>';
    //return $template->construct('PedidoPersonalizado');
}
add_shortcode('pedido_link', 'iap_pedido_short');

//shortcode para pedido personalizado instaarts Photobloco [pedido_link_photobloco]
function iap_pedido_short_photobloco($atts){
    $a = shortcode_atts(array(
        'pedido_link_photobloco' => 'iap'
    ), $atts);

    $produto = get_page_by_title('Photobloco', OBJECT, 'product');
    $produto_ID  = $produto -> {'ID'};

    return '<button class="iap_botao_pedido"> <a href="'.get_permalink($produto_ID).'">Envie sua imagem</a> </button>';
}
add_shortcode('pedido_link_photobloco', 'iap_pedido_short_photobloco');


//shortcode para pedido personalizado instaarts porta retratos [pedido_link_porta_retratos]
function iap_pedido_short_porta_retratos($atts){
    $a = shortcode_atts(array(
        'pedido_link_photobloco' => 'iap'
    ), $atts);

    $produto = get_page_by_title('Kit de porta-retratos', OBJECT, 'product');
    $produto_ID  = $produto -> {'ID'};

    return '<button class="iap_botao_pedido"> <a href="'.get_permalink($produto_ID).'">Envie sua imagem</a> </button>';
}
add_shortcode('pedido_link_porta_retratos', 'iap_pedido_short_porta_retratos');

//shortcode para pedido personalizado instaarts kit-de-porta-retratos-13x13 [pedido_link_porta_retratos_13_13]
function iap_pedido_short_porta_retratos_13_13($atts){
    $a = shortcode_atts(array(
        'pedido_link_photobloco' => 'iap'
    ), $atts);

    $produto = get_page_by_title('kit-de-porta-retratos-13x13', OBJECT, 'product');
    $produto_ID  = $produto -> {'ID'};

    return '<button class="iap_botao_pedido"> <a href="'.get_permalink($produto_ID).'">Envie sua imagem</a> </button>';
}
add_shortcode('pedido_link_porta_retratos_13_13', 'iap_pedido_short_porta_retratos_13_13');
