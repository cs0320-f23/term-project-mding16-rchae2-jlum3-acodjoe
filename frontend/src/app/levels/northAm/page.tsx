"use client";
import "./americanstyles.css";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
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

const Page: React.FC<PageProps> = ({ regions }) => {
  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import("aos");
      AOS.init();
    };

    initAOS();
  }, [regions]); // Reinitialize AOS when regions change

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    console.log(regions.NorthAm);
    const newProgress = (regions.NorthAm / totalLevels) * 100;
    setProgress(newProgress);
  }, [regions.NorthAm]);

  const selectlevel = "/selectlevel.png";
  const totalLevels = 17;
  const fullRows = Math.floor(totalLevels / 4);
  const remainingBubbles = totalLevels % 4;
  const navigate = useNavigate();

  function bubbleclick() {
    const newProgress = (regions.NorthAm / totalLevels) * 100;
    setProgress(newProgress);
    navigate("/recipes");
  }

  return (
    <>
      <div>
        <div className="header">
          <div className="country"> NORTH AMERICA </div>
          <div className="na-progress-container">
            <div className="na-base-progress"></div>
            <div
              className="na-overlay-progress"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <div className="levels-container">
          <img className="selectlevel" src={selectlevel} alt="Select Level" />
        </div>
        <div className="container" id="bubbles-container">
          <div className="over-container">
            {Array.from({ length: fullRows }).map((_, rowIndex) => (
              <div className="row" key={`row${rowIndex + 1}`}>
                {Array.from({ length: 4 }).map((_, colIndex) => {
                  const currLevel = rowIndex * 4 + colIndex + 1;
                  const levelKey = `level${currLevel}`;
                  let levelImage = `/level${currLevel}.png`;

                  const isGreyedOut = regions.NorthAm < currLevel;
                  if (isGreyedOut) {
                    levelImage = "/lockedlevel.png";
                  }

                  const bubbleContent = isGreyedOut ? (
                    <img
                      className={`levelbubble grow-on-hover greyed-out-level`}
                      src={levelImage}
                      alt={`Level ${currLevel}`}
                    />
                  ) : (
                    <a>
                      {/* Use the current level number in the URL */}
                      <img
                        className={`levelbubble grow-on-hover`}
                        src={levelImage}
                        alt={`Level ${currLevel}`}
                        onClick={bubbleclick}
                      />
                    </a>
                  );

                  return (
                    <div className="col-sm" data-aos="zoom-in" key={levelKey}>
                      {bubbleContent}
                    </div>
                  );
                })}
              </div>
            ))}
            {/* Render remaining bubbles in the last row */}
            <div className="row" key={`row${fullRows + 1}`}>
              {Array.from({ length: remainingBubbles }).map((_, colIndex) => {
                const currLevel = fullRows * 4 + colIndex + 1;
                const levelKey = `level${currLevel}`;
                let levelImage = `/level${currLevel}.png`;

                const isGreyedOut = regions.NorthAm < currLevel;
                if (isGreyedOut) {
                  levelImage = "/lockedlevel.png";
                }

                const bubbleContent = isGreyedOut ? (
                  <img
                    className={`levelbubble grow-on-hover lockedlevel`}
                    src={levelImage}
                  />
                ) : (
                  <a href={"/recipes"}>
                    <img
                      className={`levelbubble grow-on-hover`}
                      src={levelImage}
                    />
                  </a>
                );

                return (
                  <div className="col-sm" data-aos="zoom-in" key={levelKey}>
                    {bubbleContent}
                  </div>
                );
              })}
            </div>

            {/* <div className="row" id="row1">
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
    </div>*/}
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
