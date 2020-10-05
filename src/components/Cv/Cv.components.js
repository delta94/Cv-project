import styled from "styled-components"

export const CvContainer = styled.div`
  z-index: 2;
  max-width: 1300px;
  min-height: 70vh;
  margin: auto;
  display: flex;
  border: 1px solid black;
  border-radius: 5px;

  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const Form = styled.div`
  padding: 1rem;
  max-width: 50%;
  border-right: 1px solid black;

  @media screen and (max-width: 960px) {
    max-width: 100%;
    border: none;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid black;
  }
`

export const ActualCv = styled.div`
  padding: 1rem;
    width: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

