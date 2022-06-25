// range number 
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]
let data = []
const rangeNumber=(n,m)=>{
    if(n<m-1){
        data.push(n+1)
        rangeNumber(n+1, m);
    }

}
 rangeNumber(2, 9)   
console.log("result", data)
