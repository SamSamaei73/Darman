import React from "react";
import "../../css/Reaport.css";
import ReaportForm from "./ReaportForm";


export class ComponentToPrint extends React.PureComponent {

    render() {

      return (
        <div className="pirintPage">
          <ReaportForm/>
        </div>
      );
    }
  }
