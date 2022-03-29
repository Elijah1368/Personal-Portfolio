import {Person, Mail} from "@material-ui/icons";
import "./contact.scss";
import shakeHands from "../../assets/shake.svg";

export default function Contact() {
return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shakeHands} alt="" />
      </div>
      <div className="right">
        <h2>Contact Me :)</h2>
        <div className="itemContainer">
            <Person className="icon"></Person>
            <span>+1 808 393 9687</span>
        </div>
        <div className="itemContainer">
          <Mail className="icon"></Mail>
          <span>elijahamian@outlook.com</span>
        </div>
      </div>
    </div>
  );
}
