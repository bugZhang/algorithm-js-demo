<?php
function jumpSteps($stepNum){

	if($stepNum < 0)
		return 0;
	if($stepNum == 1)
		return 1;
	if($stepNum == 2)
		return 2;

	$temp = 0;
	$pre1 = 1;
	$pre2 = 2;
	for($i = 3; $i <= $stepNum; $i++){

		$temp = $pre1 + $pre2;
		$pre2 = $pre1;
		$pre1 = $temp;

	}
	return $temp;
}

echo jumpSteps(12);