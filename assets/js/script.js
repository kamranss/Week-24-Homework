
function isdivided21(m){
    return m%21==0? true:false;
}

console.log(isdivided21(21));


function factorial(m){
    if(m>0){
        let newFactorial = 1
        for (let i = 1; i <= m; i++) {
            newFactorial *= i;
        }
        return newFactorial;  
    }
    else{
        console.log("Provided number is not Prime");
    }
}

console.log(factorial(5));