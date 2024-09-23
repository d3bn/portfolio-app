/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

function AppProvider() {
  return (
    <div css={containerCss}>
      <Header />
      <div css={wrapperCss}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

const containerCss = css`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  height: 100%;

  > * {
    padding: 2em;
  }

  @media (min-width: 1024px) {
    > * {
      padding: 3em;
    }
  }
`;

const wrapperCss = css`
  flex-grow: 1;
`;

export default AppProvider;
