import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import './register.css';
import { NavLink, useNavigate } from "react-router-dom";
import  toast  from 'react-hot-toast';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        address,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      } 
      else {
        toast.error(res.data.message);
      }
    } 
    catch (error) {
      console.error('Error during registration:', error);
      toast.error("Something went wrong ", {
        duration: 3000,
      });
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Registration</h2>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                      placeholder="Create password"
                      required
                    />
                  </div>
                  <div className="form-group">
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
                  <div className="text-center">
                    <p>
                      Already have an account?{' '}
                      <NavLink to="/login">Login now</NavLink>
                    </p>
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

export default Register;
