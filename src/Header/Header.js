import React, { useContext } from "react";
import { UserContext } from "../mainContext";
import "./Header.scss";

function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
     
       <div className="Header">header
       
       <span>Hello : {user.name}</span>
       </div>
      
    </>
  );
}

export default Header;
