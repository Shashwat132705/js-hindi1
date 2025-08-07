// singleton 

// object literals
const mySym=Symbol("key")
const Jsuser={
    name: "Hitesh",
    "full name": "Hitesh chaudhary",
    [mySym]: "mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@googe.com",
    isLoggedIN: false,
    lastLoginDays: ["Monday","Saturday"]
}
//console.log(Jsuser.email);
//console.log(Jsuser["full name"]);
//console.log( Jsuser[mySym]);
Jsuser.email="hitesh@chatgpt.com";
//console.log(Jsuser.email);
// Object.freeze(Jsuser);
Jsuser.email="hitesh@gpt.com";
Object.freeze(Jsuser);
Jsuser.greeting=function(){
    console.log("Hello js user");
    
}
console.log(Jsuser.greeting);

