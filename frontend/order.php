<?php 
	include "conexao.php";
	session_start();
	if (isset($_POST['preco'])) {
		$moldura = $_POST['moldura'];
		$acabamento = $_POST['acabamento'];
		$x = $_POST['largura'];
		$y = $_POST['largura'];
		$preco = $_POST['preco'];

		$imagemOriginal = $_SESSION["imagemOriginal"];

		$sql = "INSERT INTO pedido (largura, altura, acabamento, moldura, preco, amazonLink, imagemOriginal)
		VALUES ('$x', '$y', '$acabamento', '$moldura', '$preco', 'www.zemob.com.br/image1', '$imagemOriginal')";

			if ($conn->query($sql) === TRUE) {
		    	echo "Ordem de compra salva com sucesso!";
		    	echo $_SESSION["imagemOriginal"];
				} else {
		    	echo "Error: " . $sql . "<br>" . $conn->error;
				}
				$conn->close();
				session_destroy();
			}
 ?>