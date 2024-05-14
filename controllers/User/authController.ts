import Auth from "../../dto/AuthDto";
import UserServeice from "../../services/UserService";
import { Request, Response } from "express";

const auth = async(req:Request, res:Response)=>{
    try {
        const {id, password} = req.body;
        const token = await UserServeice.auth(new Auth(password, id))

        if (token) {
            return res.status(200).json({
                status: 'Succeful Authentication', 
                token: token
            })
        }

        return res.status(401).json({
            status: 'Incorrect id or password', 
        })

    } catch (error:any) {
        return res.status(500).send({ errorInfo: error.message})
    }
}

export default auth;