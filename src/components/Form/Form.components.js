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
  width: 100%;
  margin-top: .25rem;
  padding: .375rem .75rem;
  border: none;
  outline: none;
  box-shadow: none;
  border: 2px solid black;
  border-radius: 3px;
  transition: all 0.3s ease;
  &:focus {
    border: 2px solid rgba(0,0,200,0.4);
    outline: none;
    box-shadow: none;
  }
  &:focus:invalid {
    border: 2px solid rgba(200, 0, 0, 0.4);
  }
  &:invalid {
    outline: none;
    box-shadow: none;
  }

`
export const TextInput = styled.input`
  width: 100%;
  margin-top: .25rem;
  border: none;
  outline: none;
  box-shadow: none;
  padding: .25rem;
  border-bottom: 2px solid black;
  transition: all 0.3s ease;

  &:focus {
    border-bottom: 2px solid rgba(0,0,200,0.4);
    outline: none;
    box-shadow: none;
  }
  &:focus:invalid {
    outline: none;
    box-shadow: none;
    border-bottom: 2px solid rgba(200,0,0,0.4);
  }
  
  &:focus:valid {
    border-bottom: 2px solid rgba(0,200,0,0.4);
  }
`

export const FormLabel = styled.label`
  font-size: 14px;
  display: block;
`

export const Button = styled.button`
  color: white;
  background: lightcoral;
  border: none;
  border-radius: 4px;
  padding: .375rem 1rem;
  transition: 0.3s ease;

  &:hover {
    background: rgba(0,0,200,0.4);
  }
`

export const FormGroupRow = styled.div`
  margin-bottom: .5rem;
  display: flex;
  justify-content: flex-start;
`

export const FormGroupCol = styled.div`
  width: 50%;
  &:first-of-type {
    margin-right: 10px;
  }
`