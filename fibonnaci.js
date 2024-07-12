function fibo(n){
  let a=0,b=1;
  while(n>0){
    console.log(a);
    let c=a+b;
    a=b;
    b=c;
    n--;
  }
}
fibo(10);