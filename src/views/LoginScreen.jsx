import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { AuthContext } from "../auth/AuthContext.jsx";

export const LoginScreen = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const location = useLocation();
  const loginUser = () => {
    dispatch({ type: "login", payload: { name: "Anderson" } });
    const path = location.state ?? "/dashboard/marvel";
    navigate(path);
  };
  return (
    <div style={{ backgroundColor: "#1c1c1c", height: "100vh" }}>
      <div className="container-fluid h-100 animate__animated animate__fadeInUp">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-5">
            <img src={require("../assets/react.png")} alt="..." />
            <h1 className="text-white">
              <strong>Welcome to Heroes App</strong>
            </h1>

            <button className="btn btn-info" type="button" onClick={() => loginUser()}>
              Iniciar Aplicacion
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
