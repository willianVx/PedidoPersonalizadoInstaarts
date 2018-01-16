<?php 
//configura as informações para a área administrativa do wordpress 
function iap_register_post_type(){

	$singular = 'pedido personalizado';
	$plural   = 'pedidos personalizados'; 

	$labels   = array(
		'name' 		    => $plural,
		'singular_name' => $singular,
		'add_name'      => 'Configurar',
		'add_new_item'  => 'Configurar '.$singular,
		'edit'			=> 'Editar',
		'edit_item'		=> 'Edit '.$singular,
		'new_item'		=> 'Feedback '.$singular,
		'view'			=> 'Visualizar '.$singular,
		'view_item'		=> 'Visualizar '.$singular,
		'search_term'	=> 'Procurar '.$plural,
		'parent'		=> 'Grupo '.$singular,
		'not_found'		=> 'não '.$plural.' encontrado',
		'not_found_in_trash' => 'não '.$plural.'no lixo'
	);
	$args = array(
		'labels'				=> $labels,
		'public'				=> true,
		'publicly_queryable'	=> true,
		'exclude_from_search'	=> false,
		'show_in_nav_menus'		=> true,
		'show_ui'				=> true,
		'show_in_menu'			=> true,
		'show_in_admin_bar'		=> true,
		//'menu_position'			=> 10,
		'menu_icon'				=> 'dashicons-smiley',
		'can_export'			=> true,
		'delete_with_user'		=> false,
		'hierarchical'			=> false,
		'has_archive'			=> true,
		'query_var'				=> true,
		'capability_type'		=> 'post',
		'map_meta_cap'			=> true,
		//'capabilities'		=> array(),
		'rewrite'				=> array(
			'slug' 				=> 'personal',
			'with_front'		=> true,
			'pages'				=> true,
			'feeds'				=> true,
		)
	);
	register_post_type('personal', $args);
}
add_action('init', 'iap_register_post_type');