let myDate=new Date()
console.log(myDate.toString());
let myCreatedDate=new Date("01-02-2004")
console.log(myCreatedDate.toLocaleString());
let myTimeStamp=Date.now()
console.log(myTimeStamp);

newDate.toLocaleString('default', {
    weekday: "long",
    
})