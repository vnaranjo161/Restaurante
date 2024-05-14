import User from '../dto/UserDto';
import UserRepository from '../repository/UserRepository';
import generateHash from '../helpers/generateHash';
import Auth from '../dto/AuthDto';
import compareHash from '../helpers/compareHash';
import generateToken from '../helpers/generateToken';
import Pedido from '../dto/PedidoDto';
import Menu from '../dto/MenuDto';



class UserServeice{
    static async register(user: User){
        try {
            const password = await generateHash(user.getPassword());
            user.setPassword(password)
            const result = await UserRepository.register(user);
            return result
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    static async auth(auth: Auth){
        try {
            const result:any = await UserRepository.auth(auth);
            if (result && result[0].length > 0){
                const isPasswordValid = await compareHash(auth.getPassword(), result[0][0].password)

                if (isPasswordValid) {
                    const token = generateToken({id: auth.getId()}, process.env.SECRET, 30)
                    return token;
                }
            }
            return null;
        } catch (error: any) {
            throw new Error(error.message)
        }
    }


    static async getMenues(){
        return await UserRepository.GetMenues();
    }

    static async makeOrder(pedido: Pedido){
        return await UserRepository.makeOrder(pedido);
    }

    static async getOrdersUser(idUser: string){
        return await UserRepository.getOrdersUser(idUser);
    }

}

export default UserServeice;