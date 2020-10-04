import React from "react"

import {
  Form,
  FormGroup,
  FormInput,
  FormLabel,
  Heading,
  Button,
  FormGroupRow,
  FormGroupCol,
} from "../Form/Form.components"

export default function EducationInfo() {
  return (
    <Form>
      <Heading>Education</Heading>
      <FormGroup>
        <FormLabel>Institution</FormLabel>
        <FormInput type="text"></FormInput>
      </FormGroup>
      <FormGroupRow>
        <FormGroupCol>
          <FormLabel>Started</FormLabel>
          <FormInput type="date"></FormInput>
        </FormGroupCol>
        <FormGroupCol>
          <FormLabel>Finished</FormLabel>
          <FormInput type="date"></FormInput>
        </FormGroupCol>
      </FormGroupRow>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  )
}