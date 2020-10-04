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

export default function ExperienceInfo(educationInfo, setEducation, setEdit) {
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
      <Heading>Past Experience</Heading>
      <FormGroupRow>
        <FormGroupCol>
          <FormLabel>Company Name</FormLabel>
          <TextInput required type="text" />
        </FormGroupCol>
        <FormGroupCol>
          <FormLabel>Position</FormLabel>
          <TextInput name="institution"required type="text" />
        </FormGroupCol>
      </FormGroupRow>
      <FormGroupRow>
        <FormGroupCol>
          <FormLabel>From</FormLabel>
          <FormInput name="from" required type="date" />
        </FormGroupCol>
        <FormGroupCol>
          <FormLabel>Until</FormLabel>
          <FormInput name="to" required type="date" />
        </FormGroupCol>
      </FormGroupRow>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  )
}