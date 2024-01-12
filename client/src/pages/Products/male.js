import React from "react";
import Layout from "../../components/layout/layout";
import ProductBox from "../../components/layout/productBox";
import NewArrival from "../../components/layout/newArrival";
import image1 from "../../assets/productImages/maleProducts/mP1.webp";
import image2 from "../../assets/productImages/maleProducts/mP2.jpeg";
import image3 from "../../assets/productImages/maleProducts/mP3.jpeg";
import image4 from "../../assets/productImages/maleProducts/mP4.webp";
import image5 from "../../assets/productImages/maleProducts/mP5.jpeg";
import image6 from "../../assets/productImages/maleProducts/mP6.jpeg";
import image7 from "../../assets/productImages/maleProducts/mP7.jpeg";
import image8 from "../../assets/productImages/maleProducts/mP8.jpeg";
import image9 from "../../assets/productImages/maleProducts/mP9.jpeg";
import image10 from "../../assets/productImages/maleProducts/mP10.jpeg";
import image11 from "../../assets/productImages/maleProducts/mP11.jpeg";
import image12 from "../../assets/productImages/maleProducts/mP12.jpeg";

const Male = () => {
  const products = [
    { id: 1, name: "Product 1", description: "Description 1", price: 20.99, image: image1 },
    { id: 2, name: "Product 2", description: "Description 2", price: 25.99, image: image2 },
    { id: 3, name: "Product 3", description: "Description 3", price: 30.99, image: image3 },
    { id: 4, name: "Product 4", description: "Description 4", price: 35.99, image: image4 },
    { id: 5, name: "Product 5", description: "Description 5", price: 20.99, image: image5 },
    { id: 6, name: "Product 6", description: "Description 6", price: 25.99, image: image6 },
    { id: 7, name: "Product 7", description: "Description 7", price: 30.99, image: image7 },
    { id: 8, name: "Product 8", description: "Description 8", price: 35.99, image: image8 },
    { id: 9, name: "Product 9", description: "Description 9", price: 20.99, image: image9 },
    { id: 10, name: "Product 10", description: "Description 10", price: 25.99, image: image10 },
    { id: 11, name: "Product 11", description: "Description 11", price: 30.99, image: image11 },
    { id: 12, name: "Product 12", description: "Description 12", price: 35.99, image: image12 },
  ];

  return (
    <Layout>
      <div className="container my-4">
        <NewArrival />
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3">
              <ProductBox product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Male;
