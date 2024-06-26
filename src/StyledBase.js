import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,

  
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

 
  body {
    width: 1400px;
    background-color: #f5f4f4;
   
    
  }

 
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

 
  ol,
  ul {
    list-style: none;
  }

 
  a {
    text-decoration: none;
  }


  button,
  input,
  optgroup,
  select,
  textarea {
    cursor: pointer;
  }


  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }


  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  
  button,
  input[type='button'],
  input[type='reset'],
  input[type='submit'] {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }


  input[type='search'] {
    -webkit-appearance: textfield;
    appearance: textfield;
  }

 
`