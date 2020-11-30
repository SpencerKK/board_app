import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { register } from "../actions/auth";

const SignUp = ({ register, isAuthenticated }) => {
   const [userData, setUserData] = useState({
      screenName: "",
      email: "",
      password: "",
      password2: "",
   });

   //    signup form stuff

   const { screenName, email, password, password2 } = userData;

   function onChange(e) {
      setUserData({ ...userData, [e.target.name]: e.target.value });
   }

   function onRegister(e) {
      e.preventDefault();
      if (password !== password2) {
         alert("Passwords do not match!");
      } else {
         register({ screenName, email, password });
      }
   }

   // rerouting

   if (isAuthenticated) {
      return <Redirect to="/home" />;
   }

   return (
      <div className="signup">
         <h1>Moodboardr</h1>
         <form onSubmit={(e) => onRegister(e)}>
            <input
               placeholder="screenName"
               name="screenName"
               onChange={(e) => onChange(e)}
            />
            <input
               placeholder="email"
               name="email"
               onChange={(e) => onChange(e)}
            />
            <input
               placeholder="password"
               name="password"
               onChange={(e) => onChange(e)}
            />
            <input
               placeholder="password2"
               name="password2"
               onChange={(e) => onChange(e)}
            />
            <button>Sign Up!</button>
         </form>
      </div>
   );
};

const mapStateToProps = (state) => ({
   isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(SignUp);
