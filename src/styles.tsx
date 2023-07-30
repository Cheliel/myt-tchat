import { createGlobalStyle, DefaultTheme } from 'styled-components'


export const GlobalStyle = createGlobalStyle<DefaultTheme>`

@font-face {
   font-family: 'Oxygen';
   src: url(./assets/fonts/Oxygen/Oxygen-Regular.ttf) format('truetype');
   /* Ajoutez les autres formats de fichiers de police si nécessaire */
 }

 body {
   font-family: 'Oxygen', sans-serif;
 }



 html, body {
    margin: 0;
    padding: 0;
 }


 ReactVirtualized__Table {

 }

 ReactVirtualized__Table__row {
  margin: 200px;
 }

`;
