<?php 

global $wpdb;
$createSQL = "
	
	CREATE TABLE IF NOT EXISTS `.$wpdb->prefix. pedidoPersonalizado`
	( `ID` INT(48) NULL DEFAULT NULL AUTO_INCREMENT , 
	`largura` INT(48) NULL DEFAULT NULL ,
	`altura` INT(48) NULL DEFAULT NULL , 
	`acabamento` VARCHAR(240) NULL DEFAULT NULL , 
	`moldura` VARCHAR(240) NULL DEFAULT NULL , 
	`preco` INT(24) NULL DEFAULT NULL ,
	`amazonlink` VARCHAR(240) NULL DEFAULT NULL , 
	`imagemOriginal` VARCHAR(240) NULL DEFAULT NULL ,
	PRIMARY KEY (`ID`)) 
	ENGINE = '.$wpdb=>get_charset_collate().'AUTO_INCREMENT=1;

";

require(ABSPATH .'/admin/includes/upgrade.php');
dbDelta($createSQL);