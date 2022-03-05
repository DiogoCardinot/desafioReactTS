import React from "react";

import { Header } from "./components/Header/Header";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { FooterLinksDesktop } from "./components/FooterLinks/FooterLinksDesktop";
import { FooterLinksMobile } from "./components/FooterLinks/FooterLinksMobile";
import { FooterDesktop } from "./components/Footer/FooterDesktop";
import { FooterMobile } from "./components/Footer/FooterMobile";

function App() {
  return (
    <div>
      <Header />
      <Newsletter />
      <FooterLinksDesktop />
      <FooterLinksMobile />
      <FooterDesktop />
      <FooterMobile />
    </div>
  );
}

export default App;
