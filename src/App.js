import React, { useState } from "react";
import "./App.scss";

import Main from "./Main/Main.js";

import Side from "./Side/Side";
import Header from "./Header/Header";
import { UserContext,BackGroundContext } from "./mainContext";

function App() {
  const [user, setUser] = useState({ name: "guest" });
  const[color,setColor]=useState({color:"lightBlue"})
  return (
    <div className="App">
      <BackGroundContext.Provider value={{color,setColor}}>
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <div className="content">
          <Side />
          <Main />
        </div>
      </UserContext.Provider>
      </BackGroundContext.Provider>
    </div>
  );
}

export default App;
