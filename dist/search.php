<?php

include 'koneksi.php';
if(isset($_POST["form"])) {
    $query = "SELECT * FROM `furnitur` WHERE `nama` LIKE '%".$_POST['form']."%' OR `id` LIKE '%".$_POST['form']."%' OR `harga` LIKE '%".$_POST['form']."%' OR `deskripsi` LIKE '%".$_POST['form']."%'";
    $result = mysqli_query($connect, $query);
    $cek = mysqli_num_rows($result);
    if($cek > 0) {
        $data = mysqli_fetch_assoc($result);
    } else {
        header("location:main.php?pesan=gagal");
    }
} else {
    header("location:main.php?pesan=gagal");
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
</head>
<body>
    <?php
    echo $nama;
    echo $harga;
    echo $deskripsi;
    echo $id;


    ?>
</body>
</html>