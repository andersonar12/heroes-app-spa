import { useEffect, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./auth/AuthContext.jsx";
import { authReducer } from "./auth/authReducer.js";
import { AppRouter } from "./routers/AppRouter.jsx";

const init = () => JSON.parse(localStorage.getItem("user")) || { logged: false };
export const App = () => {
  const [user, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => localStorage.setItem("user", JSON.stringify(user)), [user]);
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ user, dispatch }}>
        {/* user y el dispatch se distribuira el AuthContext  */}
        <AppRouter />
      </AuthContext.Provider>
    </BrowserRouter>
  );
};
