import React from "react";
import "./style/home.css";
import Layout from "../components/layout/layout";
import homeImg from "../assets/images/homeee1.jpg";
import maleImg from "../assets/images/maleeImg.jpg";
import femaleImg from "../assets/images/femaleeImg.jpg";
import kidsImg from "../assets/images/kidssImg.jpg";


const Home = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <span className="col-md-6 borderr heading">
            <h1>ELEVATE YOUR </h1>
            <h1 className="everyday">EVERYDAY </h1>
            <h1>WARDROBE </h1>
          </span>
          <span className="col-md-6 img">
            <img src={homeImg} alt="home1" className="my-image img-fluid" />
          </span>
        </div>
      </div>

      <div className="container2">
        <div className="heading2">
            <h1>TRENDY COLLECTION</h1>
        </div>
        <div className="row wrapper">
          <div className="col-md-6 femaleImg">
            {/* <div className="img-overlay">WOMEN'S FASION</div> */}
            <img src={femaleImg} alt="female" className="img-fluid dull-img" />
          </div>
          <div className="col-md-6">
            <div className="row subWrapper">
              <div className="col-md-12 maleImg">
                <img src={maleImg} alt="male" className="img-fluid dull-img" />
              </div>
              <div className="col-md-12 kidsImg">
                <img src={kidsImg} alt="kids" className="img-fluid dull-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
