function bubbleSort(a) {

	var i, j, temp, length = a.length;

	for (i = length - 1; 0 < i; i--) {
		for (j = 0; j < i; j++) {
			if (a[j] > a[j + 1]) {
				temp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = temp;
			}
		}
	}
	return a;
}

var arr = [5, 6, 1, 3, 8, 9, 7];

console.log(bubbleSort(arr));