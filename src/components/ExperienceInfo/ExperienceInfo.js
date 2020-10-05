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

export default function ExperienceInfo({ setEdit, experienceInfo, setExperience}) {
  function submitHandler(e) {
    e.preventDefault();
    const company = e.target.company.value;
    const role = e.target.role.value;
    const from = e.target.from.value;
    const to = e.target.to.value;
    setExperience({
      company,
      role,
      from,
      to,
    })
    setEdit(false);
    e.target.company.value = "";
    e.target.role.value = "";
    e.target.from.value = "";
    e.target.to.value = "";
  }
  return (
    <Form onSubmit={submitHandler}>
      <Heading>Past Experience</Heading>
      <FormGroupRow>
        <FormGroupCol>
          <FormLabel>Company Name</FormLabel>
          <TextInput defaultValue={experienceInfo.company} name="company" required type="text" />
        </FormGroupCol>
        <FormGroupCol>
          <FormLabel>Position</FormLabel>
          <TextInput defaultValue={experienceInfo.role} name="role"required type="text" />
        </FormGroupCol>
      </FormGroupRow>
      <FormGroupRow>
        <FormGroupCol>
          <FormLabel>From</FormLabel>
          <FormInput defaultValue={experienceInfo.from} name="from" required type="date" />
        </FormGroupCol>
        <FormGroupCol>
          <FormLabel>Until</FormLabel>
          <FormInput defaultValue={experienceInfo.to} name="to" required type="date" />
        </FormGroupCol>
      </FormGroupRow>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  )
}