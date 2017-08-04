
function quickSort(arr){

	if(arr.length < 2){
		return arr;
	}

	var pivotIndex = Math.floor(arr.length / 2);
	var pivot = arr.splice(arr, 1)[0];
	var i,left = [], right = [];

	for(i = 0; i<arr.length;i++){
		if(arr[i] < pivot){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}

	return quickSort(left).concat([pivot], quickSort(right));

}

var arr = [5, 6, 1, 3, 8, 9, 7];

console.log(quickSort(arr));