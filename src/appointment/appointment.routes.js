import { Router } from "express";
import { getAppointments, saveAppointment, updateAppointment, cancellAppointment } from "./appointment.controller.js";
import { createAppointmentValidator } from "../middlewares/appointment-validators.js";

const router = Router();

router.post("/createAppointment", createAppointmentValidator, saveAppointment);

router.get("/", getAppointments)

router.put("/updateAppointment/:uid", createAppointmentValidator, updateAppointment)

router.patch("/cancellAppointment/:uid", cancellAppointment)

export default router;