const fullname = require ('./names');
const hobbies = require ('./hobbies');


//Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto

const property = () => {
  return{
    fullname: fullname('Carlo','Rossi'),
    hobbies: hobbies('games','bike','codinng')
  }
}

console.log(property());