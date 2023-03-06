import React from "react";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Team from "./components/Team/Team.jsx";

import "normalize.css"

const App = () => {
  return (
    <>
      <Header />
      Hi
      <main>
        <Team />
      </main>
      <Footer />
    </>
  );
};

export default App;
