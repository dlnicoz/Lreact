import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let myctime = new Date().toLocaleTimeString();
  const [mystime, setCount] = useState(myctime);
  useEffect(() => {
    const timer = setInterval(() => {
      let mytime = new Date().toLocaleTimeString();
      setCount(mytime);
    }, 4000);
    return () => clearInterval(timer);
  });
  return (
    <div className="App">
      <header className="App-header">
        <p>{mystime}</p>
        <p>
          <button type="button" onClick={useEffect}>
            Refresh time
          </button>
        </p>
      </header>
    </div>
  );
}
export default App;
