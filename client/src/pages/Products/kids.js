import React from 'react';
import Layout from '../../components/layout/layout';
import NewArrival from '../../components/layout/newArrival';
import ProductBox from '../../components/layout/productBox';
import { kidsProducts } from './kidsProduct';

const Kids = () => {

  return (
    <Layout>
      <div className="container my-4">
        <NewArrival />
        <div className="row">
          {kidsProducts.map((product) => (
            <div key={product.id} className="col-md-3">
              <ProductBox product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Kids;
