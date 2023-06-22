import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }
  
  html {
    font-family: 'NanumSquare', sans-serif;
  }

  body {
    
  }

  button {

  }

  ul, li {
    list-style: none;
  }

  pre {
   
  }

  code {
   
  }
  img {
			
  }
`;

export default GlobalStyles;
