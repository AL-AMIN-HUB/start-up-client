import React from "react";
import Swal from "sweetalert2";
import "./Contact.css";

const Contact = () => {
  const facebook = {
    href: "https://www.facebook.com/alamindev575",
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
    href: "https://www.linkedin.com/in/alamindev575/",
    target: "_blank",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your message has been received",
      showConfirmButton: false,
      timer: 1500,
    });
    document.getElementById("myForm").reset();
  };
  const email = {
    href: "#",
  };
  const mobile = {
    href: "#",
  };
  const map = {
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977793337!2d90.34928583919219!3d23.780777744454788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1645893062738!5m2!1sen!2sbd",
  };
  return (
    <div className="body">
      <div className="contactUs">
        <div className="title">
          <h2>Get in Touch</h2>
        </div>
        <div className="contactBox">
          {/* Form box----------------------- */}
          <div className="contact form">
            <h3>Send a Message</h3>
            <form action="#" onSubmit={handleSubmit} id="myForm">
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span>First Name</span>
                    <input required type="text" placeholder="Al" />
                  </div>{" "}
                  <div className="inputBox">
                    <span>Last Name</span>
                    <input required type="text" placeholder="Amin" />
                  </div>
                </div>
                {/*  */}
                <div className="row50">
                  <div className="inputBox">
                    <span>Email</span>
                    <input required type="email" placeholder="example@gmail.com" />
                  </div>{" "}
                  <div className="inputBox">
                    <span>Mobile</span>
                    <input type="number" name="number" placeholder="+880 1906 2****2" />
                  </div>
                </div>
                {/*  */}
                <div className="row100">
                  <div className="inputBox">
                    <span>Write message</span>
                    <textarea required name="message" placeholder="Write your message here.."></textarea>
                  </div>{" "}
                </div>{" "}
                {/*  */}
                <div className="row100">
                  <div className="inputBox">
                    <input type="submit" value="Send message" />
                  </div>{" "}
                </div>
              </div>
            </form>
          </div>

          {/* Info box----------------------- */}
          <div className="contact info">
            <h3>Contact Info</h3>
            <div className="infoBox">
              <div>
                <span>
                  <ion-icon name="location"></ion-icon>
                </span>
                <p>
                  Moheshpur, Jhenaidah-7340, Khulna <br /> Bangladesh
                </p>
              </div>{" "}
              <div>
                <span>
                  <ion-icon name="mail"></ion-icon>
                </span>
                <a {...email}>alaminsbl2022@gmail.com</a>
              </div>
              <div>
                <span>
                  <ion-icon name="call"></ion-icon>
                </span>
                <a {...mobile}>+880 1779 265 5*2</a>
              </div>
              <div className="socialIcon">
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
                  <i
                    style={{ border: "1px solid rgb(0,255,0,0.3) ", padding: "10px", borderRadius: "50%" }}
                    className="fab m-2 fa-instagram icon3"
                  ></i>
                </a>
                <a {...linkedin} className="text-decoration-none">
                  {" "}
                  <i
                    style={{ border: "1px solid rgb(0,255,0,0.3) ", padding: "10px", borderRadius: "50%" }}
                    className="fab m-2 fa-linkedin-in icon4"
                  ></i>
                </a>
              </div>
            </div>
          </div>

          {/* Map box----------------------- */}
          <div className="contact map">
            <iframe {...map} allowfullscreen="" loading="lazy" title="map"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
