/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import BannerImg from "../assets/banner.svg";

function Home() {
  return (
    <div css={containerCss}>
      <div css={wrapperCss}>
        <h1>Hi, I'm Dennis.</h1>
        <p>
          I am a Senior Software Engineer specialize in building exceptional{" "}
          <strong>web</strong> and <strong>mobile</strong> applications with
          cutting-edge web technologies. Let's collaborate on your next project
          and create a seamless user experience across all devices.
        </p>
        <p>
          Currently i work at{" "}
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://staizen.com"
          >
            <strong>Staizen</strong>
          </Link>
          , as part of Frontend Community building web application for different
          companies we are working with.
        </p>
      </div>
      <img
        src={BannerImg}
        title="Dennis Basan | Software Developer"
        css={bannerCss}
      />
    </div>
  );
}

const containerCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3em;

  > * {
    flex: 1 1 0px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
`;

const bannerCss = css`
  width: 100%;
`;

export default Home;
