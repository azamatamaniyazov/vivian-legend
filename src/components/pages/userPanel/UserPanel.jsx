import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import AuthForms from "./auth/AuthForms";
import Dashboard from "./dashboard/Dashboard";

function UserPanel() {
  const auth = useAuth();

  return (
    <>
      <AuthForms />
      {/* {auth.token ? <Dashboard /> : null} */}
    </>
  );
}

export default UserPanel;
