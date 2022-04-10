import { createGlobalStyle } from 'styled-components'

import { colors } from './colors'

export const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: Afterglow;
        src: url('/fonts/Afterglow-Regular.woff2') format('woff2');
    }

    @font-face {
        font-family: EllianaSamantha;
        src: url('/fonts/elliana-samantha.woff2') format('woff2');
    }

    @font-face {
        font-family: Poppins;
        src: url('/fonts/Poppins-Regular.woff2') format('woff2');
    }

    :root{}

    html,
    body {
    padding: 0;
    margin: 0;
    font-family: Poppins, EllianaSamantha, Afterglow, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    scroll-behavior: smooth;
    background-color: ${colors.BridalHealth};
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: all ease 0.2s;
        font-weight: 600;
        position: relative;

        ::before {
            content: ""; 
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -2px;
            left: 0;
            background-color: ${colors.Black};
            visibility: hidden;
            transform: scaleX(0);
            transition: all 0.3s ease-in-out 0s; 
        }   

        :hover{
            ::before {
                visibility: visible;
                transform: scaleX(0.8);
             }   
          
        }
    }


    /* (A) ALL ORIENTATION - SHOW CONTENT HIDE MESSAGE (TAB AND ABOVE) */
    @media only screen and (min-width: 768px) {
        #orientation-error { display:none; }
        #app { display:block; }
    }

    /* (B) WRONG ORIENTATION - SHOW MESSAGE HIDE CONTENT (MOBILE) */
    @media only screen and (max-width: 960px) and (orientation:landscape) {
        #orientation-error { display:block; }
        #app { display:none; }
    }
    
    /* (C) CORRECT ORIENTATION - SHOW CONTENT HIDE MESSAGE (MOBILE) */
    @media only screen and (max-width: 960px) and (orientation:portrait) {
        #orientation-error { display:none; }
        #app { display:block; }
    }

    b, strong {
        font-family: inherit;
        font-weight: 600;
    }

    ul{
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    hr{
        margin: 0;
        padding: 0;
    }

`
