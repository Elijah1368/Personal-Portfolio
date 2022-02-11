import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Project from "./components/project/Project";
import Topbar from "./components/topbar/Topbar";
import Education from "./components/education/Education";
import "./App.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">

      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Project/>
        <Education/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
