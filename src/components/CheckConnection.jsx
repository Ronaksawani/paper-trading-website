import React from "react";
import { Detector } from "react-detect-offline";
import noInternet from "../assets/images/wi-fi-disconnected.png";

const CheckConnection = (props) => {
  return (
    <Detector
      render={({ online }) => {
        return online ? (
          props.children
        ) : (
          <div
            style={{
              marginTop: "15%",
              display: "flex",
              flexDirection: "column",
              height: "100%",
              width: "100%",
              alignItems: "center",
            }}
          >
            <img src={noInternet} alt="No internet connection" width={"10%"} />
            <h4>Please check your internet connection</h4>
          </div>
        );
      }}
    />
  );
};

export default CheckConnection;
