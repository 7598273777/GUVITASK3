let obj1 = { name: "jegan", age: 5 };
let obj2 = { age: 4, name: "jegan" };

let issame = true;

if (Object.keys(obj1).length === Object.keys(obj2).length) {
  for (let key in obj1) {
    if (obj1[key] === obj2[key]) {
      console.log(key + "has same value")
    } else {
      issame = false;
      console.log(key + "does not have same value");
    }
  }
} else {
  issame = false;
  console.log("Length are different");
}

if (issame) {
  console.log("Objects are same");
} else {
  console.log("Objects are Diffrent ");
}
