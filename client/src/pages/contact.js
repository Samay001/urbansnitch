import React from "react";
import Layout from "./../components/layout/layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "./style/contact.css";
import contactImg from "../assets/images/contactImg.jpg";

const Contact = () => {
  return (
    <Layout title={"Contact us"}>
      <div className="row contactus ">
        <div className="col-md-6 contactImg">
          <img
            loading="lazy"
            src={contactImg}
            alt="contactus"
          />
        </div>
        <div className="col-md-4">
          <h1 className=" headline text-center">CONTACT US</h1>
          <p className="text-justify mt-2 text-white content">
            Any query and info about product feel free to call anytime we 24X7
            available for our clients.
          </p>
          <p className="mt-3 text-white">
            <BiMailSend /> : www.help@urbansnitch_support.com
          </p>
          <p className="mt-3 text-white">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3 text-white ">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;