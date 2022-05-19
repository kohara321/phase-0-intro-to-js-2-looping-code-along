// for (let age = 30; age < 40; age ++) {
//     console.log(`I'm ${age} years old. Happy birthday to me.`);
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i=0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and add a bow!`);
//     }
//     return gifts;
// }

// wrapGifts(gifts);

function writeCards(names, event) {
    let newArr = [];
    for( let i = 0; i < names.length; i++) {
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
  return newArr;
};

console.log(writeCards(['Guadalupe', 'Ollie', 'Aki'], 'surprise'));

function countDown() {
    let countDown = 10
    while (countDown >= 0) {
        console.log(countDown--)
    }
}

