import { Request, Response } from "express";
import Menu from '../../dto/MenuDto'
import UserServeice from "../../services/UserService";

const getMenues = async(req: Request, res: Response)=>{
    try {
        const result =  await UserServeice.getMenues();
        return res.status(200).json(result[0])
    } catch (error: any) {
        return res.status(500).json({errorInfo: error.message })
    }

}

export default getMenues;