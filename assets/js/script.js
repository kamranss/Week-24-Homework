
/* Calculating Whether the given number can be divided into 3 and 7 at the same time without any decimal */

function isdivided21(m){
    return m%21==0? true:false;
}

console.log(isdivided21(21));


/* Calculating the factorial of the given number */

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


/*  calculating Prime numbers Within the list */
let arr1 = [1,2,3,4,5,6]
let result1 = 0
function calculatePrimeNumbers(m){
    for (let i = 0; i < arr1.length; i++) {
            if(arr1[i]%2 == 0){
                result1+= arr1[i] * arr1[i]
            }
    }
    return result1;
}

console.log(calculatePrimeNumbers(arr1));


/*  calculating Composite numbers Within the list */
let arr2 = [1,2,3,4,5,6];
let result2 = 0;
function calculateCompositeNumbers(m){
    for (let i = 0; i < arr2.length; i++) {
            if(arr2[i]%2 != 0){
                result2+= arr2[i]
            }
    }
    return result2;
}

console.log(calculateCompositeNumbers(arr2));

/*  calculating The quantity of Prime numbers Within the list */

// let arr3 = [1,2,3,4,5,6];
// let result3 = 0;
// function calculatePrimeNumbers(m){
//     for (let i = 0; i < arr3.length; i++) {
//             if(arr3[i]%2 == 0){
//                 result3++
//             }
//     }
//     return result3;
// }

// console.log(calculatePrimeNumbers(arr3));



function checkCredentials(pass, em){
    let password = "12345";
    let email= "lorem@code.edu.az";
    if(pass == password && em == email){
        console.log("Access Granted");
    }
    else{
        console.log("Access denied - Provided password or email is not valid");
        goto
    }
}

let userEmail = prompt("Please enter your email")
let userPassword = prompt("Please enter your password")
checkCredentials(userEmail, userPassword)