<?php

function changeMoney(){

	$change = array(1, 2, 5, 10);
	$N = 4;
	$count = array_fill(0, $N+1, 0);
	$count[0] = 1;

	for($i = 0; $i < 4; $i++){

		for($j = $change[$i]; $j <= $N; $j++){
			$count[$j] += $count[$j - $change[$i]];
		}

	}
	var_dump($count[$N]);
}

changeMoney();