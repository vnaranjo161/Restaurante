import UserServeice from "../../services/UserService";
import { Request, Response } from "express";

const getOrdersUser = async(req:Request, res: Response)=>{
    try {
        const id = req.body.id;
        const result = await UserServeice.getOrdersUser(id);

        return res.status(200).json(result[0])
    } catch (error: any) {
        return res.status(500).send({errorInfo: error.message})
    }    
}

export default getOrdersUser;