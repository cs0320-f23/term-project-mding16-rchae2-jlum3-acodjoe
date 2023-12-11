"use client";
import "./styles.css";
import React, { useEffect } from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import Script from "next/script";

declare module "*.png";
// import Slider from "react-slick";
// // import "~slick-carousel/slick/slick.css";
// // import "~slick-carousel/slick/slick-theme.css";

interface PageProps {
  children: React.ReactNode;
  progress: number;
}

// export default function Page({
//   children,
//   progress,
// }: {
//   progress: number;
//   children: React.ReactNode;
// }) {
//   const selectlevel = "/selectlevel.png";
//   const level1 = "/level1.png";
//   const level2 = "/level2.png";
const Page: React.FC<PageProps> = ({ children, progress }) => {
  useEffect(() => {
    // Initialize AOS when the component mounts on the client side
    import("aos").then((AOS) => {
      AOS.init();
    });
  }, []);
  const selectlevel = "/selectlevel.png";
  //   const level1 = "/level1.png";
  //   const level2 = "/level2.png";

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      {/* <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script> */}
      <div>
        {children}
        <div className="header">
          <div className="country"> NORTH AMERICA </div>
          <div className="progress-container">
            <div className="base-progress"></div>
            <div className="overlay-progress" style={{ width: `${70}%` }}></div>
          </div>
        </div>
        <div className="levels-container">
          <img className="selectlevel" src={selectlevel}></img>
        </div>
        <div className="container" id="bubbles-container">
          {/* <Slider></Slider> */}
          {/* <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-sm">
                    <img className="levelbubble" src={level1}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level1}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level1}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level1}></img>
                  </div>
                </div>
                <div className="row" id="row2">
                  <div className="col-sm">
                    <img className="levelbubble" src={level1}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level1}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level1}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level1}></img>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm">
                    <img className="levelbubble" src={level2}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level2}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level2}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level2}></img>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-sm">
                    <img className="levelbubble" src={level2}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level2}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level2}></img>
                  </div>
                  <div className="col-sm">
                    <img className="levelbubble" src={level2}></img>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div> */}
          <div className="overflow-scroll">
            <div className="row" id="row1">
              <div className="col-sm" data-aos="zoom-in">
                <a href="http://localhost:3000">
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level1.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm" data-aos="zoom-in">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level2.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm" data-aos="zoom-in">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level3.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm" data-aos="zoom-in">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level4.png"}
                  ></img>
                </a>
              </div>
            </div>
            <div className="row" id="row2">
              <div className="col-sm" data-aos="zoom-in">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level5.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm" data-aos="zoom-in">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level6.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm" data-aos="zoom-in">
                <img
                  className="levelbubble grow-on-hover"
                  src={"/level7.png"}
                ></img>
              </div>
              <div className="col-sm" data-aos="zoom-in">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level8.png"}
                  ></img>
                </a>
              </div>
            </div>
            <div className="row" id="row3">
              <div className="col-sm">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level9.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level10.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level11.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level12.png"}
                  ></img>
                </a>
              </div>
            </div>
            <div className="row" id="row4">
              <div className="col-sm">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level13.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level14.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level15.png"}
                  ></img>
                </a>
              </div>
              <div className="col-sm">
                <a>
                  <img
                    className="levelbubble grow-on-hover"
                    src={"/level16.png"}
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Script
          src="https://unpkg.com/aos@next/dist/aos.js"
          strategy="lazyOnload"
        />
      </div>
    </>
  );
};
export default Page;
