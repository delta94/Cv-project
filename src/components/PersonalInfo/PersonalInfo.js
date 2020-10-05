import React from "react"

import {
  Form,
  FormLabel,
  FormGroup,
  Heading,
  Button,
  TextInput

} from "../Form/Form.components"
export default function PersonalInfo({setEdit, personalInfo, setPersonal}) {

  function submitHandler(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    console.log(name, email, phone);
    setPersonal({
      "fullname": name,
      "email": email,
      "phone": phone,
    })
    setEdit(false);
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
  }

  function validateName(e) {
    const name = e.target;
    if(name.value.includes(" ")) {
      name.setCustomValidity("");
    } else {
      name.setCustomValidity("Please enter First Name and Last Name")
    }
    name.reportValidity();
  }

  function validatePhone(e) {
    const phone = e.target;
    const regExp = /[a-zA-Z]/g;
    if(regExp.test(phone.value)) {
      phone.setCustomValidity("Phone Number cannot contain letters!")
    } else {
      phone.setCustomValidity("");
    }
    phone.reportValidity();
  }

  return (
    <Form onSubmit={submitHandler}>
      <Heading>Personal Information</Heading>
      <FormGroup>
        <FormLabel>Full Name</FormLabel>
        <TextInput defaultValue={personalInfo.fullname ? personalInfo.fullname : ""} required onChange={validateName} name="name" type="text"></TextInput>
      </FormGroup>
      <FormGroup>
        <FormLabel>Email</FormLabel>
        <TextInput defaultValue={personalInfo.email ? personalInfo.email : ""} required name="email" type="email"></TextInput>
      </FormGroup>
      <FormGroup>
        <FormLabel>Phone Number</FormLabel>
        <TextInput defaultValue={personalInfo.phone ? personalInfo.phone : ""} required onChange={validatePhone} name="phone" type="tel"></TextInput>
      </FormGroup>
      <FormGroup>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  )
}