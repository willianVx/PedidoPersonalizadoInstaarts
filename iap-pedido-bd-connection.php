<?php 
//cria banco de dados para armazenar informações do pedido --> como: largura, altura, link da imagem original sem edição e link da imagem editada no servidor da amazon
$jal_db_version = '1.0';
session_start();
function iap_db_install() {
	global $wpdb;
	global $jal_db_version;

	$table_name = $wpdb->prefix . 'instaarts_Pedido';
	$table_imagem = $wpdb->prefix . 'instaarts_imagem';
	
	$_SESSION["tabelaPedido"] = "$table_name";

	$charset_collate = $wpdb->get_charset_collate();

	if ($wpdb->get_var('SHOW TABLE'.$table_name)!=$table_name) {
		$sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		largura INTEGER(10) NOT NULL,
		altura INTEGER(10) NOT NULL,
		acabamento varchar(55) NOT NULL,
		moldura varchar(55) NOT NULL,
		preco varchar(55) NOT NULL,
		linkOriginal varchar(55) NOT NULL,
		linkAmazon varchar(55) NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";

	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );

	add_option( 'jal_db_version', $jal_db_version );
	}
	if ($wpdb->get_var('SHOW TABLE'.$table_imagem)!=$table_imagem) {
		$sql = "CREATE TABLE $table_imagem (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		nomeOriginal varchar(48) NOT NULL,
		nomeServidor varchar(48) NOT NULL,
		tamanho INTEGER(10) NOT NULL,
		tipo varchar(24) NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";
	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );
	add_option( 'jal_db_version', $jal_db_version );
	}
}
register_activation_hook( __FILE__, 'iap_db_install' );
add_action('init', 'iap_db_install');