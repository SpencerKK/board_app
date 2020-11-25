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
                     style={{
                        transform: "rotate(-20deg)",
                        bottom: "18em",
                        right: "16em",
                        width: "15em",
                     }}
                     id="landing-img-1"
                     src={canserefoglu}
                     draggable="false"
                     alt="can-serfoglu"
                  />
               </span>
            </Draggable>
            <Draggable>
               <span>
                  <img
                     style={{
                        transform: "rotate(20deg)",
                        bottom: "-2em",
                        left: "12em",
                        width: "15em",
                     }}
                     id="landing-img-2"
                     src={eliapellegrini}
                     draggable="false"
                     alt="elia-pellegrini"
                  />
               </span>
            </Draggable>
            <Draggable>
               <span>
                  <img
                     style={{
                        bottom: "-15em",
                        right: "5em",
                        width: "20em",
                     }}
                     id="landing-img-3"
                     src={raphaelnast}
                     draggable="false"
                     alt="raphael-nast"
                  />
               </span>
            </Draggable>
            <Draggable>
               <span>
                  <img
                     style={{
                        transform: "rotate(-20deg)",

                         top: "3em",
                        left: "15em",
                        width: "12em",
                     }}
                     id="landing-img-4"
                     src={shinjirice}
                     draggable="false"
                     alt="shingi-rice"
                  />
               </span>
            </Draggable>
         </div>
      </div>
   );
};

export default Landing;
