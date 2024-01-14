import "./App.css";
import { Header, Fotter } from "./elements";
import { Allrouter } from "./routers";
import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <Allrouter />
      <Fotter />
    </>
  );
}

export default App;
