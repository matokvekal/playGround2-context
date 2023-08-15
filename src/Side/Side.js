import { useState, createContext, useContext } from "react";
import "./Side.scss";
import { UserContext } from "../mainContext";

function Side() {
  
  const {user,setUser} = useContext(UserContext);

  const handleLogin = () => {
    if(user.name!=='guest'){
      setUser({name:'guest'});
    }
    else{
      setUser({name:"John Doe",age:30});
    }
  };
  
  return (
    <>
      <div className="Side">
        <p>{user && user.name} click to logout/login</p>
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
}

export default Side;
