//折半查找
function bishearch(arr, value){

	var left = 0, right = arr.length - 1;
	while(right >= left){

		var middle	= left + ((right - left) >> 1);

		if(value < arr[middle]){
			right = middle - 1;
		}else if(value > arr[middle]){
			left = middle + 1;
		}else{
			return middle;
		}
	}
	return -1;	
}

var arr = [1,3,5,6,7,8,10,11];

console.log(bishearch(arr, 8));