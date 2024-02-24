import React from 'react';
import Layout from '../components/layout/layout';
import "./style/success.css";
import { useAuth } from "../context/auth";

const Success = () => {
  const [auth] = useAuth();
  const { user } = auth;
  console.log(user);
  return (
    <Layout>
      <div className="success">
        <h1>Order Placed Successfully</h1>
        {/* Check if user exists before accessing its properties */}
        <p className="fs-5">Thank you {user ? <span style={{ color: "#FFE9A3" }}>{user.name}</span> : "for shopping with us"}. Your order is confirmed and will be delivered soon.</p>
      </div>
    </Layout>
  );
}

export default Success;
