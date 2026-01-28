import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  bege: '#FFF8F2',
  rosa: '#E66767',
  begeEscuro: '#FFEBD9'
}

export const breakpoint = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing:  border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
        border: none;
    }
    body {
        background-color: ${cores.bege};
        color: ${cores.rosa};
    }

    .container {
      max-width: 1024px;
      width: 100%;
      margin: 0 auto;

      @media (max-width: ${breakpoint.desktop}) {
      max-width: 80%;
      }
    }

    .modal-overlay {
      background:rgba(0,0,0,0.5);
    }
`
