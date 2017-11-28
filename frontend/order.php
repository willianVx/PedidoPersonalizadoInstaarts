<?php 	

 function iap_order() {
 	
	if (isset($_POST['preco'])) {
			$moldura = $_POST['moldura'];
			$acabamento = $_POST['acabamento'];
			$x = $_POST['largura'];
			$y = $_POST['altura'];
			$preco = $_POST['preco'];
			//$imagemOriginal = $_SESSION["imagemOriginal"];
			$imagemOriginal = $_POST['imagem'];

			if (isset($_POST['imagemAdobe'])) {
				$imagemEditada = $_POST['imagemAdobe'];
			}else{
				$imagemEditada = "sem edicao";
			}
			
			global $wpdb;
			$table_name = $wpdb->prefix . 'instaarts_Pedido_ok';
			date_default_timezone_set('America/Sao_Paulo');
			$data = date('l jS \of F Y h:i:s A');
			$wpdb->insert( 
						$table_name, 
						array(			
							'largura' => $x, 
							'altura' => $y, 
							'acabamento' => $acabamento,
							'moldura' => $moldura,
							'preco' => $preco,
							'linkOriginal' => $imagemOriginal, 
							'linkAmazon' => $imagemEditada,
							'data'       => $data
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

/*

function iap_image_upload(){
	 $target_dir = "uploads/";
	 $target_file = $target_dir . md5(date("h:i:sa")).basename($_FILES["fileToUpload"]["name"]);
	 $uploadOk = 1;
	 $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

	  if ( isset( $_POST['image-submission'] ) && '1' == $_POST['image-submission'] ) {
	  		echo "imagem enviada!";
	  		$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
	  		$nomeOriginal = $_FILES["fileToUpload"]["name"];
			$tamanho = $_FILES["fileToUpload"]["size"];
			$tipo = $_FILES["fileToUpload"]["type"];

	 global $wpdb;
			$table_name = $wpdb->prefix . 'instaarts_imagem';
			$wpdb->insert( 
						$table_name, 
						array(			
							'nomeOriginal' => "$nomeOriginal", 
							'nomeServidor' => "$target_file", 
							'tamanho' => "$tamanho",
							'tipo' => "$tipo"							
						)
			);		
	}else{
		echo "escolha uma imagem por favor!";
	}		
		
}
	

	add_action('init', 'iap_image_upload');
	add_action('wp_ajax_nopriv_iap_image_upload', 'iap_image_upload');
function iap_image_upload() {
	  $target_dir = wp_upload_dir();
	  $target_file = $target_dir . md5(date("h:i:sa")).basename($_FILES["fileToUpload"]["name"]);
	  $uploadOk = 1;
	  $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
	  if ( isset( $_POST['image-submission'] ) && '1' == $_POST['image-submission'] ) {
	  		$check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
	  		$nomeOriginal = $_FILES["fileToUpload"]["name"];
			$tamanho = $_FILES["fileToUpload"]["size"];
			$tipo = $_FILES["fileToUpload"]["type"];

		if ($check !== false) {
				echo "O aquivo é uma imagem -". $check["mime"] . ".";
				$uploadOk = 1;
			}else{
				echo "O arquivo não é uma imagem";
				$uploadOk = 0;
			}	
	  } // end if 
	  else{
	  	echo "o Arquivo ainda não foi carregado, mas a conexão foi estabelecida!";
	  }
	  // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Seu arquivo não foi salvo.";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                echo "O arquivo ". basename( $_FILES["fileToUpload"]["name"]). " Foi adicionado a base de dados.";
                
            global $wpdb;
			$table_name = $wpdb->prefix . 'instaarts_imagem';
			$wpdb->insert( 
						$table_name, 
						array(			
							'nomeOriginal' => $nomeOriginal, 
							'nomeServidor' => $target_file, 
							'tamanho' => $tamanho,
							'tipo' => $tipo							
						)
			);
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }

	}	*/