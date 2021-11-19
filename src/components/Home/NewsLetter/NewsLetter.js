import React from "react";

const NewsLetter = () => {
  return (
    <div className="history-card py-3">
      <div className="row w-75 mx-auto ">
        <div className="col-md-6 col-12">
          <img className="img-fluid" src="https://i.ibb.co/JQVn8qQ/free-trial-img.png" alt="" />
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
          <div>
            <h2>Start your free trial</h2>
            <div className="my-3">
              <input
                placeholder="Enter your business here"
                style={{ background: "#0E314C", color: "#fff", padding: "16px", border: "none", width: "380px", borderRadius: "30px 0 0 30px" }}
              />
              <button
                style={{ background: "#44CE6F", border: "none", padding: "16px 50px", color: "#fff", borderRadius: "0 30px 30px 0" }}
                className="my-2 my-md-0 btn"
              >
                Button
              </button>
            </div>

            <p>
              <small>Test out the Machine Learning features for 14 days, no credit card required.</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
