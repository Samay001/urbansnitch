import React from "react";
import Layout from "../components/layout/layout";
import Banner from "../components/layout/banner";
import { NavLink } from "react-router-dom";

const discountBanner = "/images/discountBanner.webp";
const maleBanner = "/images/maleBanner.jpg";
const femaleBanner = "/images/femaleBanner.avif";

const Home = () => {
  const buttonStyle = {
    position: "absolute",
    bottom: "60px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    color: "black",
    fontWeight: 600,
    zIndex: 1,
    border: "1px solid black",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "10px",
  };

  return (
    <Layout>
      {/* Discount Banner */}
      <Banner
        imageUrl={discountBanner}
        altText="Discount Banner"
        text={"Special Discount"}
      />

      {/* Male Section Banner */}
      <div style={{ position: "relative" }}>
        <Banner
          imageUrl={maleBanner}
          altText="Male Section Banner"
          text="New Arrivals"
        />
        <NavLink to="/male">
          <button style={buttonStyle}>Male</button>
        </NavLink>
      </div>

      {/* Female Section Banner */}
      <div style={{ position: "relative" }}>
        <Banner
          imageUrl={femaleBanner}
          altText="Female Section Banner"
          text="New Arrivals"
        />
        <NavLink to="/female">
          <button style={buttonStyle}>Female</button>
        </NavLink>
      </div>

    </Layout>
  );
};

export default Home;
