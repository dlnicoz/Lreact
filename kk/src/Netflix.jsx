function Ncard(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img className="card_img" src={props.imgsrc} alt="this is image" />
          <div className="card_info">
            <span className="card_categroy">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} className="card_link" target="_blank">
              <button>Watch Me</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ncard;
