/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div css={wrapperCss}>
      <h1>Hi, I'm Dennis.</h1>
      <p>
        I am a Senior Software Engineer specialize in building exceptional{" "}
        <strong>web</strong> and <strong>mobile</strong> applications with
        cutting-edge web technologies. Let's collaborate on your next project
        and create a seamless user experience across all devices.
      </p>
      <p>
        Currently i work at <Link
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
  );
}

const wrapperCss = css`
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  
  @media (min-width: 1024px) {
    width: calc(100vw / 3);
  }
`;

export default Home;
