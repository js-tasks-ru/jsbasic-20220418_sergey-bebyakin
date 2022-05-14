let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let users = [vasya, petya, masha];

function namify(users) {
    let nameArr = [];
    for (let key of users) {
        nameArr.push(key.name);
    };
    return nameArr;
};

let names = namify(users); // ['Вася', 'Петя', 'Маша']
console.log(names)