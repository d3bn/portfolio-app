import{j as i,a as e,l as o,c as s}from"./index-Ccu0LTQx.js";function m({error:n,resetErrorBoundary:r}){return i("div",{css:a,children:[e("img",{src:o,css:c,alt:"Error Page!",loading:"lazy"}),e("h3",{children:"The page has been assimilated. Resistance is futile."}),e("p",{css:l,children:n.message}),e("button",{onClick:t=>{t.preventDefault(),r()},css:d,children:e("strong",{children:"Destroy"})}),"."]})}const a=s`
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
`,c=s`
  width: ${150/16}em;
  padding: 1em;
`,l=s`
  max-width: 50em;
  text-align: center;
`,d=s`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font: inherit;
`;export{m as default};
