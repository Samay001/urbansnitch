import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import "./style/login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // corrected import
import axios from "axios";
import loginImg from "../../assets/images/registerImg.jpg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      toast.info("Click Again and please wait...");

      const res = await axios.post("https://urbansnitch.onrender.com/api/v1/auth/register", {
        name,
        email,
        password,
        address,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
  
        
      } 
      else {
        toast.error(res.data.message);
      }
    } 
    catch (error) {
      console.error("Error during registration:", error);
      toast.error("Something went wrong ", {
        duration: 3000,
      });
    }
  };

  return (
    <Layout>
      <div
        className="login-container"
        style={{
          backgroundImage: `url(${loginImg})`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
        }}
      >
        <div className="login-form-container bg-light rounded p-4">
          <h2 className="text-center mb-4 ">REGISTER</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                placeholder="Username"
                required
              />
            </div>
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
            <div className="mb-3">
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="form-control"
                placeholder="Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="submit"
                className="btn btn-primary btn-block"
                value="Register Now"
              />
            </div>
          </form>
          <div className="text-center mt-3">
            <p>
              Already have an account? <NavLink to="/login">Login now</NavLink>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
