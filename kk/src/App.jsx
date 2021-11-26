import * as p from "./Nav";
//import Nav11 from "./Nav1";
function App1() {
  return (
    <>
      <h1>{p.jp}</h1>
      <ol>
        <li>sum of two numbers is ={p.sum(13, 23)}</li>
        <li>sub of two numbers is ={p.sub(43, 21)}</li>
        <li>mul of two numbers is ={p.mul(3, 12)}</li>
        <li>div of two numbers is ={p.divs(16, 3)}</li>
      </ol>
    </>
  );
}

export default App1;
