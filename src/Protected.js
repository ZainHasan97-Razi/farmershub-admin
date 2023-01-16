// libraries
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// constants
import { getLocalData, LOCAL_STORAGE_KEYS } from "./lib/helper/localStorage";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const loggedIn = getLocalData(LOCAL_STORAGE_KEYS.login);
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  return children;
};

export default ProtectedRoute;
