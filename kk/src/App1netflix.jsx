import Ndata from "./NetflixData";
import Ncard from "./Netflix";
function App2() {
  return (
    <>
      <h1 className="heading">this is dheeraj choice</h1>
      {Ndata.map((val) => {
        return (
          <Ncard
            key={val.key}
            imgsrc={val.img}
            title={val.title}
            link={val.link}
            sname={val.sname}
          />
        );
      })}
    </>
  );
}

export default App2;
