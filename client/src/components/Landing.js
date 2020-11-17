import React from "react";

// images
import canserefoglu from "../assets/images/can-serefoglu.jpg";
import eliapellegrini from "../assets/images/elia-pellegrini.jpg";
import raphaelnast from "../assets/images/raphael-nast.jpg";
import shinjirice from "../assets/images/shingi-rice.jpg";

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-content">
                <h1>Moodboarder</h1>
                <p>Conceptualize your next big project. Download your moodboard, or save it for later!</p>
            </div>
            <div className="landing-images">
                {/* <img id="home-img-1" src={canserefoglu} alt="can-serefoglu" /> */}
                <img id="home-img-2" src={eliapellegrini} alt="elia-pellegrini" />
                {/* <img id="home-img-3" src={raphaelnast} alt="raphael-nast" />
                <img id="home-img-4" src={shinjirice} alt="shinji-rice" /> */}
            </div>
        </div>
    )
}

export default Landing;