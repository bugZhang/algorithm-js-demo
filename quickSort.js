function quickSort(arr){

	var length = arr.length;
	var i ,left = [],right = [],leftTemp,rightTemp, point = length >> 1;

	console.log(length, point);

	while(rightTemp != 0 && leftTemp != 0){
		leftTemp = 0; rightTemp = 0;
		for(i = 0; i < length;i++){
			console.log(arr[i]);
			return 0;
			if(arr[i] > arr[point]){
				rightTemp = arr[i];
				right.push(arr[i]);
			}else{
				leftTemp = arr[i];
				left.push(arr[i]);
			}
		}
	}

	console.log(left, rightTemp);

}

var arr = [5, 6, 1, 3, 8, 9, 7];

quickSort(arr);