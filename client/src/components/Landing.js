import React from "react";
import Draggable from 'react-draggable';

// images
import canserefoglu from "../assets/images/can-serefoglu.jpg";
import eliapellegrini from "../assets/images/elia-pellegrini.jpg";
import raphaelnast from "../assets/images/raphael-nast.jpg";
import shinjirice from "../assets/images/shingi-rice.jpg";

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-content">
                <h1>moodboardr</h1>
                <p>Conceptualize your next big project. Collab with creatives. Be inspired.</p>
            </div>
            <div className="landing-images">
                <Draggable>
                    <img src={canserefoglu} draggable="false" alt="can-serfoglu" />
                </Draggable>
                <Draggable>
                    <img src={eliapellegrini} draggable="false" alt="elia-pellegrini" />
                </Draggable>
                <Draggable>
                    <img src={raphaelnast} draggable="false" alt="raphael-nast" />
                </Draggable>
                <Draggable>
                    <img src={shinjirice} draggable="false" alt="shingi-rice" />
                </Draggable>
            </div>
        </div>
    )
}

export default Landing;