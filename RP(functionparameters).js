function sumAll(...args) {
    return args.reduce((accumulator,currentvalue) => accumulator+currentvalue,0);
}
console.log(sumAll(1,2,3,4,5));
