import { Route, redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
      {() =>
        props.loggedIn ? <Component {...props} /> : redirect("/sign-in")
      }
    </Route>
  );
};

export default ProtectedRoute;
