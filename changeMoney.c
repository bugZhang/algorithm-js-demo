#include <stdio.h>
// using namespace std; 

const int N = 100;  
int dimes[] = {1, 2, 5, 10};  
int arr[N+1] = {1};  

int coinExchange(int n)   //非递归实现
{  
  int i, j;  
  //i从0 ~ 3 因为每个arr[j]都要有一次是假设兑换了dimes[i]，所以我们要遍历一次
  for (i = 0; i < sizeof(dimes)/sizeof(int); i++)
  {  
    for (j = dimes[i]; j <= n; j++)   
      //求，arr[j]的时候，可以看出arr[j] = arr[j] + arr[j-dimes[i]]，
      //对应着上面的递归方式：arr[j]就是coinExchangeRecursion(n, m-1)，
      //arr[j-dimes[i]]就是coinExchangeRecursion(n-dimes[m-1], m)
      arr[j] += arr[j-dimes[i]];  

  }  
  return arr[n];  
}  


int main()
{
  int num2=coinExchange(N);
  printf("%d\n", num2);
  // cout<<num2<<endl; 

  return 0;
}