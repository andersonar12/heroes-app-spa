import { Route, Routes, Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { DcScreen } from "../views/DcScreen.jsx";
import { HeroScreen } from "../views/HeroScreen.jsx";
import { LoginScreen } from "../views/LoginScreen.jsx";
import { MarvelScreen } from "../views/MarvelScreen.jsx";
import { SearchScreen } from "../views/SearchScreen.jsx";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<LoginScreen />} />
        <Route path="dashboard" element={<LayoutDashboard />}>
          <Route path="dashboard/" element={<MarvelScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="dc" element={<DcScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="heroe/:id" element={<HeroScreen />} />
        </Route>
        <Route path="*" element={<LoginScreen />} />
      </Route>
    </Routes>
  );
}

function LayoutDashboard() {
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
