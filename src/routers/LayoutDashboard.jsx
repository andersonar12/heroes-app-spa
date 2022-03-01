import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export function LayoutDashboard() {
  return (
    <div className="animate__animated animate__fadeIn">
      <Navbar Link={Link} />
      <div className="container">
        <div className="row">
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
