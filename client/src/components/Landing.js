import React, { useState } from "react";
import { Link } from "react-router-dom";
import Draggable from "react-draggable";

// images
import canserefoglu from "../assets/images/can-serefoglu.jpg";
import eliapellegrini from "../assets/images/elia-pellegrini.jpg";
import raphaelnast from "../assets/images/raphael-nast.jpg";
import shinjirice from "../assets/images/shingi-rice.jpg";

const Landing = () => {
   const [bg, setBg] = useState("#fff");
   const [loginDisplay, setLoginDisplay] = useState("none");

   return (
      <div className="landing" style={{ backgroundColor: `${bg}` }}>
         <div className="landing-images">
            <div className="landing-content">
               <h1>moodboardr</h1>
               <p>
                  Conceptualize your next big project. Collab with creatives. Be
                  inspired.
               </p>
               <div className="login-options">
                  <button
                     id="login-btn"
                     onClick={() => setLoginDisplay("block")}
                  >
                     Login
                  </button>
                  <Link to="/sign-up">
                     <button>Sign Up!</button>
                  </Link>
                  <p id="choose-bg">
                     Change Background
                     <input
                        type="color"
                        id="colorpicker"
                        value={bg}
                        onChange={(e) => setBg(e.target.value)}
                     ></input>
                  </p>
               </div>
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
         <div className="login-modal" style={{ display: `${loginDisplay}` }}>
            <form>
               <div id="x-wrapper" onClick={() => setLoginDisplay("none")}>
                  <i className="fas fa-times" id="form-x"></i>
               </div>
               <label>Screen-Name or Email</label>
               <input />
               <label>Password</label>
               <input />
               <button>Sign In</button>
            </form>
         </div>
      </div>
   );
};

export default Landing;
