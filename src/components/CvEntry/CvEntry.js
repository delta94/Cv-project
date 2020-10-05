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
import { EducationInfo as EditEducationInfo } from "../index"
import { ExperienceInfo as EditExperienceInfo } from "../index"

export default function CvEntry({
  isEditPersonal, 
  setEditPersonal, 
  personalInfo, 
  setPersonal,
  isEditEducation,
  setEditEducation,
  educationInfo,
  setEducation,
  isEditExperience,
  setEditExperience,
  experienceInfo,
  setExperience
}) {
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  function toggleEditPersonal() {
    setEditPersonal(!isEditPersonal)
  }

  function toggleEditEducation() {
    setEditEducation(!isEditEducation)
  }

  function toggleEditExperience() {
    setEditExperience(!isEditExperience)
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
            <EditButton onClick={toggleEditEducation}>Edit</EditButton>
          </InfoSection>
        }
        {
          isEditEducation &&
          <EditEducationInfo setEdit={setEditEducation} setEducation={setEducation} educationInfo={educationInfo}></EditEducationInfo>
        }
        {
          !isEmpty(experienceInfo) && !isEditExperience && 
          <InfoSection>
            <Heading>Past Experience</Heading>
            <Row>Role: {experienceInfo.role}</Row>
            <Row>From: {experienceInfo.from.toLocaleString()}</Row>
            <Row>To: {experienceInfo.to.toLocaleString()}</Row>
            <EditButton onClick={toggleEditExperience}>Edit</EditButton>
          </InfoSection>
        }
        {
          isEditExperience &&
          <EditExperienceInfo setEdit={setEditExperience} setExperience={setExperience} experienceInfo={experienceInfo}></EditExperienceInfo>
        }
      </Entry>
    </>
  )
}