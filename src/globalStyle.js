import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
export const Container = styled.div`
  min-height: 100vh;
  padding: 1rem;
`