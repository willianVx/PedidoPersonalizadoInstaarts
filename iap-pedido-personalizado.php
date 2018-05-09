<?php 
/**
 *Author: Willian de Oliveira
 * Plugin Name: Instaarts - Pedidos personalizados
 * Plugin URI: https://instaarts.com.br
 * Description: Esse plugin implementa a ferramenta da Adobe (Creative SDK) para edição de imagens, mais menu onde o usuário pode fazer seu pedido personalizado escolhendo tamanho, acabamento e moldura. 
 * Author URI: Willian De Oliveira 
 * Version: 1.5 BETA
 * Licence: GPL2
 */
if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly
    }
    
require 'iap-pedido-pt.php';
require 'iap-pedido-fields.php';
require 'iap-pedido-bd-connection.php';
require 'inc/ajax.php';
require 'inc/woo.php';
require 'calculadoraProdutosInsta/iap-get-preco.php';
require 'ImagemProporcional/iap-ImagemProporcional.php';
require 'frontend/pacote_porta_retrato.php';

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
		$dir = plugin_dir_path( __FILE__ );
		include($dir."frontend/index.php");
		die();
	}
}

add_action( 'wp', 'iap_referal_init' );
function iap_register_scripts(){

	wp_enqueue_style( 'bootstrap', '//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css');
	wp_enqueue_style('estilo', plugins_url('PedidoPersonalizadoInstaarts/css/style.css'));
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
	wp_enqueue_script('validaTamanho', plugins_url('frontend/js/validaTamanho.js', __FILE__), 'jquery', 1.0, true);
	wp_enqueue_script('config-preco', plugins_url('frontend/js/config-preco.js',__FILE__),'jquery', 1.0, true);
	wp_enqueue_script('resolve_url_jquery', plugins_url('frontend/js/resolve_url.js',__FILE__), 'jquery', 1.0, true);
	wp_enqueue_script('upload_canvas_porta_retrato', plugins_url('frontend/js/upload_canvas_porta_retrato.js',__FILE__), 'jquery', 1.0, true);

	wp_enqueue_script('cropper_js', plugins_url('node_modules/cropperjs/dist/cropper.js',__FILE__),'jquery', 1.4, true);

	wp_enqueue_script('croper_config_js', plugins_url('frontend/js/crop_config.js',__FILE__),'jquery', 1.4, true);

	wp_enqueue_script('mustache_js', plugins_url('node_modules/mustache/mustache.js',__FILE__),'jquery', 1.4, true);

	
}