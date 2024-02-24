import React from "react";
import Layout from "./../components/layout/layout.js";
import aboutImg from "../assets/images/aboutImg.jpg";
import "./style/about.css";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 aboutImg">
          <img
            loading="lazy"
            src={aboutImg}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 aboutText">
          <h1 className="text-center headline">ABOUT US</h1>
          <p className="text-justify mt-2 text-white ">
          Welcome to Urban Snitch, where style meets street smarts! We're your go-to destination for trendsetting urban fashion that's as bold and vibrant as the city streets. At Urban Snitch, we believe in clothing that doesn't just make a statement, but starts a conversation.

          Join the Urban Snitch family today and let your style do the talking. Shop now and elevate your wardrobe to new heights!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;