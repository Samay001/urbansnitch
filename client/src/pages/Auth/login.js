import React,{useState} from "react";
import Layout from "../../components/layout/layout";
import './login.css';
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../../context/auth";

const Login = () => {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [auth,setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Login</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} >
                  <div className="form-group">
                    <input
                      type="email"
                      autofocus
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="exampleInputEmail1"
                      className="form-control"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Your Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      className="btn btn-primary btn-block"
                      value="Login "
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
