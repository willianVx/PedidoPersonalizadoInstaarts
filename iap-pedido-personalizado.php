<?php 
/**
 *Author: Willian de Oliveira
 * Plugin Name: Instaarts - Pedidos personalizados
 * Plugin URI: http://instaarts.com.br
 * Description: Esse plugin implementa a ferramenta da Adobe (Creative SDK) para edição de imagens, mais menu onde o usuário pode fazer seu pedido personalizado escolhendo tamanho, acabamento e moldura. 
 * Author URI: Willian De Oliveira 
 * Version: 1.3.2 BETA
 * Licence: GPL2
 */

//Exit if accessed directly

//if (!define('ABSPATH')) {
//	exit;
//}
require 'iap-pedido-pt.php';
require 'iap-pedido-fields.php';
require 'iap-pedido-bd-connection.php';

require 'frontend/order.php';
require 'frontend/uploadByClick.php';
//adiciona adobe creative sdk na página share
function iap_referal_init()
{
	if(is_page('share')){	
		$dir = plugin_dir_path( __FILE__ );
		include($dir."frontend/index.html");
		die();
	}
}
add_action( 'wp', 'iap_referal_init' );
//enfileira os scripts
add_action('wp_enqueue_scripts', 'iap_register_scripts');
function iap_register_scripts(){
	wp_register_script('calculaPreco', plugins_url('frontend/calculaPreco.js', __FILE__), 'jquery', 1.0, true);
	wp_register_script('index', plugins_url('frontend/index.js', __FILE__), 'jquery', 1.0, true);
	wp_register_script('config', plugins_url('frontend/config.js', __FILE__), 'jquery', 1.0, true);
	wp_register_script('bar', plugins_url('frontend/bar.js', __FILE__), 'jquery', 1.0, true);

	wp_localize_script('calculaPreco', 'ajax_object', array('ajax_url' => admin_url('admin-ajax.php'), 'outro_valor' => 1234));
}
add_action('wp_enqueue_scripts', 'iap_load_JavaScripts');
function iap_load_JavaScripts(){
	wp_enqueue_script('calculaPreco');
	wp_enqueue_script('index');
	wp_enqueue_script('config');
	wp_enqueue_script('bar');

	wp_localize_script( 'calculaPreco', 'comprar', array(
		'ajax_url' => admin_url( 'admin-ajax.php' )
	));
}

