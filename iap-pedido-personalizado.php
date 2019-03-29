<?php 

/**
 *Author: Willian de Oliveira
 * Plugin Name: Instaarts - Pedidos personalizados
 * Plugin URI: https://instaarts.com.br
 * Description: Ferramenta para quadros personalizados, implementa três produtos: quadro metacrilato personalizado, photobloco e porta-retratos. 
 * Author URI: Willian De Oliveira 
 * Version: 1.9 BETA
 * Licence: GPL2
 */

if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly
}
    
require 'iap-pedido-pt.php';
require 'iap-pedido-fields.php';
require 'iap-pedido-bd-connection.php';
require 'iap_order_status.php';
require 'iap_shortcode.php';
require 'inc/ajax.php';
require 'inc/woo.php';
require 'calculadoraProdutosInsta/iap-get-preco.php';
require 'calculadoraProdutosInsta/iap-get-preco-parcelado.php';
require 'ImagemProporcional/iap-ImagemProporcional.php';
require 'frontend/pacote_porta_retrato.php';
require 'frontend/save_images.php';
require 'frontend/side_banner.php';
require 'frontend/quadro_na_parede.php';
require 'frontend/iap_content.php';
require 'frontend/garantia_devolucao.php';

/*
 * Verifica se o WooCommerce tá presente
*/

if ( class_exists( 'WooCommerce' ) ) {

	function iap_aviso_woocommerce() {
		?>
			<div class="notice notice-success is-dismissible">
				<p>Instale e ative o WooCommerce para usar o plugin do Instaarts</p>
			</div>
		<?php
	}
	add_action( 'admin_notices', 'iap_aviso_woocommerce' );
	return;

}

//Carrega Template na página do produto
function iap_referal_init() {
	
	$produto_4 = get_page_by_title('kit-de-porta-retratos-13x13', OBJECT, 'product');
	if( is_single($produto_4->ID) ){	
		//enfileira os scripts
		add_action('wp_enqueue_scripts', 'iap_register_scripts');
		$dir = plugin_dir_path( __FILE__ );
		include($dir."frontend/index.php");
		
		die();
	}
	
	$produto_3 = get_page_by_title('Photobloco', OBJECT, 'product');
	if( is_single($produto_3->ID) ){	
		//enfileira os scripts
		add_action('wp_enqueue_scripts', 'iap_register_scripts');
		$dir = plugin_dir_path( __FILE__ );
		include($dir."frontend/index.php");
		
		die();
	}
	
	$produto_2 = get_page_by_title('Kit de porta-retratos', OBJECT, 'product');
	if( is_single($produto_2->ID) ){	
		//enfileira os scripts
		add_action('wp_enqueue_scripts', 'iap_register_scripts');
		$dir = plugin_dir_path( __FILE__ );
		include($dir."frontend/index.php");
		die();
	}
	
	$produto = get_page_by_title('Quadro Personalizado Instaarts', OBJECT, 'product');
	if( is_single($produto->ID) ){	
		//enfileira os scripts
		add_action('wp_enqueue_scripts', 'iap_register_scripts');
		//adiciona gtag do google ao header 
		add_action('wp_head', 'iap_add_header_content');
		$dir = plugin_dir_path( __FILE__ );
		include($dir."frontend/index.php");
		die();
	}
}


//retorna conteudo para o header do pedido personalizado
function iap_add_header_content(){
	?>
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-75867908-2"></script>
		<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'UA-75867908-2');
		</script>
	<?php
}

add_action( 'wp', 'iap_referal_init' );
function iap_register_scripts(){

	wp_enqueue_style('jquery_ui_style', plugins_url('PedidoPersonalizadoInstaarts/node_modules/jquery-ui-1.12.1.custom/jquery-ui.min.css'));
	wp_enqueue_script('jquery_ui', plugins_url('node_modules/jquery-ui-1.12.1.custom/jquery-ui.min.js', __FILE__), 'jquery', 1.4, true);

	wp_enqueue_style( 'bootstrap', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
	wp_enqueue_style('estilo', plugins_url('PedidoPersonalizadoInstaarts/css/style.css'));
	wp_enqueue_style('estilo_molduras', plugins_url('PedidoPersonalizadoInstaarts/css/molduras_na_parede.css'));
	wp_enqueue_style('estilo_iap_content', plugins_url('PedidoPersonalizadoInstaarts/css/iap_content.css'));

	wp_enqueue_style('novo-estilo', plugins_url('PedidoPersonalizadoInstaarts/css/new_style.css'));

	wp_enqueue_style('cropper_css', plugins_url('PedidoPersonalizadoInstaarts/node_modules/cropperjs/dist/cropper.css'));
	
	wp_enqueue_script('jquery-form', '//malsup.github.com/jquery.form.js');
	wp_enqueue_script('adobe-aviary', '//dme0ih8comzn4.cloudfront.net/imaging/v3/editor.js');
	//wp_enqueue_script('iap-calculo', plugins_url('frontend/js/calculaPreco.js', __FILE__), 'jquery', 1.0, true);
	wp_enqueue_script('iap-bar', plugins_url('frontend/js/bar.js', __FILE__), 'jquery', 1.0, true);
	
	wp_register_script('iap-index', plugins_url('frontend/js/index.js', __FILE__), 'jquery', 1.0, true);
	global $woocommerce;
	$cart = '';
	if (isset($woocommerce)) {
		$cart = $woocommerce->cart->get_cart_url();
	}
	
	wp_localize_script('iap-index', 'comprar', array(
		'ajax_url' => admin_url('admin-ajax.php'), 
		'api_val' => '<ebddf7a8e3164bf3baa8466e4a9e9480>',
		'cart_url' => $cart
		)
	);
	wp_enqueue_script('iap-index');

	wp_enqueue_script('bootstrap-modal', plugins_url('frontend/js/bootstrap.js', __FILE__), 'jquery', 1.0, true);
	wp_enqueue_script('validaTamanho', plugins_url('frontend/js/validaTamanho.js', __FILE__), 'jquery', 1.4, true);
	wp_enqueue_script('config-preco', plugins_url('frontend/js/config-preco.js',__FILE__),'jquery', 1.0, true);
	wp_enqueue_script('modal_info', plugins_url('frontend/js/modal_info.js',__FILE__),'jquery', 1.0, true);
	wp_enqueue_script('modal_help', plugins_url('frontend/js/modal_help.js',__FILE__),'jquery', 1.0, true);
	wp_enqueue_script('webstorage', plugins_url('frontend/js/webstorage_get_image.js',__FILE__),'jquery', 1.0, true);
	wp_enqueue_script('resolve_url_jquery', plugins_url('frontend/js/resolve_url.js',__FILE__), 'jquery', 1.0, true);
	
	wp_enqueue_script('upload_canvas_porta_retrato', plugins_url('frontend/js/upload_canvas_porta_retrato.js',__FILE__), 'jquery', 1.0, true);
	wp_enqueue_script('show_banner', plugins_url('frontend/js/show_banner.js',__FILE__), 'jquery', 1.0, true);
	wp_enqueue_script('portrait_images', plugins_url('frontend/js/portrait_images.js',__FILE__), 'jquery', 1.0, true);

	wp_enqueue_script('cropper_js', plugins_url('node_modules/cropperjs/dist/cropper.js',__FILE__),'jquery', 1.4, true);

	wp_enqueue_script('croper_config_js', plugins_url('frontend/js/crop_config.js',__FILE__),'jquery', 1.4, true);

	wp_enqueue_script('mustache_js', plugins_url('node_modules/mustache/mustache.js',__FILE__),'jquery', 1.4, true);

	wp_enqueue_script('localiza_autor', plugins_url('frontend/js/localiza_autor.js',__FILE__),'jquery', 1.4, true);

	wp_enqueue_script('quadro_na_parede', plugins_url('frontend/js/quadro_na_parede.js',__FILE__),'jquery', 1.4, true);

	wp_enqueue_script('iap_content', plugins_url('frontend/js/iap_content.js',__FILE__),'jquery', 1.4, true);
}

//enfileira scripts globais 
function iap_scripts_globais(){
	wp_enqueue_style('iap_global', plugins_url('PedidoPersonalizadoInstaarts/css/global.css'));
}
add_action('wp_enqueue_scripts', 'iap_scripts_globais');