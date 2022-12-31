import  express  from "express";
import employeesRoutes from './employees/employees.routes.js'
import { ping } from "../controllers/app.controller.js";

const router = express.Router();

router.use('/employeer', employeesRoutes);

router.get('/ping', ping);

export default router;