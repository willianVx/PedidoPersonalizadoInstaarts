<?php 
//cria banco de dados para armazenar informações do pedido --> como: largura, altura, link da imagem original sem edição e link da imagem editada no servidor da amazon
$jal_db_version = '1.0';

function iap_db_install() {
	global $wpdb;
	global $jal_db_version;

	$table_name = $wpdb->prefix . 'instaarts_Pedido';
	
	$charset_collate = $wpdb->get_charset_collate();

	if ($wpdb->get_var('SHOW TABLE'.$table_name)!=$table_name) {
		$sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		largura INTEGER(10) NOT NULL,
		altura INTEGER(10) NOT NULL,
		linkOriginal varchar(55) NOT NULL,
		linkAmazon varchar(55) NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";

	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );

	add_option( 'jal_db_version', $jal_db_version );
	}
}

function iap_db_install_data() {
	global $wpdb;
		
	$table_name = $wpdb->prefix . 'instaarts_Pedido';
	
	$wpdb->insert( 
		$table_name, 
		array( 
			'largura' => '10cm', 
			'altura' => '15cm', 
			'linkOriginal' => 'uploads/imagem.jpg', 
			'linkAmazon' => 'amazonServer/imagem2.jpg'
		) 
	);
}
register_activation_hook( __FILE__, 'iap_db_install' );
register_activation_hook( __FILE__, 'iap_db_install_data' );
add_action('init', 'iap_db_install');
add_action('init', 'iap_db_install_data');