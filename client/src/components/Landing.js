import React from "react";
import Draggable from "react-draggable";

// images
import canserefoglu from "../assets/images/can-serefoglu.jpg";
import eliapellegrini from "../assets/images/elia-pellegrini.jpg";
import raphaelnast from "../assets/images/raphael-nast.jpg";
import shinjirice from "../assets/images/shingi-rice.jpg";

const Landing = () => {
   return (
      <div className="landing">
         <div className="landing-images">
            <div className="landing-content">
               <h1>moodboardr</h1>
               <p>
                  Conceptualize your next big project. Collab with creatives. Be
                  inspired.
               </p>
            </div>
            <Draggable>
                <span>
                <img
                  style={{ transform: "rotate(20deg)" }}
                  id="landing-img-1"
                  src={canserefoglu}
                  draggable="false"
                  alt="can-serfoglu"
               />
                </span>
            </Draggable>
            <Draggable>
               <img
                  id="landing-img-2"
                  src={eliapellegrini}
                  draggable="false"
                  alt="elia-pellegrini"
               />
            </Draggable>
            <Draggable>
               <img
                  id="landing-img-3"
                  src={raphaelnast}
                  draggable="false"
                  alt="raphael-nast"
               />
            </Draggable>
            <Draggable>
               <img
                  id="landing-img-4"
                  src={shinjirice}
                  draggable="false"
                  alt="shingi-rice"
               />
            </Draggable>
         </div>
      </div>
   );
};

export default Landing;
