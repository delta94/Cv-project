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
  const [personalInfo, setPersonal] = useState({})
  return (
    <CvContainer>
      <Form>
        <PersonalInfo
          personalInfo={personalInfo}
          setPersonal={setPersonal}
        />
        <EducationInfo />
        <ExperienceInfo />
      </Form>
      <ActualCv>
        <CvEntry personalInfo={personalInfo}/>
      </ActualCv>
    </CvContainer>
  )
}