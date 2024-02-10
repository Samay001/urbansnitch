import React from "react";
import Layout from "../../components/layout/layout";
import ProductBox from "../../components/layout/productBox";
import NewArrival from "../../components/layout/newArrival";
import { femaleProducts } from "./femaleProducts";

const Female = ({addToCart}) => {
  return (
    <Layout>
      <div className="container my-4">
        <NewArrival />
        <div className="row">
          {femaleProducts.map((product) => (
            <div key={product.id} className="col-md-3">
              <ProductBox product={product} addToCart={addToCart} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Female;
