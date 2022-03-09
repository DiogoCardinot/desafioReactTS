import React from "react";

import { Header } from "./components/Header/Header";
import { TopInfos } from "./components/TopInfos/TopInfos";
import { Newsletter } from "./components/Newsletter/Newsletter";
import { FooterLinksDesktop } from "./components/FooterLinks/FooterLinksDesktop";
import { FooterLinksMobile } from "./components/FooterLinks/FooterLinksMobile";
import { FooterDesktop } from "./components/Footer/FooterDesktop";
import { FooterMobile } from "./components/Footer/FooterMobile";

function App() {
  return (
    <div>
      <Header />
      <TopInfos />
      <Newsletter />
      <FooterLinksDesktop />
      <FooterLinksMobile />
      <FooterDesktop />
      <FooterMobile />
    </div>
  );
}

export default App;
