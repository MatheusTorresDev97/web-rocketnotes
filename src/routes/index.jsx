import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes"

const Routes = () => {
  const { user } = useAuth()
  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
};

export default Routes;
