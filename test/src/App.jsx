import { useState } from "react";

function App() {
  const [fullname, setfullname] = useState({
    fname: "",
    lname: "",
    femail: "",
    fnum: "",
  });

  const Inop = (event) => {
    const { value, name } = event.target;
    //const name = event.target.name;
    //console.log(name);
    setfullname((preValue) => {
      //console.log(...preValue);
      //console.log([name]);
      //const naoo = [...preValue];
      console.log(preValue);
      return {
        ...preValue,
        [name]: value,
      };
      //console.log(preValue);

      //if (name === "fname") {
      //return {
      //fname: value,
      //lname: preValue.lname,
      //femail: preValue.femail,
      //fnum: preValue.fnum,
      //};
      //} else if (name === "lname") {
      //return {
      //fname: preValue.fname,
      //lname: value,
      //femail: preValue.femail,
      //fnum: preValue.fnum,
      //};
      //} else if (name === "femail") {
      //return {
      //fname: preValue.fname,
      //lname: preValue.lname,
      //femail: value,
      //fnum: preValue.fnum,
      //};
      //} else if (name === "fnum") {
      //return {
      //fname: preValue.fname,
      //lname: preValue.lname,
      //femail: preValue.femail,
      //fnum: value,
      //};
      //}
    });
  };

  const Onsubmits = (event) => {
    event.preventDefault();
    alert("submit");
  };

  return (
    <>
      <div className="main1">
        <form onSubmit={Onsubmits}>
          <div className="div1">
            <p>
              hi {fullname.fname} {fullname.lname}
            </p>
            <h3>{fullname.femail}</h3>
            <h3>{fullname.fnum}</h3>
            <input
              type="text"
              className="in"
              name="fname"
              onChange={Inop}
              placeholder="Enter your nickname"
              value={fullname.fname}
            />
            <input
              type="text"
              className="in"
              name="lname"
              onChange={Inop}
              placeholder="Enter your password"
              value={fullname.lname}
            />

            <input
              type="email"
              className="in"
              name="femail"
              onChange={Inop}
              placeholder="Enter your email"
              value={fullname.femail}
            />
            <input
              type="number"
              className="in"
              name="fnum"
              onChange={Inop}
              placeholder="Enter your number"
              value={fullname.fnum}
            />
            <button type="submit">click me</button>
          </div>
        </form>
      </div>
    </>
  );
}
export default App;
