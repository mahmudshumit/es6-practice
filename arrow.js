const add = (x,y)=> x+y;
const result = add(2,2);
console.log(result);

const doubleit = num=> num*2;
const result1 = doubleit(5);
console.log(result1);

const give5 = ()=> 5;
const result2 = give5();
console.log(result2);

const doMath = (x,y)=>{
    const sum = x+y;
    const div = x-y;

    const result =  sum*div;
    return result;
}
const total = doMath(7,5);
console.log(total);