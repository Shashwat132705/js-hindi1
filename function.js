
function sayMyName(){
 console.log("h");
  console.log("i");
   console.log("t");
    console.log("e");
     console.log("s");
      console.log("h");
} 
//sayMyName()

// function addTwoNumbers(number1,number2){
//    console.log( number1 + number2);
//    }
function addTwoNumbers(number1,number2){
    let result=number1+number2
    return result;
   console.log("hitesh");
   
   }
 const result= addTwoNumbers(3,4);
 //console.log(result);
 function loginUserMessage(username){
    return`${username}just logged in`
 }
// console.log( loginUserMessage("hitesh"));
function calculateCartPrice(val1,val2, ...num1){
return num1
}

//console.log(calculateCartPrice(200,400,500));
const user={
    username: "hitesh",
    price: 199
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
 return getArray[1]
}
console.log(returnSecondValue(myNewArray));
