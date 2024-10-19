import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay} from '@fortawesome/free-solid-svg-icons'; 
import "../atoms/PauseButton.css"; 

export const PauseButton = ({ onClick, isPaused }) => {
    return (
        
            <button 
                id='pause' 
                onClick={onClick} 
            >
                <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
            </button>
            
    );
};