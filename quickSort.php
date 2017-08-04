<?php

function qucikSort($arr){

	if(count($arr) < 2){
		return $arr;
	}
	$left = array();
	$right = array();
	$pivot = array_shift($arr);
	foreach ($arr as $key => $value) {
		if($value > $pivot){
			$right[] = $value;
		}else{
			$left[] = $value;
		}
	}

	return array_merge(qucikSort($left), array($pivot), qucikSort($right));

}

$arr = [5, 6, 1, 3, 8, 9, 7];

var_dump(qucikSort($arr));