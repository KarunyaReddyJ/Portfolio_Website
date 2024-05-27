import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
            "STUDENT",
          "MERN STACK DEVELOPER",
          "DSA ENTHUSIAST"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
      
    />
  );
}

export default Type;
