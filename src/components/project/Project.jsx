import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./project.scss";
import gameShow from "../../assets/snip1.png";
import ninjaFrog from "../../assets/NinjaFrog.png";
import officeQuote from "../../assets/OfficeQuotes2.png";
import battleShip from "../../assets/battleship.png";

import {
  javaBattleShipGame,
  ninjaFrogWebGame,
  gameShowApp,
  theOfficeQuoteGenerator,
} from "../../data";

export default function Project() {
  const [selected, setSelected] = useState("socialMediaApp");
  const [data, setData] = useState([]);
  const [image, setImage] = useState(gameShow);
  const list = [
    {
      id: "gameShowApp",
      title: "Game Show App",
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
      case "gameShowApp":
        setData(gameShowApp);
        setImage(gameShow);
        break;
      case "javascriptGame":
        setData(ninjaFrogWebGame);
        setImage(ninjaFrog);
        break;
      case "javaBattleship":
        setData(javaBattleShipGame);
        setImage(battleShip);
        break;
      case "quoteGenerator":
        setData(theOfficeQuoteGenerator);
        setImage(officeQuote);
        break;
      default:
        setData(gameShowApp);
        setImage(gameShow);
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
              src= {image}
              alt=""
            />
            <div className="text">
            <h3>{d.title}</h3>
            <h4>{d.description}</h4>
            <h5>(Click To Try App!)</h5>
            </div>
          </div>
          </a>
        ))}
      </div>
    </div>
  );
}
