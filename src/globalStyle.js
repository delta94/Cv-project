import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 1rem;
`