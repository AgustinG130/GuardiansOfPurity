import {useState } from 'react';
import './Main.css';
import Instructions from '../Instructions/Instructions.jsx';
import Game from '../Game/Game.jsx';
import Information from '../Information/information.jsx';

function Main() {
    const [showPopup, setShowPopup] = useState(false);
    const [game, setGame] = useState(false);
    const [information, setInformation] = useState(false);
    const [next, setNext] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const toggleGame = () => {
        setGame(!game);
    };

    const toggleInformation = () => {
        setInformation(!information);
    };

    const toggleNext = () => {
        setNext(!next);
    };

    return(
        <container className="container-fluid">
            { information && (
                <div className="info-page">
                    <Information/>
                    <div className='mt-3 close-btn-container'>
                        <button className={`menu-btn d-flex justify-content-center align-items-center`} style={{ fontSize: '26px', fontWeight: '700', fontFamily:'monospace', color:'#10506b'}} onClick={() => {  toggleInformation();}}> GO BACK </button>
                        <button className={`menu-btn d-flex justify-content-center align-items-center`} style={{ fontSize: '26px', fontWeight: '700', fontFamily:'monospace', color:'#10506b'}} onClick={() => { toggleNext(); toggleInformation();}}>NEXT</button>
                    </div>
                </div>
            ) }
            { next && !game && !showPopup && (
                <div>
                    <h1 id='title' className='menu-title d-flex flex-row justify-content-center align-items-center '>Guardians of Purity</h1>
                    <div className='main-menu'>
                        <div className='mb-3 d-flex flex-row justify-content-center align-items-center'>
                            <button className={`menu-btn d-flex justify-content-center align-items-center`} style={{ fontSize: '26px', fontWeight: '700', fontFamily:'monospace', color:'#10506b'}} onClick={toggleGame}>PLAY</button>
                        </div>
                        <div className='mb-3 d-flex flex-row justify-content-center align-items-center'>
                            <button className={`menu-btn d-flex justify-content-center align-items-center`} style={{ fontSize: '26px', fontWeight: '700', fontFamily:'monospace', color:'#10506b'}} onClick={togglePopup} >INSTRUCTIONS</button>
                        </div>
                        <div className='mb-3 d-flex flex-row justify-content-center align-items-center'>
                            <button className={`menu-btn d-flex justify-content-center align-items-center`} style={{ fontSize: '26px', fontWeight: '700', fontFamily:'monospace', color:'#10506b'}} onClick={() => { toggleNext(); toggleInformation(); }}> GO BACK </button>
                        </div>
                    </div>
                </div>
            )}
            {game && (   
                <div>
                    <Game/>
                    <div className='mt-3 close-btn-container'>
                        <button className='close-btn' style={{ fontSize: '26px', fontWeight: '700', fontFamily:'monospace', color:'#10506b'}} onClick={toggleGame}>CLOSE</button>
                    </div>
                </div>
                
            )}
            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <Instructions/>
                        <div className='close-btn-container'>
                            <button className='close-btn' onClick={togglePopup}>CLOSE</button>
                        </div>
                    </div>
                </div>
             )}
            {!next && !information && !game && !showPopup && (
                <div className='justify-content-center d-flex flex-column align-items-center'>
                    <h1 id='title' className='menu-title d-flex fs-md-3 flex-row justify-content-center align-items-center text-center'>Guardians of Purity</h1>
                    <div className='mb-3 d-flex col-6 col-sm-12 flex-column justify-content-center align-items-center'>
                        <button id="get-started" className={`menu-btn d-flex justify-content-center align-items-center col-6`} onClick={toggleInformation}>GET STARTED</button>
                    </div>
                </div>
            ) }
            
            
        </container>
    ); 
  }
 
  export default Main;
  
