const age1 =[12,13,14,11];
const age2 =[22,23,24,24,25];
const age3 =[22,24,62,55,55,4,24,25];
const allAge = age1.concat(age2).concat(age3).concat([3333]);
const allAge2 =[...age1,...age2,...age3];
console.log(allAge2);

const shum =56;
const emon = 44;
const mahmud = 77;
const taka =[44,55,66];
const max = Math.max(shum,emon,mahmud);
const max1 =Math.max(...taka);
console.log(max1);