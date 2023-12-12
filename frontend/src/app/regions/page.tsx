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

function onClick(region: string, props: regionProps) {
  props.setSelectRegion(region);
  console.log(region);
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
              src="https://drive.google.com/uc?export=download&id=1eb86GuVzFZUMSiWrQ6H5R-HVODwY8uv2"
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
                onClick={() => onClick("Asia", props)}
              >
                Go Here!
              </a>
            </div>
          </div>

          <div className="EuropeCard">
            <img
              src="https://drive.google.com/uc?export=download&id=13GoA8iuOPdwP4Zj1JX-AThsS63h55jub"
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
                onClick={() => onClick("Euro", props)}
              >
                Go Here!
              </a>
            </div>
            {/* </div> */}
          </div>

          {/* <div className='bottom'> */}
          <div className="AfricaCard">
            <img
              src="https://drive.google.com/uc?export=download&id=1crQ3WIThh43_oHoZhr-0amoCSwfyeQWP"
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
                onClick={() => onClick("AfriCarib", props)}
              >
                Go Here!
              </a>
            </div>
          </div>

          <div className="NorthAmericaCard">
            <img
              src="https://drive.google.com/uc?export=download&id=1al7xvx18qPauek7wml3gVPH0ZJT616YV"
              className="image NorthAmericaImage"
              alt="The continent North America"
            />

            <div className="card-body">
              <h5 className="card-title">North America</h5>
              <p className="card-text">
                Explore cuisines like Canadian, American, Mexican 
              </p>
              <a
                href="levels/northAm"
                className="btn btn-primary"
                onClick={() => onClick("NorthAm", props)}
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
