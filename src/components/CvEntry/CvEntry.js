import React from "react"
import {
  Title,
  InfoSection,
  Entry,
  Heading,
  Row,
  EditButton,
} from "./CvEntry.components"
import { PersonalInfo as EditPersonalInfo } from "../index"

export default function CvEntry({
  isEditPersonal, 
  setEditPersonal, 
  personalInfo, 
  setPersonal,
  isEditEducation,
  setEditEducation,
  educationInfo,
  setEducation,
}) {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function toggleEditPersonal() {
    setEditPersonal(!isEditPersonal)
  }
  return (
    <>
      <Title>Cv Entry</Title>
      <Entry>
        {
          !isEmpty(personalInfo) && !isEditPersonal &&
          <InfoSection>
            <Heading>Personal Information</Heading>
            <Row>Full Name: {personalInfo.fullname}</Row>
            <Row>Email: {personalInfo.email}</Row>
            <Row>Phone Number: {personalInfo.phone}</Row>
            <EditButton onClick={toggleEditPersonal}>Edit</EditButton>
          </InfoSection>      
        }
        {
          isEditPersonal &&
          <EditPersonalInfo setEdit={setEditPersonal} setPersonal={setPersonal} personalInfo={personalInfo}/>
        }
        {
          !isEmpty(educationInfo) && !isEditEducation &&
          <InfoSection>
            <Heading>Education</Heading>
            <Row>Institution: {educationInfo.institution}</Row>
            <Row>From: {educationInfo.from}</Row>
            <Row>To: {educationInfo.to}</Row>
          </InfoSection>
        }
      </Entry>
    </>
  )
}