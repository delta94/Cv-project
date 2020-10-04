import React from "react"

import {
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  Heading,
  Button,
  FormGroupCol,
  FormGroupRow,
  TextInput
} from "../Form/Form.components"

export default function ExperienceInfo() {
  return (
    <Form>
      <Heading>Past Experience</Heading>
      <FormGroupRow>
        <FormGroupCol>
          <FormLabel>Company Name</FormLabel>
          <TextInput type="text" />
        </FormGroupCol>
        <FormGroupCol>
          <FormLabel>Position</FormLabel>
          <TextInput type="text" />
        </FormGroupCol>
      </FormGroupRow>
      <FormGroupRow>
        <FormGroupCol>
          <FormLabel>From</FormLabel>
          <FormInput type="date" />
        </FormGroupCol>
        <FormGroupCol>
          <FormLabel>Until</FormLabel>
          <FormInput type="date" />
        </FormGroupCol>
      </FormGroupRow>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  )
}