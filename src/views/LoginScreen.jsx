import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <div style={{ backgroundColor: "#1c1c1c", height: "100vh" }}>
      <div className="container-fluid h-100 animate__animated animate__fadeInUp">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-5">
            <img src={require("../assets/react.png")} />
            <h1 className="text-white">
              <strong>Welcome to Heroes App</strong>
            </h1>

            <Link className="btn btn-info" to="/dashboard/marvel">
              Iniciar Aplicacion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
