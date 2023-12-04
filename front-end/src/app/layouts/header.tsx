"use client";
import Image from "next/image";

import MenuDesktop from "./Menu/MenuDesktop";
import MenuMobile from "./Menu/MenuMobile";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";

export default function Header() {
  const [scroll, setScoll] = useState(false);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  useEffect(() => {
    function checkScroll() {
      if (window.scrollY > 70) {
        setScoll(true);
      } else {
        setScoll(false);
      }
    }
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const handleClickShowLanguage = () => {
    setShowLanguage((current) => !current);
  };

  const handleClickLanguage = () => {
    setShow((current) => !current);
  };

  const handleShowMenu = () => {
    setShowMenu((current) => !current);
  };

  return (
    <div className="header-wrap fix-header">
      <div className="header-content">
        <div className="wrap-header-content justify-between">
          <div id="menu-desktop" className="header-menu-list">
            <MenuDesktop />
          </div>
        </div>
        <div className="display-center">
          <div className="header-group-btn display-center">
            <Button className="primary-button capitalize" variant="contained" color="secondary" size="medium">
              Connect Wallet
            </Button>
            <ul className="header-group-btn">
              <button className={show ? "language language-onClick" : "language"} onClick={handleClickLanguage}>
                <li style={{ display: "flex", alignItems: "center" }}>
                  <Image className="icon icon-globe icon-medium" src={"/icons/global.svg"} width={16} height={16} alt="globe" />
                  <ul className="sub-lang-list">
                    <li className="sub-lang-item">
                      <span>English</span>
                    </li>
                    <li className="sub-lang-item">
                      <span>Français</span>
                    </li>
                    <li className="sub-lang-item">
                      <span>中国人</span>
                    </li>
                  </ul>
                </li>
              </button>
            </ul>
          </div>
        </div>

        <div id="menu-mobile" className="header-menu-mobile col l-0 c-12" style={{ display: showMenu ? "block" : "none" }}>
          <MenuMobile handleClickClose={handleClickShowLanguage} action={showLanguage} />
        </div>
      </div>
    </div>
  );
}
