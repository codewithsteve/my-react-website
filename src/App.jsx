import "./app.scss";
import Intro from "./components/intro/Intro";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Experience from "./components/experience/Experience";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Intro />
        <Sidebar />
        <Experience />
      </div>
    </div>
  );
}

export default App;
