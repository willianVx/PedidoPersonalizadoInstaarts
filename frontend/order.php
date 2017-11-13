<?php 	

 function iap_order() {
 	
	if (isset($_POST['preco'])) {
			$moldura = $_POST['moldura'];
			$acabamento = $_POST['acabamento'];
			$x = $_POST['largura'];
			$y = $_POST['altura'];
			$preco = $_POST['preco'];
			//$imagemOriginal = $_SESSION["imagemOriginal"];
			$imagemOriginal = "pq deus?";
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
							'linkAmazon' => "tristeza.png"
						)
			);	
			echo "Pedido enviado com Sucesso!";
		}else{
			echo "error";
		}
	}
//register_activation_hook( __FILE__, 'iap_db_install_data' );
//add_action('init', 'iap_db_install_data');
add_action('wp_ajax_iap_order', 'iap_order');
add_action('wp_ajax_nopriv_iap_order', 'iap_order');






function my_theme_send_email() {
	  if ( isset( $_POST['email-submission'] ) && '1' == $_POST['email-submission'] ) {
	    // Send the email...
	    echo "Funcionou, é tetra!!";
	  } // end if 
	  else{
	  	echo "não foi, mais foi!!";
	  }
	} // end my_theme_send_email
	add_action( 'init', 'my_theme_send_email' );