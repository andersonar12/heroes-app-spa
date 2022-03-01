import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.jsx";
const Navbar = ({ Link }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user, dispatch } = useContext(AuthContext);
  const navLinks = [
    { name: "Marvel", link: "marvel" },
    { name: "DC", link: "dc" },
    { name: "Search Hero", link: "search" },
  ];

  const logout = () => {
    dispatch({ type: "logout" });
    navigate("/", { state: pathname }); //guardamos en el state del router la ultima pagina visitada
  };

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

          <p className="nav-link text-info mb-0">{user["name"]}</p>
          <button className="btn btn-danger my-2 my-sm-0" onClick={() => logout()}>
            Salir
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
