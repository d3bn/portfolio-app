/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuItemType } from "../../@types/menu";

interface MenuItemProps {
  menu: MenuItemType;
}

function MenuItem({ menu }: MenuItemProps): JSX.Element {
  const location = useLocation();

  return (
    <li css={wrapperItemCss}>
      <NavLink
        to={menu.link ?? ""}
        css={[linkCss(menu.disabled ?? false), location.pathname === menu.link ? activeMenuCss : ""]}
        aria-disabled={menu.disabled}
      >
        {menu.name}
        {menu.disabled && <small css={disabledTextCss}>coming soon</small>}
      </NavLink>
    </li>
  );
}

const wrapperItemCss = css`
  padding: 0.5em;
`;

const linkCss = (disabled: boolean) => css`
  color: var(${disabled ? '--disabled-color': '--black-color'});
  text-decoration: none;
  transition: color 0.4s ease;
  font-size: 18px;
  font-weight: 600;
`;

const activeMenuCss = css`
  text-decoration: line-through;
`;

const disabledTextCss = css`
  font-size: 0.7rem;
  vertical-align: super;
  font-weight: 400;
  margin-left: 0.3em;
`;

export default MenuItem;
