<?php

$dirImg = scandir("../img");

function dirToArray($dir) {
    $fetchImg = [];
    foreach ($dir as $key => $value) {

        if (!in_array($value, array(".", ".."))) {

            if (strpos($value,"Calque") !== false) {
                $fetchImg [] = $value;
            }
        }
    }
    return $fetchImg;
}




$fetchImg = dirToArray($dirImg);

echo json_encode($fetchImg);


