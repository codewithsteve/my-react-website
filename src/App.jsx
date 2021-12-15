import "./app.scss";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Experience from "./components/experience/Experience";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Sidebar />
        <Experience />
      </div>
    </div>
  );
}

export default App;
