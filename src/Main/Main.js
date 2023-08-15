import React, { useContext } from "react";
import { UserContext,BackGroundContext } from "../mainContext";

import "./Main.scss";

function Main() {
  const { color } = useContext(BackGroundContext);
  const { user } = useContext(UserContext);


  return (
    <>
      <div className="Main" style={{background:color.color}}>
        <h1>
          Main
          <p>hello {user.name}</p>
          <button >change color</button>
        </h1>
  
      </div>
    </>
  );
}

export default Main;
