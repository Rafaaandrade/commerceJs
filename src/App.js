import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Approutes";
import CommerceContextProvider from "./Components/Context/commerceContext";

const App = () => {
  return (
    <BrowserRouter>
        <div>
      <CommerceContextProvider>
          <AppRoutes />
      </CommerceContextProvider>
        </div>
    </BrowserRouter>
  );
};

export default App;
