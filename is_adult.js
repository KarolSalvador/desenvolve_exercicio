//Crie uma função que recebe um objeto person e retorna um novo objeto, com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

const person = {
  name: "Karol",
  age: 33,
};

function checkAge(person) {
  if (person.age >= 18) {
    return { ...person, isAdult: true };
  } else {
    return { ...person, isAdult: false };
  }
}

console.log(checkAge(person));
