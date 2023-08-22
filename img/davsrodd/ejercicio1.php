<?php
function calcularDescuento(int $precioOriginal, float $descuento) {
    $porcentajeDescuento = $precioOriginal - ($precioOriginal * ($descuento / 100));

    return $porcentajeDescuento;
}
$descuento = calcularDescuento(560000, 25);
echo "El precio final del producto es: ".$descuento;
?>