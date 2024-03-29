// Your JavaScript goes here
const button = document.querySelector('button')
const body = document.body

button.addEventListener('click', (_) => {
  body.classList.toggle('offsite-is-open')
})

//  FOR...OF LOOP

const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]
let array = []
// for (const num of numbers) {
//   if (num > 10) {
//     array.push(num)
//   }
// }

for (const num of numbers) {
  array.push(num * 5)
}
console.log(array)

// .foreach() loop

const people = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
  { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
  { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 },
]

let firstNames = []
people.forEach((person) => {
  firstNames.push(person.firstName)
})

console.log(firstNames)

let tod = []
people.forEach((person) => {
  if (person.yearOfDeath > 1950) {
    tod.push(person)
  }
})

let darwinIndex = -1
people.forEach((person, index) => {
  if (person.lastName === 'Darwin') {
    darwinIndex = index
  }
})
console.log(darwinIndex)
