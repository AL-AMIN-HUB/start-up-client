import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "./SliderProject.css";
import "swiper/swiper.scss";

// install Swiper modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);
const SliderProject = () => {
  const firstSlide = {
    href: "https://assignment12-d75c2.web.app/",
    target: "_blank",
  };
  const secondSlide = {
    href: "https://doctors-portal-62565.web.app/",
    target: "_blank",
  };
  const thirdSlide = {
    href: "https://digitalagency-website.netlify.app/",
    target: "_blank",
  };
  const fourSlide = {
    href: "https://medical-health-care-service.web.app/",
    target: "_blank",
  };
  const fifthSlide = {
    href: "https://al-amin-hub.github.io/honda-cbr/",
    target: "_blank",
  };
  const sixSlide = {
    href: "https://varaus-hotel-and-resort-5ae2e.web.app/",
    target: "_blank",
  };
  const sevenSlide = {
    href: "https://al-amin-hub.github.io/panda-commerce-bootstrap/",
    target: "_blank",
  };
  const eightSlide = {
    href: "https://react-bookshop-create-myself.netlify.app/",
    target: "_blank",
  };
  return (
    <div className="py-5 my-5">
      <div className="container pb-5">
        <p style={{ background: "#F5DFFD", width: "150px", borderRadius: "30px" }} className=" py-1 px-2 text-center">
          <small> Our Projects</small>
        </p>
        <h2>
          Proud Projects That Make Us <br /> Stand Out
        </h2>
        <div className="serviceLine">
          <div className="lineAnimation"></div>
        </div>
        <p className="text-muted">
          Startup Founders or Marketing Heads may not have the time or expertise to get the most out of blogging. <br /> Outsourcing your blog writing
          to a professional service will save you a lot of time, and can prove to be a worthy investment.
        </p>
      </div>
      <div>
        <Swiper
          /*  slidesPerView={4}
          spaceBetween={40} */
          slidesPerGroup={2}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          <SwiperSlide className="shadow overflow-hidden">
            <div className="project-img">
              <img
                className="img-fluid "
                style={{ minWidth: "450px", height: "473px" }}
                src="https://i.ibb.co/MsZdKf9/screencapture-assignment12-d75c2-web-app-2021-11-24-22-03-27.png"
                alt=""
              />

              <a {...firstSlide}>
                {" "}
                <span className=" plus">+</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow overflow-hidden">
            <div className="project-img">
              <img className="img-fluid" style={{ minWidth: "450px", height: "473px" }} src="https://i.ibb.co/zSDwqDt/1607431271223.png" alt="" />
              <a {...secondSlide}>
                {" "}
                <span className=" plus">+</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow overflow-hidden">
            <div className="project-img">
              <img
                className="img-fluid"
                style={{ minWidth: "450px", height: "473px" }}
                src="https://i.ibb.co/9V9GhR3/screencapture-digitalagency-website-netlify-app-2021-11-24-21-29-53.png"
                alt=""
              />
              <a {...thirdSlide}>
                {" "}
                <span className=" plus">+</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow overflow-hidden">
            <div className="project-img">
              <img
                className="img-fluid"
                style={{ minWidth: "450px", height: "473px" }}
                src="https://i.ibb.co/P9Ptrpk/screencapture-medical-health-care-service-web-app-2021-11-24-21-57-10.png"
                alt=""
              />
              <a {...fourSlide}>
                {" "}
                <span className=" plus">+</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow overflow-hidden">
            <div className="project-img">
              <img
                className="img-fluid"
                style={{ minWidth: "450px", height: "473px" }}
                src="https://i.ibb.co/fMpNP6Z/screencapture-honda-cbr-assignment-3-netlify-app-2021-11-24-21-36-17.png"
                alt=""
              />
              <a {...fifthSlide}>
                {" "}
                <span className=" plus">+</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow overflow-hidden">
            <div className="project-img">
              <img
                className="img-fluid"
                style={{ minWidth: "450px", height: "473px" }}
                src="https://i.ibb.co/k468vX4/screencapture-varaus-hotel-and-resort-5ae2e-web-app-2021-11-24-22-00-38.png"
                alt=""
              />
              <a {...sixSlide}>
                {" "}
                <span className=" plus">+</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow overflow-hidden">
            <div className="project-img">
              <img
                className="img-fluid"
                style={{ minWidth: "450px", height: "473px" }}
                src="https://i.ibb.co/vsMWtc5/screencapture-panda-e-commerce-by-alamin-netlify-app-2021-11-24-21-36-29.png"
                alt=""
              />
              <a {...sevenSlide}>
                {" "}
                <span className=" plus">+</span>
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide className="shadow overflow-hidden">
            <div className="project-img">
              <img
                className="img-fluid"
                style={{ minWidth: "450px", height: "473px" }}
                src="https://i.ibb.co/hMchzKY/screencapture-react-bookshop-create-myself-netlify-app-2021-11-24-21-34-19.png"
                alt=""
              />
              <a {...eightSlide}>
                {" "}
                <span className=" plus">+</span>
              </a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderProject;
