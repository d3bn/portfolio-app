/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import logoSvg from "../assets/logo.svg";
import ROUTES from "../config/routes";

function NotFound() {
  return (
    <div css={wrapperCss}>
      <img src={logoSvg} css={logoCss} alt="Dennis Basan" loading="lazy" />
      <h3>Daddy, chill.</h3>
      <p>The page you seek is in another castle. Keep exploring!</p>
      <p>Open this <Link to={ROUTES.HOME}>Door</Link>.</p>
    </div>
  );
}

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1em;
  height: 100%;

  h3, p {
    margin: 0.3em;
  }
`;

const logoCss = css`
  width: ${150 / 16}em;
  padding: 1em;
`;

export default NotFound;
