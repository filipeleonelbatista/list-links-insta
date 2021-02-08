import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle `
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 };
 
 html, body, #root {
   height: 100%;
 };

 *, button, input {
   border:0;
   outline:0;
   font-family: 'Roboto', sans-serif;
 };
 :root {
  --primaryDark: #111;
  --secondary: #121212;
  --tertiary: #151515;
  --quaternary: #0d0d0d;
  
  --darkbutton: rgba(17, 17, 17, 0.1);
  --darkShadow: rgba(0, 0, 0, 0.25);

  --purplePrimary: #7300da;
  --purpleSecondary: rgba(115, 0, 218, 0.6);
  --bluePrimary: #39adcc;
  --blueSecondary: rgba(57, 173, 204, 0.6);

  --white: #f1f2f2;
  --grey: #a6a3b3;
}
`