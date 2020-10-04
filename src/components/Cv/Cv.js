import React from "react"

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
  return (
    <CvContainer>
      <Form>
        <PersonalInfo />
        <EducationInfo />
        <ExperienceInfo />
      </Form>
      <ActualCv>
        <CvEntry>

        </CvEntry>
      </ActualCv>
    </CvContainer>
  )
}