import './Instructions.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSoap, faJugDetergent, faLemon, faBottleDroplet} from '@fortawesome/free-solid-svg-icons';

function Instructions() {
  return (
    <div className="instructions-container" >
        <div class="col-12" id="content">
            <h1 className="intructions-title" style={{ color: "#10506b",  fontWeight: "bold", textAlign:"center", fontSize:"2rem", marginTop:"20px", marginBottom:"20px"}} > INSTRUCTIONS </h1>
            <div className="instructions-info">
                <p className="game-info text-break">
                    Control the trash bin using the arrow keys to catch the objects falling
                    from the sky and prevent them from landing in the water. Each object you catch affects
                    the water's pH in a different way, and your mission is to keep it within a healthy range,
                    avoiding imbalances that could harm the aquatic ecosystem.
                </p>
                <img src="/robot.png" height="200"/>
            </div>
            <div className="game-mecanic">
                <h2 id="game-mecanics-title">Game Mechanics</h2>
                <div class="rules">
                    <h3 id="rules"> Rules</h3>
                    <ul className="items">
                        <li className='text-break'> The pH of the water must be kept between 6.5 and 8.5.</li>
                        <li className='text-break'> If the pH goes out of the range, the game ends</li>
                        <li className='text-break'> The pH of the water is affected by the objects that fall into it. </li>
                    </ul>
                </div>
                <div class="objects">
                    <h3 id="object-title">Falling Objects </h3>
                    <ul className="items icons">
                        <li className="item-icons text-break">Objects that Decrease pH:
                            <ul>
                                <li className='text-break'> <FontAwesomeIcon icon={faLemon} style={{color: "#FFD43B", fontSize: "22px"}}  /> Lemon</li>
                                <li className='text-break'><FontAwesomeIcon icon={faBottleDroplet} style={{color: "#B1DD8C"}} className="icon"/> Vinegar</li>
                            </ul>
                        </li>
                        <li className="item-icons" >Objects that Increase pH:
                            <ul>
                                <li className='text-break' style={{  margin: "10px 0 " }}><FontAwesomeIcon icon={faSoap} style={{ color: "#F7ABCD", marginLeft: "5px" }} className="icon" /> Soap</li>
                                <li className='text-break'> <FontAwesomeIcon icon={faJugDetergent} style={{color: "#0433FF"}} className="icon"/> Bleach</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="controls">
                <h2 id='control-title'>Controls</h2>
                    <ul className="control-items">
                        <li className='text-break'>
                            Move Left:  <i className="bi bi-arrow-left-square"></i> Left Arrow key on the keyboard.
                        </li >
                        <li className='text-break'>
                            Move Right:  <i className="bi bi-arrow-right-square"></i> Right Arrow key on the keyboard.
                        </li>
                    </ul>
            </div>
        </div>
    </div>
  );
}
export default Instructions;
