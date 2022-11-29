import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer"


function App() {
  return (
    <div>
     <NavBar/>
     <ItemListContainer greeting={"¡Mensaje desde la prop Greeting!"}/>
    </div>
  );
}

export default App;
