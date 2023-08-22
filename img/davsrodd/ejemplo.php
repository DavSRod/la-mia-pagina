<?php
function suma(int $num1, int $num2) {
    $resultado = $num1 + $num2;
    return $resultado;
}

function resta(int $num1, int $num2) {
    $resultado = $num1 - $num2;
    return $resultado;
}

function multiplica(int $num1, int $num2) {
    /* $resultado = $num1 * $num2; */
    $suma = suma($num1, $num2);
    $resta = resta ($num1, $num2);
    $resultado = $suma * $resta;
    return $resultado;
}

/* $suma = suma(num1:1, num2:3);
$resta = resta(num1:5, num2:-2); */
$resultado = multiplica(num1:5, num2:2);

echo "El resultado de la multiplicación es: ".$resultado;
?>