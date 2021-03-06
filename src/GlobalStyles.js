import { createGlobalStyle } from "styled-components";
import { primaryColor } from "./colors";

const GlobalStyle = createGlobalStyle`
	*,
	*::before,
  *::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	html {
		font-size: 62.5%;
	}
	body {
		font-size: 1.4rem;
		font-family: "Lato", sans-serif;
		line-height: 1.3;
		background: #5dd65d;
		color: ${primaryColor};
		height: 100vh;
  }

#root {
	height: 100%;
	
	}
	a {
		text-decoration: none;
	}
	input,
	textarea {
		font-family: "Lato", sans-serif;
		background-color: transparent;
	}
	
	ul {
		list-style-type: none;
	}
`;

export default GlobalStyle;
