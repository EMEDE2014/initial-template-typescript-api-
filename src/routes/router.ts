import { Router } from "express";
import UserControllers from "../Controllers/UserControllers";

const route = Router();

route.get('/users',UserControllers.index )

export default route;