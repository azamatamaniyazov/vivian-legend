import useAuth from "../../../hooks/useAuth";
import AuthForms from "./auth/AuthForms";
import Dashboard from "./dashboard/Dashboard";

function UserPanel() {
  const auth = useAuth();

  return <>{auth.isAuth ? <Dashboard /> : <AuthForms />}</>;
}

export default UserPanel;
