import "../../../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import React from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loaderbar = () => {
  return (
    <div className="mt-5">
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
    </div>
  );
}


export default Loaderbar;