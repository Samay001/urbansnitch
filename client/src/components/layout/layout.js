import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Toaster} from "react-hot-toast";


const Layout = ({ children }) => {
 
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" ,overflowY: "hidden",overflowX: "hidden",backgroundColor:"#013a34"}}>
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
