/* import { Link } from "react-router-dom"; */
import { useNavigate } from "react-router-dom";
const Navbar = ({ Link }) => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Marvel", link: "marvel" },
    { name: "DC", link: "dc" },
    { name: "Search Hero", link: "search" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center">
          <img src={require("../assets/favicon.ico")} width="30" alt="" className="mr-3"></img>
          <strong>Heroes App</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            {navLinks.map((item, i) => (
              <Link className="nav-link" key={i} to={"/dashboard/" + item.link}>
                {item.name}
              </Link>
            ))}
          </div>

          <button className="btn btn-danger my-2 my-sm-0" onClick={() => navigate("/")}>
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
