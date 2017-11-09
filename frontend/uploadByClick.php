<?php 
<<<<<<< HEAD
function iap_image_upload(){
$target_dir = "uploads/";
$target_file = $target_dir . md5(date("h:i:sa")).basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$_SESSION["imagemOriginal"] = "$target_file";
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
    if(isset($_POST["submit"])) {
        $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
        $file = $_FILES["fileToUpload"]["name"];
        $fileSize = $_FILES['fileToUpload']['size'];
        $fileType = $_FILES['fileToUpload']['type'];
        if($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }
    // Check if file already exists
    if (file_exists($target_file)) {
        echo "Sorry, file already exists.";
        $uploadOk = 0;
    }
    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 20000000){
        echo "Sorry, your file is too large.";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
        echo "Sorry, only JPEG & PNG  files are allowed.";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
            echo "O arquivo ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";

        global $wpdb;
                    $table_imagem = $wpdb->prefix . 'instaarts_imagem';
                    $wpdb->insert( 
                                $table_name, 
                                array(          
                                    'nomeOriginal' => $file, 
                                    'nomeServidor' => $target_file, 
                                    'tamanho' => $fileSize,
                                    'tipo' => $fileType
                                )
                    );  
                    echo "Pedido enviado com Sucesso!";

        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
}
add_action('wp_ajax_iap_image_upload', 'iap_image_upload');
add_action('wp_ajax_nopriv_iap_image_upload', 'iap_image_upload');
=======
//session_destroy();
function iap_imageUpload(){

    session_start();
        $target_dir = "uploads/";
        $target_file = $target_dir . md5(date("h:i:sa")).basename($_FILES["fileToUpload"]["name"]);
        $uploadOk = 1;
        $_SESSION["imagemOriginal"] = "$target_file";
        $imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
        // Check if image file is a actual image or fake image
        if(isset($_POST["submit"])) {
            $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
            $file = $_FILES["fileToUpload"]["name"];
            $fileSize = $_FILES['fileToUpload']['size'];
            $fileType = $_FILES['fileToUpload']['type'];
            if($check !== false) {
                echo "File is an image - " . $check["mime"] . ".";
                $uploadOk = 1;
            } else {
                echo "File is not an image.";
                $uploadOk = 0;
            }
        }
        // Check if file already exists
        if (file_exists($target_file)){
            echo "Sorry, file already exists.";
            $uploadOk = 0;
        }
        // Check file size
        if ($_FILES["fileToUpload"]["size"] > 20000000){
            echo "Sorry, your file is too large.";
            $uploadOk = 0;
        }
        // Allow certain file formats
        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg") {
            echo "Sorry, only JPEG & PNG  files are allowed.";
            $uploadOk = 0;
        }
        // Check if $uploadOk is set to 0 by an error
        if ($uploadOk == 0) {
            echo "Sorry, your file was not uploaded.";
        // if everything is ok, try to upload file
        } else {
            if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                echo "O arquivo ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
                $sql = "INSERT INTO image1 (name, size, type, linkName)
                                VALUES ('$file', '$fileSize', '$fileType', '$target_file')";
                                if ($conn->query($sql) === TRUE) {
                                } else {
                                    echo "Error: " . $sql . "<br>" . $conn->error;
                                }
                                $conn->close();
            } else {
                echo "Sorry, there was an error uploading your file.";
            }
        }
}

add_action('wp_ajax_iap_imageUpload', 'iap_imageUpload');
add_action('wp_ajax_nopriv_iap_imageUpload', 'iap_imageUpload');
>>>>>>> cf1e078af84a20cea70e52d42f538a6fa5b2fbfd
