import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LIST_MENU from "../../constants/listMenu";
import Image from "next/image";

interface Props {
  action: boolean;
  handleClickClose(): void;
}

const MenuMobile = ({ action, handleClickClose }: Props) => {
  const [show, setShow] = useState<null | number>(null);
  const [clickMenu, setClickMenu] = useState(false);

  const handleClickMenu = (index: number) => {
    setClickMenu((current) => !current);
    setShow(index);
  };

  const handleShowMenu = (index: number) => {
    if (index === show && clickMenu === true) return true;
  };

  return (
    <div className="grid wide">
      <div className="row">
        <ul className="grid wide menu-mobile-list">
          <li className="list-menu">
            <>
              {LIST_MENU.map((menu, index) => (
                <div className="col c-12 menu-mobile-item" key={index}>
                  <div className="menu-mobile-link" onClick={() => handleClickMenu(index)}>
                    <Link href={menu.path}>{menu.page}</Link>
                    {/* {menu.subMenu?.length ? <Image src={imgIcon.src} alt="icon-menu-dow-mobile" /> : <></>} */}
                  </div>
                </div>
              ))}
            </>
          </li>

          <li className="group-btn-bottom">
            <div className="menu-mobile-item">
              <a href="#void" onClick={handleClickClose} className="menu-mobile-change-language item-change-language">
                {/* <Image src={iconLanguage.src} alt="icon-menu-dow-mobile" /> */}
                <span className="language">English</span>
                {/* <Image src={iconMenuDow.src} alt="icon-menu-dow-mobile" /> */}
              </a>
              <ul className={action ? "grid wide list-language show-list-language" : "grid wide list-language"}>
                <li className="language-item">English</li>
                <li className="language-item">Français</li>
                <li className="language-item">中国人</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuMobile;
