#include <iostream>

using namespace std;

int func(int a[], int n){
  int totalSwap = 0;
  for(int i=0; i<=n-2; i++){
    for(int j=0; j<=n-i-2; j++){
      if(a[j] > a[j+1]){
        swap(a[j], a[j+1]);
        totalSwap++;
      }
    }
  }
  return totalSwap;
}
int main(){
  int a[30];
  for(int i=0; i<30; i++){
    a[i] = 30-i;
  }

  int noOfSwap = func(a, 30);
  cout<<"total not of swap done: "<< noOfSwap <<endl;
  cout<<"Sorted array: ";
  for(int i=0; i<30; i++){
    cout<<a[i] <<" ";
  }
  cout<<endl;
  return 0;
}
