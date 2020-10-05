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
  min-height: 70%;
`

export const InfoSection = styled.section`
  border-bottom: 1px solid black;
  padding-bottom: .5rem;
  &:last-of-type {
    border-bottom: none;
    padding: 0;
  }
`

export const Heading = styled.h3`
  padding: .5rem 0;
`

export const EditButton = styled.button`
  padding: .5rem 1.25rem;
  border-radius: 5px;
  border: none;
  background: lightcoral;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0,0,200,0.4);
  }
`

export const Bold = styled.span`
  font-weight: bold;
`