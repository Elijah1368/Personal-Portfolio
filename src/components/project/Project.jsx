import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./project.scss";
import {
  javaBattleShipGame,
  ninjaFrogWebGame,
  postbookSocialMediaApp,
  theOfficeQuoteGenerator,
} from "../../data";

export default function Project() {
  const [selected, setSelected] = useState("socialMediaApp");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "socialMediaApp",
      title: "Fullstack Social Media App",
    },
    {
      id: "javascriptGame",
      title: "Javascript Video Game",
    },
    {
      id: "quoteGenerator",
      title: "ReactJS Quote Generator",
    },
    {
      id: "javaBattleship",
      title: "Battleship vs AI",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "socialMediaApp":
        setData(postbookSocialMediaApp);
        break;
      case "javascriptGame":
        setData(ninjaFrogWebGame);
        break;
      case "javaBattleship":
        setData(javaBattleShipGame);
        break;
      case "quoteGenerator":
        setData(theOfficeQuoteGenerator);
        break;
      default:
        setData(postbookSocialMediaApp);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank">
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <div className="text">
            <h3>{d.title}</h3>
            <h4>{d.description}</h4>
            <h6>(click for source code)</h6>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}
