import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar() {
  return <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            genius.
          </a>
          <Person></Person>
          <div className="itemContainer">
          
          </div>
        </div>
        <div>
          Hello
        </div>
        <div className="right">
          this is right
        </div>
      </div>
  </div>;
}
