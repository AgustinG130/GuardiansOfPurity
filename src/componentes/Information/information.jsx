import 'bootstrap/dist/css/bootstrap.min.css';
import './information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureHalf, faEarthAmericas, faDroplet, faSun, faUserSecret, faFrog, faFish, faWater, faSeedling, faTemperatureQuarter, faLemon, faSoap, faHeart, faStar} from '@fortawesome/free-solid-svg-icons';

export default function InformationPage() {
    return (
        <div className = "information-container"> 
          <h1 className="information-title" style={{ color: "#10506b", fontSize:"2.5rem"}}><FontAwesomeIcon className='icon' icon={faStar} style={{color: "#fbcd28", fontSize: "30px"}} /> Guardians of the Planet  <FontAwesomeIcon className='icon' icon={faStar} style={{color: "#fbcd28", fontSize: "30px"}} /></h1>
          <div className="mb-8 card">
            <FontAwesomeIcon className='icon' icon={faEarthAmericas} style={{color: "#0433FF", fontSize: "40px", alignItems:'center'}}/> 
            <h2 className = "information-second-title" >GLOBE Protocols: Science at Your Fingertips!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Become a Planet Protector! <FontAwesomeIcon icon={faSeedling} style={{color: "#34a02c"}} /> With GLOBE Protocols, you can help scientists learn about Earth’s air, water, soil, and plants! <FontAwesomeIcon icon={faSun} style={{color: "#FFD43B"}} /> It's easy and fun, and you’re part of a big team of kids around the world helping protect our planet.
            </p>
          </div>
          <div className="mb-8 card">
            <FontAwesomeIcon className='icon' icon={faDroplet} style={{color: "#2881e2", fontSize: "40px", alignItems:'center'}}/> 
            <h2 className = "information-second-title"> Dive into the World of Water! </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            The hydrosphere is a big word that means all the water on Earth! That includes rivers, lakes, oceans, and even little streams where frogs and fish play! <FontAwesomeIcon icon={faFrog} style={{color: "#2a7e38"}} /> <FontAwesomeIcon icon={faFish} style={{color: "#225bbf"}} />
            <br/>Through GLOBE research, we get to be like water detectives! <FontAwesomeIcon icon={faUserSecret} style={{color: "#2881e2"}} /> <FontAwesomeIcon icon={faUserSecret} style={{color: "#f394ff"}} /> We can learn how water changes with the seasons, check its temperature, and see if it's healthy. By measuring things like water pH (which shows if water is too sour or too soapy) and temperature, we help keep our rivers, lakes, and oceans safe and clean. <FontAwesomeIcon icon={faSun} style={{color: "#FFD43B"}} /> <FontAwesomeIcon icon={faWater} style={{color: "#2881e2"}} />
            <br/>So, jump in and become a Water Hero! Together, we can protect all the amazing water on our planet! <FontAwesomeIcon icon={faDroplet} style={{color: "#2881e2"}}/> 
            </p>
          </div>
          <div className="mb-8 card">
            <FontAwesomeIcon className='icon' icon={faTemperatureHalf} style={{color: "#008000", fontSize: "40px", alignItems:'center'}} />
            <h2 className = "information-second-title" >pH: Check Our Water’s Health!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            pH is like a water "health meter" <FontAwesomeIcon icon={faTemperatureQuarter} style={{color: "#f1933b"}} /> ! Numbers go from 0 to 14. Right in the middle, 7, means just right. Below 7 is sour like lemon <FontAwesomeIcon icon={faLemon} style={{color: "#FFD43B"}} />, and above 7 is soapy like soap <FontAwesomeIcon icon={faSoap} style={{color: "#63E6BE"}} />. 
            <br/>Knowing pH helps us keep our water healthy for fish and plants!
            </p>
          </div>
          <div className="mb-8 card">
            <FontAwesomeIcon className='icon' icon={faSeedling} style={{color: "#34a02c", fontSize: "40px", alignItems:'center'}} /> 
            <h2 className = "information-second-title" >Our Mission: Learn & Play for a Better Planet!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            Our game is made to be fun and easy for everyone to play! With help from GLOBE's special water science, we want to teach people about the importance of water and why it needs our help! <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#0433FF"}}/> <FontAwesomeIcon icon={faHeart} style={{color: "#426fbd"}} />
            <br/>By playing, you’ll learn about the amazing waters on Earth—like rivers, lakes, and oceans—and why we need to protect them. Each level lets you be a Water Hero, taking care of our planet’s water! So, let’s play, learn, and make a difference together! <FontAwesomeIcon icon={faDroplet} style={{color: "#2881e2"}}/> <FontAwesomeIcon icon={faStar} style={{color: "#fbcd28"}} />
            </p>
          </div>
      </div>
    
    );
  }