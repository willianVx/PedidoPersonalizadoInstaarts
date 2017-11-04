<?php 
session_start();
			/*
		$sql = "INSERT INTO $table_name (largura, altura, acabamento, moldura, preco, linkOriginal, linkAmazon)
		VALUES ('$x', '$y', '$acabamento', '$moldura', '$preco', '$imagemOriginal', 'www.zemob.com.br/image1')";

			if ($conn->query($sql) === TRUE) {
		    	echo "Ordem de compra salva com sucesso!";
		    	echo $_SESSION["imagemOriginal"];
				} else {
		    	echo "Error: " . $sql . "<br>" . $conn->error;
				}
				$conn->close();
				session_destroy();
			}
			*/
 function iap_db_install_data() {

	if (isset($_POST['preco'])) {
			$moldura = $_POST['moldura'];
			$acabamento = $_POST['acabamento'];
			$x = $_POST['largura'];
			$y = $_POST['largura'];
			$preco = $_POST['preco'];

			$imagemOriginal = $_SESSION["imagemOriginal"];
			$table_name = $_SESSION["tabelaPedido"];
	

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
register_activation_hook( __FILE__, 'iap_db_install_data' );
add_action('init', 'iap_db_install_data');