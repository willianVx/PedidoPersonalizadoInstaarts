<?php 	
/*
 function iap_db_install_data() {
 	echo "<html><h1>O capeão voltou!!</h1></html>";
	if (isset($_POST['preco'])) {
			$moldura = $_POST['moldura'];
			$acabamento = $_POST['acabamento'];
			$x = $_POST['largura'];
			$y = $_POST['altura'];
			$preco = $_POST['preco'];

			//$imagemOriginal = $_SESSION["imagemOriginal"];
			$imagemOriginal ="dragoesFazendoTeste.jpg";

			global $wpdb;
			$table_name = $wpdb->prefix . 'instaarts_Pedido';
			$wpdb->insert( 
						$table_name, 
						array(			
							'largura' => $x, 
							'altura' => $y, 
							'acabamento' => $acabamento,
							'moldura' => $moldura,
							'preco' => $preco,
							'linkOriginal' => $imagemOriginal, 
							'linkAmazon' => 'amazonServer/imagem2.jpg'
						)
			);	
		}

	}

//register_activation_hook( __FILE__, 'iap_db_install_data' );
//add_action('init', 'iap_db_install_data');

add_action('wp_ajax_iap_db_install_data', 'iap_db_install_data');
add_action('wp_ajax_nopriv_iap_db_install_data', 'iap_db_install_data');
*/