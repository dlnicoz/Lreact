const jp = "hello dhiraj mathician";
const Nav = () => {
  return (
    <>
      <p>
        <em>my favroutie </em>
      </p>
    </>
  );
};
let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let divs = (a, b) => {
  let s = a / b;
  return s.toFixed(2);
};
export default Nav;
export { jp, sum, sub, divs, mul };
