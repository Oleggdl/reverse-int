module.exports = function reverse (n) {
  let result='';
  n=Math.abs(n)
  while(n){
     
        result= result+ n%10;
        n=Math.floor(n/10);

  }
  return result
}
