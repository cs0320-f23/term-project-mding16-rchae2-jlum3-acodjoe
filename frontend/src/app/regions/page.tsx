import React from "react";
import "./regions.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
  useContext,
} from "react";

interface regionProps {
  selectedRegion: string;
  setSelectRegion: Dispatch<SetStateAction<string>>;
}

function waitThreeMinutes() {
  return new Promise(resolve => {
    setTimeout(resolve, 180000); // 180,000 milliseconds = 3 minutes
  });
}

async function onClick(region: string, props: regionProps, event : React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();

  props.setSelectRegion(region);
  console.log(props.selectedRegion);

  // window.setTimeout(() => {
  //   window.location.assign("/regions");
  // }, 999999999999999999999999999999999999999999 * 999999999999999999999999999999999999999999);

  // console.log("drive");
  // await waitThreeMinutes(); // Wait for 3 minutes
  //{selectedRegion: '', setSelectRegion: ƒ}

  window.location.href = "/levels/" + region;
}

export default function Page(props: regionProps) {
  return (
    <div className="Page">
      <div className="Header">
        <h1>Welcome! Please Select a Region:</h1>
      </div>

      <div className="Bdy">
        <div className="top">
          <div className="AsiaCard">
            <img
              src="https://drive.google.com/uc?export=download&id=12Lsp4ZQh72Er6rluILon49rL2zTpmVsl"
              className="image AsiaImage"
              alt="The continent Asia"
            />

            <div className="card-body">
              <h5 className="card-title">Asia</h5>
              <p className="card-text">
                Explore cuisines like Japanese, Chinese, Indian, Vietnamese,
                Thai, Filipino, Malaysian      
              </p>
              <a
                href="/levels/asian"
                className="btn btn-primary"
                onClick={(e) => onClick("Asia", props, e)}
              >
                Go Here!
              </a>
            </div>
          </div>


          {/* <div className='bottom'> */}
          <div className="AfricaCard">
            <img
              //src="https://drive.google.com/uc?export=download&id=1crQ3WIThh43_oHoZhr-0amoCSwfyeQWP"
              //src="https://drive.google.com/uc?export=download&id=1rd2c05CffEKaTCYIyihmRk4eoT-RSssP"
              src="https://drive.google.com/uc?export=download&id=19qLJTT63N8KDUswtfEzyp9G_gj8BRePA"
              className="image AfricaImage"
              alt="The continent Africa"
            />

            <div className="card-body">
              <h5 className="card-title">Africa and Caribbean</h5>
              <p className="card-text">
                Explore cusines like Jamaican, Egyptian, Moroccan, Kenyan,
                Tunisian
              </p>
              <a
                href="levels/afriCarib"
                className="btn btn-primary"
                onClick={(e) => onClick("AfriCarib", props, e)}
              >
                Go Here!
              </a>
            </div>
          </div>

          <div className="EuropeCard">
            <img
              // src="https://drive.google.com/uc?export=download&id=13GoA8iuOPdwP4Zj1JX-AThsS63h55jub"
              //src="https://drive.google.com/uc?export=download&id=1Ljf-06PLMdbbn9NAEhs8wGeIxbfhKIhz"
              src="https://drive.google.com/uc?export=download&id=17e5gMASiuHFdHC2F-4O1XEZgaKa0iFvI"
              className="image EuropeImage"
              alt="The continent Europe"
            />

            <div className="card-body">
              <h5 className="card-title">Europe</h5>
              <p className="card-text">
                Explore cuisines like French, Italian, British, Croatian, Dutch,
                Irish, Spanish, Polish, Portuguese, Turkish, Greek, Russian
              </p>
              <a
                href="/levels/europe"
                className="btn btn-primary"
                onClick={(e) => onClick("Euro", props, e)}
              >
                Go Here!
              </a>
            </div>
            {/* </div> */}
          </div>

          <div className="NorthAmericaCard">
            <img
              //src="https://drive.google.com/uc?export=download&id=1al7xvx18qPauek7wml3gVPH0ZJT616YV"
              //src="https://drive.google.com/uc?export=download&id=1OZsja4pri9dXX1kwz9DTtULLJruy2SGa"
              src="https://drive.google.com/uc?export=download&id=1ZhIKJC8cSx52I-V3FnDJAoA1yMD6Tcdz"
              className="image NorthAmericaImage"
              alt="The continent North America"
            />

            <div className="card-body">
              <h5 className="card-title">North America</h5>
              <p className="card-text">
                Explore cuisines like Canadian, American, Mexican 
              </p>
              <a
                // href="levels/northAm"
                href="#"
                className="btn btn-primary"
                onClick={(e) => onClick("NorthAm", props, e)}
              >
                Go Here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
