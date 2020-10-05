import React from "react"
import {
  Title,
  InfoSection,
  Entry,
  Heading,
  Row,
  EditButton,
  Bold,
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
            <Row>Full Name: <Bold>{personalInfo.fullname}</Bold></Row>
            <Row>Email: <Bold>{personalInfo.email}</Bold></Row>
            <Row>Phone Number: <Bold>{personalInfo.phone}</Bold></Row>
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
            <Row>Institution: <Bold>{educationInfo.institution}</Bold></Row>
            <Row>From: <Bold>{educationInfo.from}</Bold></Row>
            <Row>To: <Bold>{educationInfo.to}</Bold></Row>
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
            <Row>Company Name: <Bold>{experienceInfo.company}</Bold></Row>
            <Row>Role: <Bold>{experienceInfo.role}</Bold></Row>
            <Row>From: <Bold>{experienceInfo.from.toLocaleString()}</Bold></Row>
            <Row>To: <Bold>{experienceInfo.to.toLocaleString()}</Bold></Row>
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