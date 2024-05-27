import { useDispatch, useSelector } from "react-redux";
import { setAuth, clearAuth } from "../redux/slices/authSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const login = async ({ email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        { email, password }
      );
      console.log("use Auth login", response);
      const token = response.data?.token ?? null;
      const user = response.data?.user ?? null;
      dispatch(setAuth({ token, user }));
      navigate("/dashboard");
    } catch (error) {
      throw error;
    }
  };

  const register = async ({ name, email, password }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/register",
        { name, email, password }
      );
      const { token, user } = response.data;
      dispatch(setAuth({ token, user }));
      navigate("/dashboard");
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    dispatch(clearAuth());
    navigate("/login");
  };

  return {
    auth,
    login,
    register,
    logout,
  };
};

export default useAuth;
