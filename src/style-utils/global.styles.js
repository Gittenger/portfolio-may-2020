import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html{
    font-size: 62.5%;
}

body{
    font-size: 1.5rem;
    background-color: ${({ theme: { colors } }) => colors.white};
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
`;

export default GlobalStyles;
