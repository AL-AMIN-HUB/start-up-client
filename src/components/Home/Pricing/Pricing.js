import React, { useState } from "react";
import "./Pricing.css";
import "../Yearly/Yearly";
import Yearly from "../Yearly/Yearly";
import Monthly from "../Monthly/Monthly";

const Pricing = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="my-5 py-5">
      <div>
        <div className="text-center pb-5">
          <p style={{ background: "#F5DFFD", width: "150px", borderRadius: "30px" }} className=" py-1 px-2 mx-auto">
            <small>Pricing plan</small>
          </p>
          <h2>Our Pricing Plan</h2>
          <div className="serviceLine">
            <div className="lineAnimation"></div>
          </div>
          <p className="text-muted">
            A price plan is a set of instructions that computes the amount of a charge. <br /> A price plan is represented by a rating tree.
          </p>
        </div>
        <div className="text-center pb-5 mb-4">
          <button autoFocus onClick={() => toggleTab(1)} className="button1">
            Monthly Plan
          </button>

          <button onClick={() => toggleTab(2)} className="button2">
            Yearly Plan
          </button>
        </div>
        <div className="container mx-auto">
          <div className={toggleState === 1 ? "content  active-content" : "content"}>
            <Monthly />
          </div>
          <div className={toggleState === 2 ? "content  active-content" : "content"}>
            <Yearly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
