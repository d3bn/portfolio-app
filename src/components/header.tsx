/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Menu from "./menu/menu";
import logoSvg from '../assets/logo.svg';

function Header() {

  return (
    <div css={wrapperCss}>
      <Link to={"/"} css={linkCss}>
        <img src={logoSvg} css={logoCss} alt="Dennis BASAN" />
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
  width: 90px;
`;

export default Header;
