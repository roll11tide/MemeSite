<?php
$storeFolder = 'memes';
 
if (empty($_FILES)) {
    echo "empty request";
} else {
	$tempFile = $_FILES['file']['tmp_name'];
    $targetPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . $storeFolder . DIRECTORY_SEPARATOR;
    $targetFile =  $targetPath. $_FILES['file']['name'];
    move_uploaded_file($tempFile,$targetFile);
}
?>