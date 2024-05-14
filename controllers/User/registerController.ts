import connection from '../../config/configDB'
import { Request, Response } from 'express'
import UserServeice from '../../services/UserService';
import User from '../../dto/UserDto';

const register = async(req: Request, res:Response)=>{
    try {
        const {password, id, adress} = req.body;
        const result = await UserServeice.register(new User(password, id, adress))

        return res.status(201).json({
            status: "Register ok"
        })
    } catch (error:any) {
        return res.status(500).send({errorInfo: error.message})
    }
}

export default register;