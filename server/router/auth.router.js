import { Router } from "express";
import loginController from "../controller/login.controller.js";


const router = Router()

router.post('/login', loginController)

export default router