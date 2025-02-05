import { Router } from "express"
import { getUserById, getUsers, deleteUser, updatePassword, updateUser, updateImage } from "./user.controller.js"
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator } from "../middlewares/user-validators.js"

const router = Router()

router.get("/findUser/:uid", getUserByIdValidator, getUserById)

router.get("/", getUsers)

router.delete("/deleteUser/:uid", deleteUserValidator, deleteUser)

router.patch("/updatePassword/:uid", updatePasswordValidator, updatePassword)

router.put("/updateUser/:uid", updateUserValidator, updateUser)

router.patch("/updateImage/:uid", updateImage)

export default router
