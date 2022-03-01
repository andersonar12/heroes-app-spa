import Swal from "sweetalert2";
import { useContext } from "react";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext.jsx";
import { DcScreen } from "../views/DcScreen.jsx";
import { HeroScreen } from "../views/HeroScreen.jsx";
import { LoginScreen } from "../views/LoginScreen.jsx";
import { MarvelScreen } from "../views/MarvelScreen.jsx";
import { SearchScreen } from "../views/SearchScreen.jsx";
import { LayoutDashboard } from "./LayoutDashboard.jsx";

export function AppRouter() {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route index element={<PublicRoute user={user} />} />
        <Route path="dashboard" element={<PrivateRoute user={user} />}>
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

function PrivateRoute({ user }) {
  if (!user.logged) {
    Swal.fire({
      icon: "error",
      title: "Acceso no Autorizado",
      text: "Debes iniciar sesion en la plataforma!",
    });
    return <Navigate to="/" />; //Si no esta logueado redirige al usuario al login
  }

  return <LayoutDashboard />;
}

function PublicRoute({ user }) {
  return user.logged ? <Navigate to="/dashboard/marvel" /> : <LoginScreen />;
}
