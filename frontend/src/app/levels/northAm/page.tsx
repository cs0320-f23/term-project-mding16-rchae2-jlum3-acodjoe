"use client";
import "./styles.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
// declare module "*.png";

type LevelsType = {
  AfriCarib: number;
  Asia: number;
  NorthAm: number;
  Euro: number;
};

interface PageProps {
  // children: React.ReactNode;
  // progress: number;
  regions: LevelsType;
}

const Page: React.FC<PageProps> = ({}) => {
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
      {/* <Head>
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head> */}
      <div>
        {/* {children} */}
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
          <div className="overflow-scroll">
            <div className="row" id="row1">
              <div className="col-sm" data-aos="zoom-in">
                <a href="/recipes">
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
        {/* <Script
          src="https://unpkg.com/aos@next/dist/aos.js"
          strategy="lazyOnload"
        /> */}
      </div>
    </>
  );
};
export default Page;
