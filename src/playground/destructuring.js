// const person = {
//   name: 'Dani',
//   age: 34,
//   location: {
//     city: 'La Coru',
//     temp: 18
//   }
// };

// // const name = persona.name;
// // const age = person.age;

// const { name: firstName = 'Anon', age } = person;


// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (temperature && city) {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;
// console.log('publisherName -> : ' + publisherName);






// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];;
// const [, city, state = 'New York'] = address;

// console.log(`You are ${city} in ${state}`);



const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [type, small, medium, large] = item;
console.log(`A large ${type} costs ${large}`)