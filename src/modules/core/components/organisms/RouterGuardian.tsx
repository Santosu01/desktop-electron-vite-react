import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { userAuthKey } from '../../constants/localStorage';
import { stringJsonParser } from '../../utils/stringJsonParser';

const RouterGuardian = () => {
  const user = stringJsonParser(localStorage.getItem(userAuthKey));
  const location = useLocation();

  if (!location?.pathname?.includes('/login') || !user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default RouterGuardian;
