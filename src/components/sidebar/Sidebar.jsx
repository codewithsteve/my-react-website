import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="imgContainer">
        <img
          src="https://avatars.githubusercontent.com/u/77884096?v=4"
          alt=""
        />
      </div>
      <div className="name">
        <h3>Steve Dzakpasu</h3>
      </div>
      <div className="details">
        <div className="left">
          <h4>Location</h4>
          <h4>Phone Number</h4>
          <h4>Email</h4>
          <h4>Github</h4>
          <h4>Linkedin</h4>
          <h4> Spoken Languages</h4>
          <h4>Skills</h4>
        </div>
        <div className="right">
          <h4>Accra, Ghana</h4>
          <h4> +233 27 677 2148</h4>
          <h4>steve.dzakpasu@gmail.com</h4>
          <h4>
            <a href="https://github.com/codewithsteve" target="_blank">
              codewithsteve
            </a>
          </h4>
          <h4>
            {" "}
            <a
              href="https://www.linkedin.com/in/stephen-dzakpasu-32838a18b/"
              target="_blank"
            >
              Stephen Dzakpasu
            </a>
          </h4>
          <h4>English, French</h4>
          <h4>Python, Javascript</h4>
        </div>
      </div>
    </div>
  );
}
