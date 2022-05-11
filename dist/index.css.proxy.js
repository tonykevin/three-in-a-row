// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root{--color-page-background:#d7cdcc;--color-page-text:#292f36;--color-game-title:#bd1e1e;--color-game-text:#17255a;--global-fonts:\"Permanent Marker\",sans-serif}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}blockquote,body,caption,dd,dl,fieldset,figure,form,h1,h2,h3,h4,h5,h6,hr,legend,ol,p,pre,table,td,th,ul{margin:0;padding:0}li>ol,li>ul{margin-bottom:0}body{background-color:#d7cdcc;background-color:var(--color-page-background);color:#292f36;color:var(--color-page-text);font-family:Permanent Marker,sans-serif;font-family:var(--global-fonts)}.o-wrapper{margin-inline:auto;width:min(100% - 2rem,70rem)}.c-game{grid-template-columns:1fr;grid-template-rows:20vh auto}.c-game,.c-game__area{align-items:center;display:grid;justify-items:center}.c-game__area{--box-size:min(calc(100vw - 2rem),27rem);grid-gap:1rem;gap:1rem;grid-template:repeat(3,1fr) /repeat(3,1fr);height:var(--box-size);width:var(--box-size)}.c-game__text{color:#17255a;color:var(--color-game-text);font-size:2.6rem}@media (min-width:40em){.c-game__text{font-size:4.6rem}}.c-game__title{color:#bd1e1e;color:var(--color-game-title);font-size:2.2rem;text-decoration:underline}@media (min-width:64em){.c-game__title{font-size:2.4rem}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}