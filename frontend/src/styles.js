import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
  /* Grey Shades */
  --color-grey-0: rgb(238, 238, 238);
  --color-grey-50: rgb(196, 196, 196);
  --color-grey-100: rgb(139, 139, 139);
  --color-grey-200: rgb(121, 120, 120);
  --color-grey-300: rgb(105, 105, 105);
  --color-grey-400: rgb(58, 58, 58);
  --color-grey-500: rgb(26, 25, 25);

  /* Blue Shades */
  --color-blue-50: rgb(229, 242, 255);
  --color-blue-100: rgb(187, 223, 255);
  --color-blue-200: rgb(144, 194, 255);
  --color-blue-300: rgb(98, 161, 255);
  --color-blue-400: rgb(49, 130, 255);
  --color-blue-500: rgb(0, 99, 255);

  /* Green Shades */
  --color-green-50: rgb(229, 255, 229);
  --color-green-100: rgb(187, 255, 187);
  --color-green-200: rgb(144, 255, 144);
  --color-green-300: rgb(98, 255, 98);
  --color-green-400: rgb(49, 255, 49);
  --color-green-500: rgb(9, 192, 9);
  --color-green-600: rgb(7, 151, 7);

  /* Sky Blue Shades */
  --color-skyblue-50: rgb(224, 243, 255);
  --color-skyblue-100: rgb(179, 224, 255);
  --color-skyblue-200: rgb(134, 206, 255);
  --color-skyblue-300: rgb(89, 187, 255);
  --color-skyblue-400: rgb(44, 169, 255);
  --color-skyblue-500: rgb(0, 150, 255);

  --color-white: rgb(255, 255, 255);
  --color-black: rgb(0,0,0);
  --color-black-50: rgb(32, 32, 32);
  --color-black-100: rgb(70, 69, 69);



  /* container */
  --container-width:90%;
  --container-margin:0 auto;

  /* Box Shadow */
  --box-shadow-sm: 1px 1px 2px 0px var(--color-grey-200);
  --box-shadow-md: 0px 0px 4px 0px var(--color-grey-400);
  --box-shadow-lg: 0px 0px 6px 0px var(--color-white);
}

*, *::after, *::before{
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

body{
    background-color:rgb(158, 169, 170);
}
`;

export default GlobalStyles;
