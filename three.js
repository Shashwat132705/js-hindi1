// for of
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const element of arr) {
    //console.log(element);
    }
    const greetings="Hello World!"
    for (const greet of greetings) {
       // console.log(`Each char is ${greet}`);
         }

         // maps
         const map=new Map()
         map.set('IN',"INDIA")
         map.set('USA',"United States of America")
         map.set('fr',"france")
          map.set('IN',"INDIA")
          for (const key in map) {
           console.log(key);
           
          }

//console.log(map);
 for (const [key,value] of map) {
   // console.log(key,':-',value);
    
 }
//  const myObject={
//     'game1': 'NFS',
//     'game2':"spiderman"
//  }
//  for (const [key,value] of myObject) {
//     // console.log(key,':-',value);
//  }
 const myObject={
    js: 'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
 }
 for (const key in myObject) {
   //console.log(`${key} shortcut is for ${myObject[key]}`);
   
 }const programming=["js","rb","py","java","cpp"]
 for (const key in programming) {
//  console.log(programming[key]);
  
 }