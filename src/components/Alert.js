import React from "react";

const Alert = ({ visibility, msg }) => {
  return (
    <div style={{ visibility: visibility }}>
      <div className="ui floating red message">
        <p>{msg}</p>
      </div>
    </div>
  );
};

export default Alert;
