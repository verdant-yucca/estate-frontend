import { Route, Redirect } from "react-router-dom";
import './ProtectedRoute.css';

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        <Component {...props} />
      }
    </Route>
  );
};

export default ProtectedRoute;
