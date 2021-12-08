hello = function () {
  return a - b;
};

//after
hello = () => a - b;

//with parameters
{
  hello = (name, car) => name - car;
  console.log(hello(12, 16));
}

const vehicles = ["mustang", "f-150", "expedition"];

// old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
//new way destructing
const vehicles = ["mustang", "f-150", "expedition"];
const [car, truck, suv] = vehicles;

//now spread operator
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

//spread plus destructing
const numbers = [1, 2, 3, 4, 5, 6];
const [one, two, ...rest] = numbers;

//ternary operatorr
if (authenticated) {
  renderApp();
} else {
  renderLogin();
}
//new way
authenticated ? renderApp() : renderLogin();
