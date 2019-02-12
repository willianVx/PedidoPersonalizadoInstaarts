<?php

if ( ! defined( 'ABSPATH' ) ) {
        exit; // Exit if accessed directly
    }

// adiciona status 'Em produção' em admin de pedidos

function register_shipment_arrival_order_status() {
    register_post_status( 'wc-arrival-shipment', array(
        'label'                     => 'Em produção',
        'public'                    => true,
        'show_in_admin_status_list' => true,
        'show_in_admin_all_list'    => true,
        'exclude_from_search'       => false,
        'label_count'               => _n_noop( 'Em produção <span class="count">(%s)</span>', 'Em produção <span class="count">(%s)</span>' )
    ) );
}
add_action( 'init', 'register_shipment_arrival_order_status' );
 
function add_awaiting_shipment_to_order_statuses( $order_statuses ) {
 
    $new_order_statuses = array();
 
    foreach ( $order_statuses as $key => $status ) {
 
        $new_order_statuses[ $key ] = $status;
 
        if ( 'wc-processing' === $key ) {
            $new_order_statuses['wc-arrival-shipment'] = 'Em produção';
        }
    }
 
    return $new_order_statuses;
}
add_filter( 'wc_order_statuses', 'add_awaiting_shipment_to_order_statuses' );

// adiciona status 'Enviado' em admin de pedidos

function register_em_transporte_order_status() {
    register_post_status( 'wc-em-transporte', array(
        'label'                     => 'Em transporte',
        'public'                    => true,
        'show_in_admin_status_list' => true,
        'show_in_admin_all_list'    => true,
        'exclude_from_search'       => false,
        'label_count'               => _n_noop( 'Em transporte <span class="count">(%s)</span>', 'Em transporte <span class="count">(%s)</span>' )
    ) );
}
add_action( 'init', 'register_em_transporte_order_status' );
 
function add_em_transporte_to_order_statuses( $order_statuses ) {
 
    $new_order_statuses = array();
 
    foreach ( $order_statuses as $key => $status ) {
 
        $new_order_statuses[ $key ] = $status;
 
        if ( 'wc-processing' === $key ) {
            $new_order_statuses['wc-em-transporte'] = 'Em transporte';
        }
    }
 
    return $new_order_statuses;
}
add_filter( 'wc_order_statuses', 'add_em_transporte_to_order_statuses' );

?>