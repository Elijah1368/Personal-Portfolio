import "./intro.scss";
import {init} from 'ityped';
import { useEffect, useRef } from "react";
import me from "../../assets/me.png";

export default function Intro() {
  const textRef = useRef();
  
  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      typeSpeed: 40, backSpeed: 20,
      backDelay: 1500,
      strings: ['Third Year Computer Science Major at University of Washington', 'Self-taught Web Developer' ] });
  },[]);

  return <div className="intro" id="intro">
    <div className="left"> 
      <div className="container">
        <img src={me}></img>
      </div>
    </div>
    <div className="right">
      <div className="wrapper">
  
          <h2>Hi There, I'm</h2>
          <h1>Elijah Amian</h1>
     
       
          <h3><span ref={textRef}></span></h3>
       
      </div>
      <a href="#portfolio">
        <img src="assets/down.png" alt=""></img>
      </a>
    </div>
  </div>;
}
