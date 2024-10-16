/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logoSvg from '../assets/logo.svg';
import ROUTES from "../config/routes";
import Menu from "./menu/menu";

function Header() {

  return (
    <div css={wrapperCss}>
      <Link to={ROUTES.HOME} css={linkCss} aria-label="Dennis BASAN">
        <img src={logoSvg} css={logoCss} loading="lazy" alt="Dennis BASAN" />
      </Link>
      <Menu />
    </div>
  );
}

const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const linkCss = css`
  text-decoration: none;
  color: var(--primary-color);
`;

const logoCss = css`
  width: 60px;
  vertical-align: middle;
`;

export default Header;
