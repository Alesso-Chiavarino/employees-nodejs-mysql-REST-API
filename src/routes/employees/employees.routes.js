import express from "express";
const router = express.Router();
import { getEmployees, createEmployees, updateEmployees, deleteEmployees, getEmployee } from '../../controllers/employees.controler.js'

//Routes

router.get('/', getEmployees)

router.get('/:id', getEmployee)

router.post('/', createEmployees)

router.patch('/:id', updateEmployees)

router.delete('/:id', deleteEmployees)

export default router;