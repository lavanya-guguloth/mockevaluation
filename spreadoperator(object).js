let person = {name : "venu", age : 25};
let extra = { city : "bengaluru"};
let profile = { ...person,...extra};
console.log(profile);