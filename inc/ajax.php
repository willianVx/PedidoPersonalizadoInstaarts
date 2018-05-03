<?php 
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

		$data['x'] = $_POST['largura'];
		$data['y'] = $_POST['altura'];
		$data['acabamento'] = $_POST['acabamento'];
		$data['preco'] = 149.90;
		$data['imagem'] = $_POST["imagem"];
		$data['imagemEditada'] = $_POST['imagem_editada'];

		$data['imagem2'] = $_POST["imagem2"];
		$data['imagem3'] = $_POST["imagem3"];
		$data['imagem4'] = $_POST["imagem4"];
		$data['imagem5'] = $_POST["imagem5"];
		$data['imagem6'] = $_POST["imagem6"];

		$data['imagemEditada2'] = $_POST['imagem_editada2'];
		$data['imagemEditada3'] = $_POST['imagem_editada3'];
		$data['imagemEditada4'] = $_POST['imagem_editada4'];
		$data['imagemEditada5'] = $_POST['imagem_editada5'];
		$data['imagemEditada6'] = $_POST['imagem_editada6'];

		global $woocommerce;
		
		$produto = get_page_by_title('Kit de porta-retratos', OBJECT, 'product');
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