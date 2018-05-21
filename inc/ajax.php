<?php 
if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}
/*
 * Envia o quadro pro carrinho
 */
function iap_order() {

	$photobloco_10x10 = 99.00;
	$photobloco_10x15 = 149.00;

 	if(isset($_POST['d1'])){
		$conta = new CalculaPreco;
		$conta -> formula_pedido_instaarts($_POST['acabamento'],$_POST['tipoMoldura'],$_POST['x'],$_POST['y']);
	 }

	if (isset($_POST['d2'])) {
		$conta2 = new CalculaPreco;
		
		$data['moldura'] = $_POST['moldura'];
		$data['acabamento'] = $_POST['acabamento'];
		$data['x'] = $_POST['largura'];
		$data['y'] = $_POST['altura'];
		$data['preco'] = $conta2 -> get_total_bruto($_POST['acabamento'], $_POST['tipoMoldura'], $_POST['largura'], $_POST['altura']);
		$data['imagem'] = $_POST["imagem"];
		$data['imagemEditada'] = $_POST['imagemAdobe'];

		global $woocommerce;
		
		$produto = get_page_by_title('Quadro Personalizado Instaarts', OBJECT, 'product');
		$woocommerce->cart->add_to_cart($produto->ID, 1, '', '', $data);
		
		echo "1";

	} 

	$d3 = new ImagemProporcional;

	if (isset($_POST['d3'])){

		$x = $_POST['x'];
		$y = $_POST['y'];
		
		$string_array = implode(z, $d3 -> TamanhosProporcionais($x, $y));
		echo $string_array;
	}

	if (isset($_POST['d4'])) {
		echo "R$ ".number_format($photobloco_10x10, 2, ',', '.');;
	}

	if (isset($_POST['d5'])) {
		echo "R$ ".number_format($photobloco_10x15, 2, ',', '.');;
	}

	if (isset($_POST['d_photobloco'])) {

		$data['x'] = $_POST['largura'];
		$data['y'] = $_POST['altura'];
		$data['acabamento'] = $_POST['acabamento'];
		$data['preco'] = iap_valor_photobloco($_POST['acabamento']);
		$data['imagem'] = $_POST["imagem"];

		$data['cropper_x'] = $_POST['cropper_x'];
		$data['cropper_y'] = $_POST['cropper_y'];
		$data['cropper_width'] = $_POST['cropper_width'];
		$data['cropper_height'] = $_POST['cropper_height'];
		$data['cropper_dx'] = $_POST['cropper_dx'];
		$data['cropper_dy'] = $_POST['cropper_dy'];
		$data['cropper_dWidth'] = $_POST['cropper_dWidth'];
		$data['cropper_dHeight'] = $_POST['cropper_dHeight'];
		$data['canvas_width'] = $_POST['canvas_width'];
		$data['canvas_height'] = $_POST['canvas_height'];
		$data['image_width'] = $_POST['image_width'];
		$data['image_height'] = $_POST['image_height'];


		global $woocommerce;
		
		$produto = get_page_by_title('Photobloco', OBJECT, 'product');
		$woocommerce->cart->add_to_cart($produto->ID, 1, '', '', $data);
		
		echo "1";

	}
	if (isset($_POST['d_porta_retrato'])) {
		global $woocommerce;
		$produto = get_page_by_title('Kit de porta-retratos', OBJECT, 'product');

		$data['x'] = $_POST['largura'];
		$data['y'] = $_POST['altura'];
		$data['acabamento'] = $_POST['acabamento'];
		$data['preco'] = iap_valor_porta_retrato($_POST["valor"]);
		$data['imagem'] = $_POST["imagem"];
		//$data['imagemEditada'] = $_POST['imagem_editada'];
		$data['cropper_x_1'] = $_POST["cropper_x_1"];
		$data['cropper_y_1'] = $_POST["cropper_y_1"];
		$data['cropper_width_1'] = $_POST["cropper_width_1"];
		$data['cropper_height_1'] = $_POST["cropper_height_1"];
		$data['cropper_dx_1'] = $_POST["cropper_dx_1"];
		$data['cropper_dy_1'] = $_POST["cropper_dy_1"];
		$data['cropper_dWidth_1'] = $_POST["cropper_dWidth_1"];
		$data['cropper_dHeight_1'] = $_POST["cropper_dHeight_1"];
		$data['canvas_width_1'] = $_POST["canvas_width_1"];
		$data['canvas_height_1'] = $_POST["canvas_height_1"];
		$data['image_width_1'] = $_POST["image_width_1"];
		$data['image_height_1'] = $_POST["image_height_1"];

		$data['imagem2'] = $_POST["imagem2"];

		$data['cropper_x_2'] = $_POST["cropper_x_2"];
		$data['cropper_y_2'] = $_POST["cropper_y_2"];
		$data['cropper_width_2'] = $_POST["cropper_width_2"];
		$data['cropper_height_2'] = $_POST["cropper_height_2"];
		$data['cropper_dx_2'] = $_POST["cropper_dx_2"];
		$data['cropper_dy_2'] = $_POST["cropper_dy_2"];
		$data['cropper_dWidth_2'] = $_POST["cropper_dWidth_2"];
		$data['cropper_dHeight_2'] = $_POST["cropper_dHeight_2"];
		$data['canvas_width_2'] = $_POST["canvas_width_2"];
		$data['canvas_height_2'] = $_POST["canvas_height_2"];
		$data['image_width_2'] = $_POST["image_width_2"];
		$data['image_height_2'] = $_POST["image_height_2"];

		$data['imagem3'] = $_POST["imagem3"];

		$data['cropper_x_3'] = $_POST["cropper_x_3"];
		$data['cropper_y_3'] = $_POST["cropper_y_3"];
		$data['cropper_width_3'] = $_POST["cropper_width_3"];
		$data['cropper_height_3'] = $_POST["cropper_height_3"];
		$data['cropper_dx_3'] = $_POST["cropper_dx_3"];
		$data['cropper_dy_3'] = $_POST["cropper_dy_3"];
		$data['cropper_dWidth_3'] = $_POST["cropper_dWidth_3"];
		$data['cropper_dHeight_3'] = $_POST["cropper_dHeight_3"];
		$data['canvas_width_3'] = $_POST["canvas_width_3"];
		$data['canvas_height_3'] = $_POST["canvas_height_3"];
		$data['image_width_3'] = $_POST["image_width_3"];
		$data['image_height_3'] = $_POST["image_height_3"];

		$data['imagem4'] = $_POST["imagem4"];

		$data['cropper_x_4'] = $_POST["cropper_x_4"];
		$data['cropper_y_4'] = $_POST["cropper_y_4"];
		$data['cropper_width_4'] = $_POST["cropper_width_4"];
		$data['cropper_height_4'] = $_POST["cropper_height_4"];
		$data['cropper_dx_4'] = $_POST["cropper_dx_4"];
		$data['cropper_dy_4'] = $_POST["cropper_dy_4"];
		$data['cropper_dWidth_4'] = $_POST["cropper_dWidth_4"];
		$data['cropper_dHeight_4'] = $_POST["cropper_dHeight_4"];
		$data['canvas_width_4'] = $_POST["canvas_width_4"];
		$data['canvas_height_4'] = $_POST["canvas_height_4"];
		$data['image_width_4'] = $_POST["image_width_4"];
		$data['image_height_4'] = $_POST["image_height_4"];

		$data['imagem5'] = $_POST["imagem5"];

		$data['cropper_x_5'] = $_POST["cropper_x_5"];
		$data['cropper_y_5'] = $_POST["cropper_y_5"];
		$data['cropper_width_5'] = $_POST["cropper_width_5"];
		$data['cropper_height_5'] = $_POST["cropper_height_5"];
		$data['cropper_dx_5'] = $_POST["cropper_dx_5"];
		$data['cropper_dy_5'] = $_POST["cropper_dy_5"];
		$data['cropper_dWidth_5'] = $_POST["cropper_dWidth_5"];
		$data['cropper_dHeight_5'] = $_POST["cropper_dHeight_5"];
		$data['canvas_width_5'] = $_POST["canvas_width_5"];
		$data['canvas_height_5'] = $_POST["canvas_height_5"];
		$data['image_width_5'] = $_POST["image_width_5"];
		$data['image_height_5'] = $_POST["image_height_5"];

		$data['imagem6'] = $_POST["imagem6"];

		$data['cropper_x_6'] = $_POST["cropper_x_6"];
		$data['cropper_y_6'] = $_POST["cropper_y_6"];
		$data['cropper_width_6'] = $_POST["cropper_width_6"];
		$data['cropper_height_6'] = $_POST["cropper_height_6"];
		$data['cropper_dx_6'] = $_POST["cropper_dx_6"];
		$data['cropper_dy_6'] = $_POST["cropper_dy_6"];
		$data['cropper_dWidth_6'] = $_POST["cropper_dWidth_6"];
		$data['cropper_dHeight_6'] = $_POST["cropper_dHeight_6"];
		$data['canvas_width_6'] = $_POST["canvas_width_6"];
		$data['canvas_height_6'] = $_POST["canvas_height_6"];
		$data['image_width_6'] = $_POST["image_width_6"];
		$data['image_height_6'] = $_POST["image_height_6"];

		/*
		$data['imagemEditada2'] = $_POST['imagem_editada2'];
		$data['imagemEditada3'] = $_POST['imagem_editada3'];
		$data['imagemEditada4'] = $_POST['imagem_editada4'];
		$data['imagemEditada5'] = $_POST['imagem_editada5'];
		$data['imagemEditada6'] = $_POST['imagem_editada6'];
		*/

		
		
		
		$woocommerce->cart->add_to_cart($produto->ID, 1, '', '', $data);
		
		echo "1";
	}
	if (isset($_POST['d_photobloco_imagem'])) {

		echo "teste ao quadrado!!";

	}

	else {
		//echo "0";
	}

	die();

}
add_action('wp_ajax_iap_order', 'iap_order');
add_action('wp_ajax_nopriv_iap_order', 'iap_order');


//define o valor do photobloco de acordo com informação do acabamento -- retorna valor fora do padrão caso acabamento seja um valor diferente
function iap_valor_photobloco($photobloco){

	$photobloco_str_10x10 = "photobloco 10x10cm";
	$photobloco_str_10x15 = "photobloco 10x15cm";

	if ($photobloco == $photobloco_str_10x10) {
		return 99;
	}
	if ($photobloco == $photobloco_str_10x15) {
		return 149;
	}
	if ($photobloco_str_10x10 != $photobloco || $photobloco_str_10x15 != $photobloco ) {
		return 362;
	}
}
// define valor do porta retrato de acordo com as informações da quantidade 
function iap_valor_porta_retrato($valor){

	$porta_retrato_13x18 = " R$ 149,90";
	$porta_retrato_13x13 = " R$ 119,90";

	if ($porta_retrato_13x18 == $valor) {
		return 149.90;
	}
	if ($porta_retrato_13x13 == $valor) {
		return 119.90;
	}
	else{
		return 149.90;
	}
}
/*
 * Faz o envio da imagem
 */
function iap_imageUpload(){
	
	//Verify nonce
	if ( ! wp_verify_nonce( $_POST['wp-img-nonce'], 'wp-img-nonce-iap' ) )
		die('0');

	$file = $_FILES['file'];
	if (!is_array($file) || ( $file['type'] != 'image/jpeg' && $file['type'] != 'image/jpg' && $file['type'] != 'image/png' ) )
		die('1');

	if ( $file['size'] > 32000000)
		die('2');

	//Prepare for Upload
	if (!function_exists('wp_handle_upload'))
		require_once(ABSPATH . 'wp-admin/includes/file.php');

	$id = media_handle_upload( 'file', 0 );
	if (is_wp_error( $id ))
		die('0');

	$url = wp_get_attachment_image_url( $id, 'full' );
	echo $id .'|'. $url;
	die();
}

add_action('wp_ajax_iap_imageUpload', 'iap_imageUpload');
add_action('wp_ajax_nopriv_iap_imageUpload', 'iap_imageUpload');

//faz o envio da imagem cropada

function iap_imageUpload_crop(){
	$croppedImage = $_FILES['croppedImage'];
	$data['d_photobloco_imagem'] = $_POST['d_photobloco_imagem'];

	if ( ! function_exists( 'wp_handle_upload' ) ) {
		require_once( ABSPATH . 'wp-admin/includes/file.php' );
	}
	
	$uploadedfile = $_FILES['croppedImage'];
	$upload_overrides = array( 'test_form' => false );
	
	$movefile = wp_handle_upload( $uploadedfile, $upload_overrides );
	
	if ( $movefile && ! isset( $movefile['error'] ) ) {

		die( $movefile['url']);
		
	} else {
		/**
		 * Error generated by _wp_handle_upload()
		 * @see _wp_handle_upload() in wp-admin/includes/file.php
		 */
		echo $movefile['error'];
	}

}

add_action('wp_ajax_iap_imageUpload_crop', 'iap_imageUpload_crop');
add_action('wp_ajax_nopriv_iap_imageUpload_crop', 'iap_imageUpload_crop');

/*
 * Faz o envio da imagem da adobe
 */
function iap_imageTransfer(){

	//Prepare for Upload
	if (!function_exists('wp_handle_upload')) {
		require_once(ABSPATH . 'wp-admin/includes/media.php');
		require_once(ABSPATH . 'wp-admin/includes/file.php');
		require_once(ABSPATH . 'wp-admin/includes/image.php');
	}

	$url = $_POST['file'];
	$tmp = download_url( $url );
	if( is_wp_error( $tmp ) )
		die("1");

	$file = array();
	preg_match('/[^\?]+\.(jpg|jpeg|png)/i', $url, $matches);
	$file['name'] = basename($matches[0]);
	$file['tmp_name'] = $tmp;
	
	$id = media_handle_sideload( $file, 0 );
	if (is_wp_error( $id ))
		die('2');

	$url = wp_get_attachment_image_url( $id, 'full' );
	echo $id .'|'. $url;
	die();
	
}

add_action('wp_ajax_iap_imageTransfer', 'iap_imageTransfer');
add_action('wp_ajax_nopriv_iap_imageTransfer', 'iap_imageTransfer');