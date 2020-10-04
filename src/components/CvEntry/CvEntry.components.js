import styled from "styled-components"

export const Title = styled.h3`
  text-align: center;
`

export const Row = styled.div`
  margin-bottom: 1rem;
  &:first-of-type {
    margin-top: .5rem;
  }
`

export const Entry = styled.div`
  padding: .5rem;
  background: rgba(200,0,0,.2);
  min-height: 70%;
`

export const InfoSection = styled.section`
  padding: .5rem;
  background: rgba(0,200,0,.25);
`

export const Heading = styled.h3`
  padding: .5rem 0;
  border-bottom: 1px solid black;
`

export const EditButton = styled.button`
  padding: .375rem .75rem;
  border-radius: 5px;
  border: none;
`