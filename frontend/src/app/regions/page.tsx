import './regions.css';
import 'bootstrap/dist/css/bootstrap.css';

export default function Page() {
  return (
    <div className='Page'>
      <div className='Header'>
          <h1>Welcome! Please Select a Region:</h1>
      </div>

      <div className='Bdy'>
        {/* <h1>add globes here</h1> */}
        <div className='Asia'>
        {/* <h1>Asia</h1>  */}
        <img
            src='https://drive.google.com/uc?export=download&id=1eb86GuVzFZUMSiWrQ6H5R-HVODwY8uv2'
            className="image AsiaImage"
            alt="The continent Asia"
          />
        </div>
        <div className='Europe'>
        <img
            src='https://drive.google.com/uc?export=download&id=13GoA8iuOPdwP4Zj1JX-AThsS63h55jub'
            className="image EuropeImage"
            alt="The continent Europe"
          />
        </div>
        <div className='NorthAmerica'>
        <img
            src='https://drive.google.com/uc?export=download&id=1al7xvx18qPauek7wml3gVPH0ZJT616YV'
            className="image NorthAmericaImage"
            alt="The continent North America"
          />
        </div>
        <div className='Africa'>
        {/* <h1>Africa</h1>  */}
        <img
            // src='regions/img/africa.png'
            // src="https://drive.google.com/file/d/1crQ3WIThh43_oHoZhr-0amoCSwfyeQWP/view?usp=sharing"
            // src='https://flic.kr/p/2pkipEz'
            src='https://drive.google.com/uc?export=download&id=1crQ3WIThh43_oHoZhr-0amoCSwfyeQWP'
            className="image AfricaImage"
            alt="The continent Africa"
          />
        </div>
      </div>
    </div>
  );
}