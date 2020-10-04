import React from "react"

import {
  Form,
  FormLabel,
  FormInput,
  FormGroup,
  Heading,
  Button,
  TextInput

} from "../Form/Form.components"
export default function PersonalInfo() {
  return (
    <Form>
      <Heading>Personal Information</Heading>
      <FormGroup>
        <FormLabel>Full Name</FormLabel>
        <TextInput type="text"></TextInput>
      </FormGroup>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <TextInput
          type="email"></TextInput>
      </FormGroup>
      <FormGroup>
        <FormLabel>Phone Number</FormLabel>
        <TextInput
          type="tel"></TextInput>
      </FormGroup>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  )
}