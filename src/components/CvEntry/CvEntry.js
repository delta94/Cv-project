import React from "react"

import {
  Title,
  PersonalInfo,
  Entry,
  Heading
} from "./CvEntry.components"

export default function CvEntry({personalInfo}) {
  return (
    <>
      <Title>Cv Entry</Title>
      <Entry>
      {
        personalInfo &&
        <PersonalInfo>
          <Heading>Personal Information</Heading>
          {personalInfo.fullname}
          {personalInfo.email}
          {personalInfo.phone}
        </PersonalInfo>
      }
      </Entry>
    </>
  )
}