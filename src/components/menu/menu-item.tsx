/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import { MenuItemType } from "../../@types/menu";

interface MenuItemProps {
  menu: MenuItemType;
  onClick: () => void;
}

function MenuItem({ menu, onClick }: MenuItemProps) {
  const location = useLocation();

  return (
    <li css={[linkCss(menu.disabled ?? false), wrapperItemCss]}>
      {menu.disabled || menu.link === undefined ? (
        <span aria-disabled={menu.disabled} aria-label={menu.name}>
          {menu.name}
          <small css={disabledTextCss}>coming soon</small>
        </span>
      ) : (
        <NavLink
          to={menu.link}
          onClick={onClick}
          css={location.pathname === menu.link ? activeMenuCss : ""}
          aria-label={menu.name}
        >
          {menu.name}
        </NavLink>
      )}
    </li>
  );
}

const wrapperItemCss = css`
  line-height: 4em;
`;

const linkCss = (disabled: boolean) => css`
  > * {
    color: var(${disabled ? "--disabled-color" : "--dark-color"});
    text-decoration: none;
    transition: color 0.4s ease;
    font-size: 26px;
    font-weight: 600;
    cursor: ${disabled ? "not-allowed" : "pointer"};
  }
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
