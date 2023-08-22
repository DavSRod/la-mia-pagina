<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="#" method="post">
        <input type="text" name="palabra" id="palabra" placeholder="Ingrese una palabra">
        <button type="submit">Enviar</button> 
    </form>
    <?php
$palabra = $_POST['palabra'];
function esPalindromo(string $palabra) {
    $palabra1 = str_replace(strrev($palabra));
    if ($palabra1 == $palabra) {
        echo "True";
    }
    else {
        echo "False";
    }
}
?>
</body>
</html>

