import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <a href="#intro">steve.</a>
          </div>
        </div>

        <div className="right">
          <div className="ham">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
