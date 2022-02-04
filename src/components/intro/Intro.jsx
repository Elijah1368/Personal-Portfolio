import "./intro.scss";

export default function Intro() {
  return <div className="intro" id="intro">
    <div className="left">
      <div className="imgContainer">
        <img src="assets/man.png"></img>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
        <h2>Hi There, I'm</h2>
        <h1>Elijah Amian</h1>
        <h3><span>Third Year Computer Science Major <br></br>at University of Washington</span></h3>
      </div>
      <a href="#portfolio">
        <img src="assets/down.png" alt=""></img>
      </a>
    </div>
  </div>;
}
