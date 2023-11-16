import { BrowserRouter } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
};

export default Routes;
