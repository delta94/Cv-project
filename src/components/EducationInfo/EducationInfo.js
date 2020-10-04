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
  TextInput
} from "../Form/Form.components"

export default function EducationInfo() {
  return (
    <Form>
      <Heading>Education</Heading>
      <FormGroup>
        <FormLabel>Institution</FormLabel>
        <TextInput required type="text"></TextInput>
      </FormGroup>
      <FormGroupRow>
        <FormGroupCol>
          <FormLabel>Started</FormLabel>
          <FormInput required type="date"></FormInput>
        </FormGroupCol>
        <FormGroupCol>
          <FormLabel>Finished</FormLabel>
          <FormInput required type="date"></FormInput>
        </FormGroupCol>
      </FormGroupRow>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  )
}