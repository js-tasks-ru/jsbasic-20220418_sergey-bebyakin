function isEmpty(obj) {
  for(let key in obj){
    return false;
  }
  return  (!Object.keys(obj).length > 0 && typeof obj === 'object' )||(Object.keys(empty).length === 0 && empty.constructor === Object);
   }
let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "подъём";

console.log(isEmpty(schedule)); // false

