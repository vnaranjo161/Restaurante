import UserServeice from "../../services/UserService";
import Pedido from "../../dto/PedidoDto";
import { Request, Response } from "express";

const makeOrder = async(req: Request, res:Response)=>{
    try {
        const {id, idMenu} = req.body;
        const result = await UserServeice.makeOrder(new Pedido(idMenu, id))
        return res.status(201).json({
            status: 'Order placed'
        })
    } catch (error:any) {
        return res.status(500).send({errorInfo: error.message})
    }
}

export default makeOrder;