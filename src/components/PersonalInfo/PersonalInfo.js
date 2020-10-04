import React from "react"

import {
  Form,
  FormLabel,
  FormInput,
  FormGroup,
  Heading,
  Button

} from "../Form/Form.components"
export default function PersonalInfo() {
  return (
    <Form>
      <Heading>Personal Information</Heading>
      <FormGroup>
        <FormLabel>Full Name</FormLabel>
        <FormInput
          type="text"></FormInput>
      </FormGroup>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <FormInput
          type="email"></FormInput>
      </FormGroup>
      <FormGroup>
        <FormLabel>Phone Number</FormLabel>
        <FormInput
          type="tel"></FormInput>
      </FormGroup>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  )
}