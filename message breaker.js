    let msg = "Welcome to Programiz! Write, Edit and Run your Javascript code using JS Online Compiler The substring() method returns the part of the string between the start and end indexes, or to the end of the string";
    
    const data = []
    
    const msgCheck =(n,msg)=>{
        let msgStore = [];
        let item = n;
        if(msg.length > n){
            while(msg[item]!==" " && item>=0){
               item = item-1;
            }
            data.push(msg.substring(0, item))
            msgCheck(n, msg.substring(item));
        }
    }
    msgCheck(50, msg);
    console.log("data",data)
