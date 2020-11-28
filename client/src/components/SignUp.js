import React from "react";

const SignUp = () => {
   return (
      <div className="signup">
         <h1>Moodboardr</h1>
         <form>
            <input placeholder="screenName" />
            <input placeholder="email" />
            <input placeholder="password" />
            <input placeholder="password2" />
            <button>Sign Up!</button>
         </form>
      </div>
   );
};


export default SignUp;