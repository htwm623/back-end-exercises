import patientsData from "../../data/patients";
import {Patient, PublicPatient, NewPatient} from "../types";
import {v1 as uuid} from 'uuid'

const getAllPatients = (): Patient[] => {
  return patientsData
}

const getPublicPatients = (): PublicPatient[] => {
  return patientsData.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id, name, dateOfBirth, gender, occupation
  }))
}
const addNewPatient = (patient: NewPatient): PublicPatient => {
  const newPatient = {...patient, id: uuid()}
  return newPatient
}

export default {
  getAllPatients,
  getPublicPatients,
  addNewPatient
}