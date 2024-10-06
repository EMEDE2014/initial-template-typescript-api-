import { Request, Response } from "express"
import User from '../schemas/user';
class UserController{

    async index(req: Request,res: Response): Promise<Response>{
        const user = User.create(req.body)

        return res.json(user);
    }

}


export default new UserController