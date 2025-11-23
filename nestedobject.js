let user = {
    name: "Alice",
    address : {
        city : "bengaluru",
        pin : 560001,
        geo : { lat : 12.9716, lng : 77.5946 }      
    }
};
let {
    address :{
        city,
        geo : {lat,lng}
    }
} = user;

console.log(city);  
console.log(lat);  
console.log(lng);
 