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
// Actions to send mail
add_action('wp_ajax_sendMyMail', 'sendMyMail');
add_action('wp_ajax_nopriv_sendMyMail', 'sendMyMail');

// Sending the email
function sendMyMail() {
  global $wpdb;

  $message = "Form data:\n\n Name: {$_POST['name']}";
  if (wp_mail('email@email.com', 
              'Title', 
              $message, 
              array('Cc:email@copy.com'), 
              array())) {
  	echo 'success';
  } else {
  	echo 'error';
  }

  die();
}