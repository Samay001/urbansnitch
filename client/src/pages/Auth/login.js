import React,{useState} from "react";
import Layout from "../../components/layout/layout";
import './style/login.css';
import axios from "axios";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";
import loginImg from "../../assets/images/loginImg.jpg";

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [auth,setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
          username: res.data.user.name,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } 
      else {
        toast.error(res.data.message);
      }
    } 
    catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div
        className="login-container"
        style={{ backgroundImage: `url(${loginImg})` }}
      >
          <div className="login-form-container bg-light rounded p-4">
            <h2 className="text-center mb-4 ">LOGIN</h2>
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
            <div className="text-center mt-3">
              Didn't have an account<NavLink to="/register">.Signup</NavLink>
            </div>
          </div>
        </div>
    </Layout>
  );
};

export default Login;
