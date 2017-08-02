//输入一个数组和一个数字，在数组中查找两个数，使得它们的和正好是输入的那个数字
function twoSum(arr, value){
	var left = 0, 
		right = arr.length - 1, 
		sum = 0;

	arr = sort(arr);

	while((sum = arr[left] + arr[right]) != value){
		if(left == right){
			return -1;
		}
		if(sum > value){
			right--;
		}else if(sum < value){
			left++;
		}
	}

	return [arr[left], arr[right]];
}

function sort(arr){

	var i,j,length = arr.length,temp;
	for(i = 0; i<length-1; i++){
		for(j = 0; j<length-i-1;j++){
			if(arr[j] > arr[j+1]){
				temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;

}


function searchAll(arr, value){
	var left = 0, right = arr.length -1, sum, temp = [];

	arr = sort(arr);

	while(left < right){
		sum = arr[left] + arr[right];
		console.log(left, right);
		if(sum > value){
			right --;
		}else if(sum < value){
			left ++;
		}else{
			right --; left ++;
			temp.push([arr[left], arr[right]]);
		}
	}

	return temp;
}

// var arr = [1,3,5,6,7,8,10,11];

var arr1 = [5,6,7,2,4,3,8,10];

// console.log(twoSum(arr, 15));
// console.log(twoSum(arr1, 13));
console.log(searchAll(arr1, 11));
