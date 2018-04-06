<?php 
if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly
    }
//cria banco de dados para armazenar informações do pedido photobloco
$jal_db_version = '1.0';
session_start();
function iap_db_install() {
	global $wpdb;
	global $jal_db_version;

	$table_name = $wpdb->prefix . 'instaarts_photobloco';
	
	$_SESSION["tabelaPedido"] = "$table_name";

	$charset_collate = $wpdb->get_charset_collate();

	if ($wpdb->get_var('SHOW TABLE'.$table_name)!=$table_name) {
		$sql = "CREATE TABLE $table_name (
		id mediumint(9) NOT NULL AUTO_INCREMENT,
		blob varchar(255) NOT NULL,
		data varchar(55) NOT NULL,
		PRIMARY KEY  (id)
	) $charset_collate;";

	require_once( ABSPATH . 'wp-admin/includes/upgrade.php' );
	dbDelta( $sql );

	add_option( 'jal_db_version', $jal_db_version );
	}
}
register_activation_hook( __FILE__, 'iap_db_install' );
//add_action('init', 'iap_db_install');