import {NewPatient, Gender} from "./types";

type Fileds = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown }

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String
}

const isDate = (date: any): boolean => {
  return Boolean(Date.parse(date))
}

const isGender = (gender: any): gender is Gender => {
  return Object.values(Gender).includes(gender)
}

const parseName = (name: any): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name')
  }
  return name
}

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error('Incorrect or missing date ')
  }
  return date
}

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing ssn ')
  }
  return ssn
}

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender')
  }
  return gender
}

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error('Incorrect or missing occupation')
  }
  return occupation
}

export const toNewPatientEntry = ({name, dateOfBirth, ssn, gender, occupation}: Fileds): NewPatient => {
  const newEntry: NewPatient = {
    name: parseName(name),
    dateOfBirth: parseDate(dateOfBirth),
    ssn: parseSsn(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation)
  }
  return newEntry
}
