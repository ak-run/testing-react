//Functions
export default function DoSomething1() {
console.log("Hello, World!")
};

//better
export const DoSomething2 = () => {
console.log("Hello, World!")
};

//Anonymous functions
const MyButton  = () => {
  <>
    <button onClick={DoSomething}>
      Click me
    </button>
    {/* or anonymous function, this means we don't have to always declare function and it's used a lot in React */}
    <button onClick={()=>{
    console.log("hello")
    }}
    >
      Click Me
    </button>;
  </>
}

//Ternary operator
let age1 = 22;
let name1 = age > 10 && Pedro;
//This means if age is greater than 10 then name is Pedro
let name2 = age < 10 || Pedro;
//This means if age is not smaller than 10 then name is Pedro
let name3 = age > 10 ? "Pedro" : "Jack";
//This means if age is greater than 10 the name is Pedro, else it's Jack

const Component = () => {
  return age > 10 ? <div>Pedro</div> : <div>Jack</div>;
}

//object
const person = {
  name: "Agata",
  age: 35,
  isMarried: true,
};

//destructuring property of objects, creating 3 different varriables at once
const { name, age, isMarried } = person;

//you can also do this
const animalType = "hamster";
const animalName = "chips";
const animalAge = 2

//then turn it into objects
const animal = {
  animalType, //same as animalType: animalType
  animalName,
  animalAge,
}

//now let's create an animal2 that's the same as animal, but with a different name
//we'll use spread operator ...
const animal2 = {...person, animalName: "bunny"};

//it works the same with arrays, this is important for states
const names = ["Agata", "Ola", "Ross"];
const names2 = [...names, "Ahmed"];

//3 important functions of JS arrays .map, .filter, .reduce
//map
let names3 = ["Agata", "Ola", "Ross"];
//well iterate over each ellement of this array and execute a code over each element inside the curly brackets of the anonymous function
//'name' represents each element
names3.map((name) => {
  console.log(name);
});
//to change every element
names3.map((name) => {
  return name + "1";
});
//to turn each element into HTML element
names3.map((name) => {
  return <h1>{name}</h1>
});
//filter function to remove elements from an array, in this instance "Agata"
let names4 = ["Agata", "Agata", "Ola", "Ross", "Agata"];
names4.filter ((name) => {
  return name !== "Agata";
})

//Async, Await, Fetch - important for API, separate video on that