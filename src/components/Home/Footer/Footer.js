import React from "react";

const Footer = () => {
  const facebook = {
    href: "https://www.facebook.com/profile.php?id=100036840630119",
    target: "_blank",
  };
  const github = {
    href: "https://github.com/AL-AMIN-HUB",
    target: "_blank",
  };
  const instagram = {
    href: "https://www.instagram.com/alaminkhan852/",
    target: "_blank",
  };
  const linkedin = {
    href: "https://www.linkedin.com/in/al-amin201/",
    target: "_blank",
  };
  const bg = {
    backgroundImage: "url(https://i.ibb.co/bJSFRVb/map.png)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    padding: "100px 0 50px 0",
  };
  return (
    <div>
      <div style={{ ...bg, color: "#6D8FAC", cursor: "pointer" }} className="row container mx-auto">
        <div className="col-md-3 col-6">
          <div>
            <img
              className="img-fluid"
              style={{ width: "120px" }}
              src="https://i.ibb.co/s6NYJLP/26-Able-to-Survive-during-the-Pandemic-Investors-Aim-for-Local-Startups-removebg-preview.png"
              alt=""
            />
            <p style={{ textAlign: "justify" }}>
              <small>
                To keep up with the requirements of the job, the entrepreneur has to know something of everything. This can be accomplished by being
                involved with the right people who’ve had enough practice and excellent work experience,
              </small>
            </p>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <h4 className="text-dark ">Company</h4>
          <li className="list-unstyled mt-2">About us</li>
          <li className="list-unstyled mt-2">Features</li>
          <li className="list-unstyled mt-2">Services</li>
          <li className="list-unstyled mt-2">Our Pricing</li>
          <li className="list-unstyled mt-2">Latest News</li>
        </div>
        <div className="col-md-3 col-6">
          <h4 className="text-dark">Support</h4>
          <li className="list-unstyled mt-2">FAQ's</li>
          <li className="list-unstyled mt-2">Privacy Policy</li>
          <li className="list-unstyled mt-2">Terms & Condition</li>
          <li className="list-unstyled mt-2">Team</li>
          <li className="list-unstyled mt-2">Contact Us</li>
        </div>
        <div className="col-md-3 col-6">
          <h4 className="text-dark">Address</h4>
          <p>
            <i className="far fa-address-book"></i>
            <small className="ms-2">Boshupara, New Market Khulna-074, Bangladesh</small>
          </p>
          <p>
            <i className="far fa-envelope"></i>
            <small className="ms-2">Email: alaminsbl502@gmail.com</small>
          </p>{" "}
          <p>
            <i className="fas fa-phone-volume"></i>
            <small className="ms-2">Phone: +880 1906221552</small>
          </p>
          <a {...facebook} className="text-decoration-none">
            <i
              style={{ border: "1px solid rgb(0,255,0,0.3) ", padding: "10px 13px", borderRadius: "50%" }}
              className="fab  m-2 fa-facebook-f icon1"
            ></i>
          </a>
          <a {...github} className="text-decoration-none">
            <i style={{ border: "1px solid rgb(0,255,0,0.3) ", padding: "10px", borderRadius: "50%" }} className="fab m-2 fa-github icon2"></i>
          </a>
          <a {...instagram} className="text-decoration-none">
            {" "}
            <i style={{ border: "1px solid rgb(0,255,0,0.3) ", padding: "10px", borderRadius: "50%" }} className="fab m-2 fa-instagram icon3"></i>
          </a>
          <a {...linkedin} className="text-decoration-none">
            {" "}
            <i style={{ border: "1px solid rgb(0,255,0,0.3) ", padding: "10px", borderRadius: "50%" }} className="fab m-2 fa-linkedin-in icon4"></i>
          </a>
        </div>{" "}
      </div>
      <p className="lead text-center text-muted"> Copyright &copy; All right reserved by Al Amin</p>
    </div>
  );
};
export default Footer;
