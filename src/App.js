import React from "react";
import CommerceContextProvider from "./Components/Context/commerceContext";
import Navbar from "./Components/Navbar";
import Produtos from "./Components/Produtos";

const App = () => {
  return (
    <div>
      <CommerceContextProvider>
        <Navbar />
        <Produtos />
      </CommerceContextProvider>
    </div>
  );
};

export default App;
