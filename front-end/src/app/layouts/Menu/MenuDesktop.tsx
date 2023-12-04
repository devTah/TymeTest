import Link from "next/link";
import React from "react";
import LIST_MENU from "../../constants/listMenu";
import classNames from "classnames";
import { usePathname } from "next/navigation";

const MenuDesktop = () => {
  const pathname = usePathname();

  return (
    <ul className="list-menu-item">
      {LIST_MENU.map((menu, index) => (
        <li className="menu-item" key={index} style={{ display: `${menu.customStyle}` }}>
          <Link href={menu.path} className={classNames("link ", { active: pathname.toLocaleLowerCase() === menu.path })}>
            {menu.page}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuDesktop;
