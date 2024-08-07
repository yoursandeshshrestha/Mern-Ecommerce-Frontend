import React from "react";
import "./Home.css";
import Product from "../../Components/Product/Product";

function Home() {
  return (
    <>
      <div className="Home">
        <h3 className="Title">New Arrivals</h3>
        <div className="Home-Options">
          <p>Men Collection</p>
          <p>Women Collection</p>
        </div>
      </div>
      <Product />
    </>
  );
}

export default Home;
