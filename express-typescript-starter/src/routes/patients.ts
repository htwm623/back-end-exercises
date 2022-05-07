import express from "express";
import patientService from "../services/patientService";

import {toNewPatientEntry} from "../utils";
const router = express.Router()

router.get('/', (_req, res) => {
  res.json(patientService.getPublicPatients())
})

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatientEntry(req.body)
    const patient = patientService.addNewPatient(newPatient)
    res.json(patient)
  } catch (err) {
    // @ts-ignore
    res.status(400).send(err.message)
  }

})

export default router