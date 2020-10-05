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

export default function EducationInfo({educationInfo, setEducation, setEdit}) {

  function submitHandler(e) {
    e.preventDefault();
    const institution = e.target.institution.value;
    const from = e.target.from.value;
    const to = e.target.to.value;
    setEducation({
      "institution": institution,
      "from": from,
      "to": to,
    })
    setEdit(false)
  }

  return (
    <Form onSubmit={submitHandler}>
      <Heading>Education</Heading>
      <FormGroup>
        <FormLabel>Institution</FormLabel>
        <TextInput defaultValue={educationInfo.institution ? educationInfo.institution : ""} name="institution" required type="text"></TextInput>
      </FormGroup>
      <FormGroupRow>
        <FormGroupCol>
          <FormLabel>Started</FormLabel>
          <FormInput defaultValue={educationInfo.from ? educationInfo.from : ""} name="from" required type="date"></FormInput>
        </FormGroupCol>
        <FormGroupCol>
          <FormLabel>Finished</FormLabel>
          <FormInput defaultValue={educationInfo.to ? educationInfo.to : ""} name="to" required type="date"></FormInput>
        </FormGroupCol>
      </FormGroupRow>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  )
}