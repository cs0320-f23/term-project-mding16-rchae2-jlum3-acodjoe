"use client";
import "./asianstyles.css";
import React, { useEffect, useState, Dispatch, SetStateAction } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
// declare module "*.png";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { loggedIn } from "../../../Atom.tsx";

/**
 * Map that contains the user's current level for each region
 */
type LevelsType = {
  AfriCarib: number;
  Asia: number;
  NorthAm: number;
  Euro: number;
};

/**
 * Shared props for the Levels page
 */
interface PageProps {
  regions: LevelsType;
  levelClicked: Number;
  setLevelClicked: Dispatch<SetStateAction<Number>>;
}

/**
 * Page with all of the levels populating based on the number of levels for each region
 */
const Page: React.FC<PageProps> = ({
  regions,
  levelClicked,
  setLevelClicked,
}) => {
  const [progress, setProgress] = useState<number>(0);
  useEffect(() => {
    const initAOS = async () => {
      const AOS = await import("aos");
      AOS.init();
    };

    initAOS();
  }, [regions]); // Reinitialize AOS when regions change

  useEffect(() => {
    const newProgress = (regions.Asia / totalLevels) * 100;
    console.log("this is regions map output", regions.Asia);
    setProgress(newProgress);
  }, [regions.Asia]);

  // const nav = useNavigate();
  // useEffect(() => {
  //   // Redirect to another page when showContent is set to false
  //   if (!loggedIn) {
  //     nav("/"); // Specify the path you want to redirect to
  //   }
  // }, [loggedIn, nav]);

  const selectlevel = "/selectlevel.png";
  const totalLevels = 17;
  const fullRows = Math.floor(totalLevels / 4);
  const remainingBubbles = totalLevels % 4;
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(loggedIn);
  const setLoggedIn = useSetRecoilState(loggedIn);

  if (isLoggedIn === false) {
    navigate("/");
  }

  // Function that is called to navigate to the recipe page when levelBubble is clicked
  function bubbleclick(currLevel: Number) {
    const newProgress = (regions.Asia / totalLevels) * 100;
    setProgress(newProgress);
    setLevelClicked(currLevel);
    console.log(levelClicked);
    navigate("/recipes");
  }

  return (
    <>
      <div>
        <div className="header">
          <div className="country">
            <a>
              <img
                src="/Vector.png"
                className="arrow"
                width={25}
                height={40}
                onClick={() => navigate("/regions")}
              />
            </a>
            ASIA
          </div>
          <div className="asia-progress-container">
            <div className="asia-base-progress"></div>
            <div
              className="asia-overlay-progress"
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

                  const isGreyedOut = regions.Asia < currLevel;
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
                      <img
                        className={`levelbubble grow-on-hover`}
                        src={levelImage}
                        alt={`Level ${currLevel}`}
                        onClick={() => bubbleclick(currLevel)}
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
            {/* Render the odd number of bubbles! */}
            <div className="row" key={`row${fullRows + 1}`}>
              {Array.from({ length: remainingBubbles }).map((_, colIndex) => {
                const currLevel = fullRows * 4 + colIndex + 1;
                const levelKey = `level${currLevel}`;
                let levelImage = `/level${currLevel}.png`;

                const isGreyedOut = regions.Asia < currLevel;
                if (isGreyedOut) {
                  levelImage = "/lockedlevel.png";
                }

                const bubbleContent = isGreyedOut ? (
                  <img
                    className={`levelbubble grow-on-hover lockedlevel`}
                    src={levelImage}
                  />
                ) : (
                  <a href={`/recipes`}>
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
