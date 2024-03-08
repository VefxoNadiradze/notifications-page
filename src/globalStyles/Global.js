import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap');

   *{
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   body{
        min-height: 100vh;
        font-family: "Plus Jakarta Sans", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(247, 250, 253);
        padding: 63px 0 89px;
   }
`;
