import "./menu.scss";
import { Link } from "react-router-dom";

export default function Menu({ menuOpen, setMenuOpen }) {
  const handleClick = (link) => () => {
    window.location.href = link;
    setMenuOpen(false);
  };
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <div className="item1" onClick={handleClick("#intro")}>
        <h3>Home</h3>
      </div>

      <div className="item2" onClick={handleClick("#experience")}>
        <h3>Experience</h3>
      </div>
    </div>
  );
}
