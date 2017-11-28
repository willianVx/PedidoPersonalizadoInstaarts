<?php 
//session_destroy();
function iap_imageUpload(){

    //Verify nonce
    if ( ! wp_verify_nonce( $_POST['wp-img-nonce'], 'wp-img-nonce-iap' ) )
        die('0');

    $file = $_FILES['file'];
    if (!is_array($file) || ( $file['type'] != 'image/jpeg' && $file['type'] != 'image/jpg' && $file['type'] != 'image/png' ) )
        die('1');

    if ( $file['size'] > 32000000)
        die('2');

    //Prepare for Upload
    if (!function_exists('wp_handle_upload'))
        require_once(ABSPATH . 'wp-admin/includes/file.php');

    $id = media_handle_upload( 'file', 0 );
    if (is_wp_error( $id ))
        die('0');

    $url = wp_get_attachment_image_url( $id, 'full' );
    echo $id .'|'. $url;
    die();
}

add_action('wp_ajax_iap_imageUpload', 'iap_imageUpload');
add_action('wp_ajax_nopriv_iap_imageUpload', 'iap_imageUpload');