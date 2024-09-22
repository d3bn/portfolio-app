/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer css={wrapperCss}>
      <Link
        to="https://www.linkedin.com/in/dennisbasan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>LinkedIn</strong>
      </Link>

      <span>Made while drunk.</span>
    </footer>
  );
}

const wrapperCss = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Footer;
