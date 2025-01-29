import{u as c,r as o,R as l,j as g,a as s,l as d,c as e}from"./index-DO6rTP14.js";function x({error:t,resetErrorBoundary:n}){const i=c(),a=o.useCallback(()=>{if(window.history.length){i(l.HOME);return}n==null||n()},[i,n]);return g("div",{css:h,children:[s("img",{src:d,css:p,alt:"Error Page!",loading:"lazy"}),s("h3",{children:"404"}),s("p",{css:m,children:(t==null?void 0:t.message)??"The page you seek is in another castle. Keep exploring!"}),s("button",{onClick:()=>a(),css:u,children:s("strong",{children:"Go Back"})}),"."]})}const h=e`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1em;
  height: 100%;

  h3,
  p {
    margin: 0.3em;
  }
`,p=e`
  width: ${150/16}em;
  padding: 1em;
`,m=e`
  max-width: 50em;
  text-align: center;
`,u=e`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
`;export{x as default};
