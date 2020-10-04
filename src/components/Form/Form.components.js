import styled from 'styled-components';

export const Heading = styled.h3`
  margin-bottom: .25rem;
`

export const Form = styled.form`

`

export const FormGroup = styled.div`
  margin: 10px 0;
`

export const FormInput = styled.input`
  margin-top: .25rem;
  padding: .375rem .75rem;
  border: none;
  border-radius: 3px;

`
export const FormLabel = styled.label`
  display: block;
`

export const Button = styled.button`
  color: white;
  background: #101522;
  border: none;
  border-radius: 4px;
  padding: .375rem 1rem;
  transition: 0.3s ease;

  &:hover {
    color: #101522;
    background: white;
  }
`

export const FormGroupRow = styled.div`
  margin-bottom: .5rem;
  display: flex;
  justify-content: flex-start;
`

export const FormGroupCol = styled.div`
  &:first-of-type {
    margin-right: 10px;
  }
`