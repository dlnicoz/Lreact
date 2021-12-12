const Slot = (props) => {
  const msg = "this is matching";
  const msg1 = "this is not matching";
  let { e1, e2, e3 } = props;
  if (e1 === e2 && e2 === e3) {
    return (
      <div>
        <h2 className="emo1">
          {e1}
          {e2}
          {e3}
        </h2>
        <p className="emo">{msg}</p>
        <hr />
      </div>
    );
  } else {
    return (
      <div>
        <h2 className="emo1">
          {e1}
          {e2}
          {e3}
        </h2>
        <p className="emo">{msg1}</p>
        <hr />
      </div>
    );
  }
};
export default Slot;
