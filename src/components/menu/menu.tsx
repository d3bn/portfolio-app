/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import ROUTES from "../../config/routes";
import MenuItem from "./menu-item";
import { MenuItemType } from "../../@types/menu";

const MenuList: MenuItemType[] = [
  {
    name: "Home",
    link: ROUTES.HOME,
  },
  {
    name: "Uses",
    link: ROUTES.NOT_FOUND,
    disabled: true,
  },
  {
    name: "Work",
    link: ROUTES.NOT_FOUND,
    disabled: true,
  },
];

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsMenuOpen((value) => !value)} css={menuCss}>
        <span css={[menuIconCss, isMenuOpen ? animationIconCss : ""]} />
      </button>

      <div css={menuWrapperCss(isMenuOpen)}>
        <ul css={menuListCss}>
          {MenuList.map((menu: MenuItemType, index: number) => (
            <MenuItem menu={menu} key={menu.name + "-" + index} />
          ))}
        </ul>
      </div>
    </>
  );
}

const menuCss = css`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
`;

const menuIconCss = css`
  position: relative;
  width: 100%;
  height: 2px;
  background: var(--black-color);
  transition: all 0.4s ease-in-out;
  border-radius: 1px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: inherit;
    transition: all 0.4s ease-in-out;
    border-radius: 1px;
  }

  &::before {
    top: -10px;
  }

  &::after {
    top: 10px;
  }
`;

const animationIconCss = css`
  transform: rotate(135deg);

  &::before,
  &::after {
    top: 0;
    transform: rotate(90deg);
  }

  &:hover {
    transform: rotate(225deg);
  }
`;

const menuWrapperCss = (isMenuOpen: boolean) => css`
  --display: none;
  --visibility: hidden;

  ${isMenuOpen &&
  `
    --display: flex;
    --visibility: visible;

    transform: scale(1);
    transition-duration: var(--menu-speed);
  `}

  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  visibility: var(--visibility);
  overflow: hidden;
  display: var(--display);
  align-items: center;
  justify-content: center;
  background: var(--overlay-color);
  border-radius: 0 35% 0 0;
  transition: all 0.4s ease;
`;

const menuListCss = css`
  list-style: none;
  padding-left: 0;
  text-align: center;
  transition: opacity 0.4s ease 0.4s;
`;

export default Menu;
