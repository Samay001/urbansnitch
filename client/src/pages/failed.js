import React from 'react';
import Layout from '../components/layout/layout';
import "./style/success.css";

const Failed = () => {
  return (
    <Layout>
      <div className="success">
        <h1>Oops! Payment Declined</h1>
        <p className="fs-5">We're sorry, but it seems your payment was declined. Please try again later.</p>
      </div>
    </Layout>
  );
}

export default Failed;
