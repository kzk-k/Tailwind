<?php
    $layouts = $_SERVER['DOCUMENT_ROOT'] . '/resources/views/layouts/';
?>

<!DOCTYPE html>
<html lang="ja">

<head>
    <title>Laravel Mix</title>
    <link rel="stylesheet" href="/public/css/tailwind.css" />
    <link rel="stylesheet" href="/public/css/top/style.css" />
</head>

<body>
    <?php include($layouts . '/l-header.php'); ?>
    TOP
    <?php include($layouts . '/l-footer.php'); ?>
</body>

</html>