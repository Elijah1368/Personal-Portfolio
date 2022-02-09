import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id:"design",
      title:"Design",
    },
  ]
  return <div className="portfolio" id="portfolio">
    <h1>Portfolio</h1>
    <ul>
      {list.map((item) => (
        <PortfolioList title={item.title}></PortfolioList>
      ))}
    </ul>
    <div className="container">
      <div className="item">
        <img src="assets/Postbook2.png" alt=""></img>
        <h3>Media App</h3>
      </div>
      <div className="item">
        <img src="assets/Postbook2.png" alt=""></img>
        <h3>Social Media App</h3>
      </div>
      <div className="item">
        <img src="assets/Postbook2.png" alt="social media app"></img>
        <h3>Social Media App</h3>
      </div>
      <div className="item">
        <img src="assets/Postbook2.png" alt="social media app"></img>
        <h3>Social Media App</h3>
      </div>
      <div className="item">
        <img src="assets/Postbook2.png" alt="social media app"></img>
        <h3>Social Media App</h3>
      </div>
      <div className="item">
        <img src="assets/Postbook2.png" alt="social media app"></img>
        <h3>Social Media App</h3>
      </div>
    </div>
  </div>;
}
