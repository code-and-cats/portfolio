import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  overflow-x: hidden;
}

p {
  font-family: 'EB Garamond', serif;
  font-size: 22px;
  line-height: 29px;
}

h1,
h2 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}

h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

`
export default GlobalStyles
