import React from "react";
import Img from "../../Images/Error.png";

const Error = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#fff",
      }}
    >
      <img src={Img} alt="" />
      <h1
        style={{
          fontWeight: "500",
          fontSize: "1rem",
          textAlign: "center",
          marginTop: "2rem",
          color: "royalblue",
        }}
      >
        Looks like the data took a day off. <br /> Can you check back later?
      </h1>
    </div>
  );
};

export default Error;
