function sum(numberOne) {
  let count = numberOne;
  return function sumUp(numberTwo){
    if(numberTwo===undefined){
        return count
    }else{
        count += numberTwo
        return sumUp;
    }
  }
}

console.log(sum(1)(4)(66)(35)(0)());
