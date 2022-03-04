import React from "react";

import { Header } from "./components/Header/Header";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { FooterLinksDesktop } from "./components/FooterLinks/FooterLinksDesktop";

function App() {
  return (
    <div>
      <Header />
      <Newsletter />
      <FooterLinksDesktop />
    </div>
  );
}

export default App;
