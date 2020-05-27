import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
    overflow: hidden;
}

body{
    font-size: 1.5rem;
    background-color: ${({ theme: { colors } }) => colors.white};
    font-family: 'Exo', sans-serif;
    position: relative;
}

a{
    text-decoration: none;
}

a:link,
a:visited{
    color: unset;
}

ul, li {
    list-style: none;
}

button {
    font-family: inherit;
}
`;

export default GlobalStyles;
