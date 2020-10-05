import React, { useState } from "react"

import {
  CvContainer,
  Form,
  ActualCv
} from "./Cv.components"

import {
  PersonalInfo,
  EducationInfo,
  ExperienceInfo,
  CvEntry,
} from "../index"

export default function Cv() {
  const [isEditPersonal, setEditPersonal] = useState(false)
  const [isEditEducation, setEditEducation] = useState(false)
  const [isEditExperience, setEditExperience] = useState(false)
  const [personalInfo, setPersonal] = useState({})
  const [educationInfo, setEducation] = useState({})
  const [experienceInfo, setExperience] = useState({})
  return (
    <CvContainer>
      <Form>
        <PersonalInfo
          setEdit={setEditPersonal}
          personalInfo={personalInfo}
          setPersonal={setPersonal}
        />
        <EducationInfo 
          setEdit={setEditEducation}
          educationInfo={educationInfo}
          setEducation={setEducation}
        />
        <ExperienceInfo
          setEdit={setEditExperience}
          experienceInfo={experienceInfo}
          setExperience={setExperience}
        />
      </Form>
      <ActualCv>
        <CvEntry
          isEditPersonal={isEditPersonal}
          setEditPersonal={setEditPersonal} 
          setPersonal={setPersonal} 
          personalInfo={personalInfo}
          isEditEducation={isEditEducation}
          setEditEducation={setEditEducation} 
          setEducation={setEducation} 
          educationInfo={educationInfo}
          isEditExperience={isEditExperience}
          setEditExperience={setEditExperience}
          setExperience={setExperience}
          experienceInfo={experienceInfo}
          />
      </ActualCv>
    </CvContainer>
  )
}