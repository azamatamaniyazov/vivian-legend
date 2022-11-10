import { useSelector } from "react-redux";

function useAuth() {
  const { id, token } = useSelector((state) => state.user);

  return {
    isAuth: !!token,
    id,
    token,
  };
}

export default useAuth;
