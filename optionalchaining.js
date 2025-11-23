let emp = { 
    name: "prakash", 
    details: { 
        department: "IT",
        profile: {
            role: "Employee"
        }
    }
};
let role = emp?.details?.profile?.role;
console.log(role); // Output: Employee