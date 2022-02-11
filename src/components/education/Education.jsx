import { useState } from "react";
import "./education.scss";

export default function Education() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/education.png",
      title: "University of Washington Tacoma",
      date: "January 2022 - December 2023",
      desc:
        "B.A. in Computer Science",
      img: "http://www.southsoundtalk.com/wp-content/uploads/2017/12/uwt.jpg  "
    },
    {
      id: "2",
      icon: "./assets/education.png",
      title: "North Seattle College",
      date: "January 2020 - December 2021",
      desc:
        "Computer Science",
      img:
        "https://news.northseattle.edu/sites/newscenter.northseattle.edu/files/default_images/nsc_marquee.jpg",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="education" id="education">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <h5>{d.date}</h5>
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
