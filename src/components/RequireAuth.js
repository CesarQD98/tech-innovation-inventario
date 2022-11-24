import { Navigate, useLocation } from "react-router-dom";
import { useAuthContext } from "../context/AuthProvider"

function RequireAuth({ children }) {
  const auth = useAuthContext();
  const location = useLocation();

  // console.log(auth);

  if (!auth.user) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return (
    <div>RequireAuth</div>
  )
}

export default RequireAuth