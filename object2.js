//const tinderUser= new Object()
const tinderUser={};
tinderUser.id="123"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);
const regularUser={
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname:"hitesh",
            lastname:"chaudhary"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.userfullname);
const obj1 = {1: "a", 2: "b"}
const obj2 = {3 : "c", 4: "d" }
const obj4 = {5 : "e", 6: "f" }
// const obj3={
//     obj1,obj2
// }
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    },
    {

    }
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
const course ={
    coursename: "js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}

//course.courseinstructor
const{courseinstructor}=course
console.log(courseinstructor);
const navbar = ({company })=> {

}
navbar(campany="hitesh")