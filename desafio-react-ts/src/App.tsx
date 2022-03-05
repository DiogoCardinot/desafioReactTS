import React from "react";

import { Header } from "./components/Header/Header";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { FooterLinksDesktop } from "./components/FooterLinks/FooterLinksDesktop";
import { FooterLinksMobile } from "./components/FooterLinks/FooterLinksMobile";

function App() {
  return (
    <div>
      <Header />
      <Newsletter />
      <FooterLinksDesktop />
      <FooterLinksMobile />
    </div>
  );
}

export default App;
