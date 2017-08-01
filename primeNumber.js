//输入一个正整数，按照从小到大的顺序找出它的所有质数的因子（如180的质数因子为2 2 3 3 5 ）

function getPrimeNumbers(intNum){
	
	var i = 1, n = intNum, primeNums = [];
	while(n > 1){
		i ++;
		if(n%i==0){
			n = n / i;
			primeNums.push(i);
			i = 1;

		}
	}
	return primeNums;
}

console.log(getPrimeNumbers(10000));