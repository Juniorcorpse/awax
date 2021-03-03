<?php
function romanoToInt($romano) {
    if(is_int($romano)){
        echo "voce deve digita numero romanos";
        exit;
    }
    $romano = strtoupper($romano);
    $n = 0;
    $numeros = [
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000
    ];
    $letras = strlen($romano);

    for($i=0;$i<$letras;$i++){
        $atual = $romano[$i];
        $proximo = $romano[$i+1] ?? false;

        if($proximo && $numeros[$proximo] > $numeros[$atual]){
            $n -= $numeros[$atual];
        }else{
            $n += $numeros[$atual];
        }
    }
    return $n;
}

$q = 'cxvx';
echo strtoupper($q)." = ".romanoToInt($q);