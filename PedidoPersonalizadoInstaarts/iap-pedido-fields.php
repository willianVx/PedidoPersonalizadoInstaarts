<?php 
if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly
    }
function iap_add_data_box()
{
    $screens = ['personal'];
    foreach ($screens as $screen) {
        add_meta_box(
            'iap_data_box_id',           // Unique ID
            'Pedidos',  // Box title
            'iap_data_box_html',  // Content callback, must be of type callable
            $screen                   // Post type
        );
    }
}
add_action('add_meta_boxes', 'iap_add_data_box');

function iap_data_box_html($post)
{
    ?>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  	
  		<table class="table table-hover table-striped table-bordered">
  			<tr>
  				<td>ID</td>
  				<td>Largura</td>
  				<td>Altura</td>
  				<td>Acabamento</td>
  				<td>Moldura</td>
  				<td>Preço</td>
  				<td>nome da imagem</td>
  				<td>link da imagem editada</td>
  				<td>Data e hora</td>
  			</tr>
  			<?php 
  				global $wpdb;
				$table_name = $wpdb->prefix . 'instaarts_Pedido_ok';

				    $result = $wpdb->get_results ( "SELECT * FROM $table_name" );
				    foreach ( $result as $print )   {
				    ?>
				    <tr>
				    <td><?php echo $print->id;?></td>
				    <td><?php echo $print->largura;?></td>
				    <td><?php echo $print->altura;?></td>
				    <td><?php echo $print->acabamento;?></td>
				    <td><?php echo $print->moldura;?></td>
				    <td><?php echo $print->preco;?></td>
				    <td><?php echo $print->linkOriginal;?></td>
				    <td><?php echo $print->linkAmazon;?></td>
				    <td><?php echo $print->data;?></td>
				    </tr>
				        <?php }
				  			 ?>
  		</table>
    
    <?php
}



function iap_add_custom_box()
{
    $screens = ['personal'];
    foreach ($screens as $screen) {
        add_meta_box(
            'iap_box_id',           // Unique ID
            'Preço base dos produtos',  // Box title
            'iap_custom_box_html',  // Content callback, must be of type callable
            $screen                   // Post type
        );
    }
}
add_action('add_meta_boxes', 'iap_add_custom_box');

function iap_custom_box_html($post)
{
    ?>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
 	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  	
    <div class="impressao">
 		<div class="table-responsive">
		  <h2>Metacrilato</h2>         
		  <table class="table table-hover">
		    <thead>
		      <tr>
		        <th>Acabamento</th>
		        <th>Preço</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>Metacrilato 7mm</td>
		        <td>R$ 2.467</td>
		      </tr>
	      <tr>
	        <td>Metacrilato 5mm</td>
	        <td>R$ 1.771</td>
	      </tr>
	      <tr>
	        <td>Metacrilato PS 4mm</td>
	        <td>R$ 1.392</td>
	      </tr>
	      <tr>
	        <td>Metacrilato 3mm</td>
	        <td>R$ 1.265</td>
	      </tr>
	      <tr>
	        <td>Metacrilato 3mm</td>
	        <td>R$ 1.265</td>
	      </tr>
	      <tr>
	        <td>Metacrilato 5mm ACM</td>
	        <td>R$ 1.518</td>
	      </tr>
	    </tbody>
	  </table>
	    </div>
    </div>
    <div class="impressao">
 		<div class="table-responsive">
		  <h2>Impressão</h2>         
		  <table class="table table-hover">
		    <thead>
		      <tr>
		        <th>Acabamento</th>
		        <th>Preço</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>Papel Algodão</td>
		        <td>R$ 552</td>
		      </tr>
	      <tr>
	        <td>Papel Fosco</td>
	        <td>R$ 414</td>
	      </tr>
	      <tr>
	        <td>Papel Acetinato</td>
	        <td>R$ 460</td>
	      </tr>
	      <tr>
	        <td>Papel Brilhante</td>
	        <td>R$ 437</td>
	      </tr>
	      <tr>
	        <td>Canvas</td>
	        <td>R$ 633</td>
	      </tr>
	    </tbody>
	  </table>
	    </div>
    </div>
    <div class="impressaoUV">
 		<div class="table-responsive">
		  <h2>Impressão UV</h2>         
		  <table class="table table-hover">
		    <thead>
		      <tr>
		        <th>Acabamento</th>
		        <th>Preço</th>
		      </tr>
		    </thead>
		    <tbody>
		      <tr>
		        <td>UV sobre PS</td>
		        <td>R$ 1265</td>
		      </tr>
	      <tr>
	        <td>UV sobre ACM</td>
	        <td>R$ 1.553</td>
	      </tr>
	    </tbody>
	  </table>
	    </div>
    </div>
    <?php
}