const person = { name: 'Harry Potter', age: 22, job: 'wizard',phone:'0160033100', gfNAme: 'ginny', address: 'Hogwarts', friendsName: ['Ron', 'Harmoine', 'Luna'] };
const {phone , gfNAme,address}= person;
// const gfNAme = person.gfNAme;
// const friendsName = person.friendsName;

// console.log(gfNAme,phone,address);
// console.log(gfNAme,phone,address);
// console.log(gfNAme,phone);
// console.log(gfNAme,phone);
const friends =['rumel','rudra','rayhan','rafi'];
const [chutoFriend ,...restFriend]= friends;
console.log(restFriend);