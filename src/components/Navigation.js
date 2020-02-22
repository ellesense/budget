import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link to="/" className="item">
          <h1 style={{ marginTop: "19px" }}>THE BUDGET</h1>
        </Link>
        <Link to="/" className="item">
          <h3>LIST</h3>
        </Link>
        <Link to="/visual" className="item">
          <h3>VISUALIZE</h3>
        </Link>
        <Link to="/about" className="item">
          <h3>ABOUT</h3>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
