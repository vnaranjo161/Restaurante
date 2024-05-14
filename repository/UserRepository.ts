import connection from "../config/configDB";
import User from "../dto/UserDto";
import Auth from "../dto/AuthDto";
import Menu from "../dto/MenuDto";
import Pedido from "../dto/PedidoDto";

class UserRepository{
    static async register(user: User){
        const sql = "insert into users (id, password, adress) values (?,?,?)"
        const values = [user.getId(), user.getPassword(), user.getAdress()]
        return connection.execute(sql, values);
    }

    static async auth(auth: Auth){
        const sql = "select password from users where id = ?"
        const values = [auth.getId()]
        return connection.execute(sql, values)
    }

    static async GetMenues(){
        const sql = 'select * from menu'
        return await connection.execute(sql);
    }

    static async makeOrder(pedido: Pedido){
        const sql = "insert into pedidos (idUser, idMenu) values (?,?)"
        const values = [pedido.getIdUser(), pedido.getIdMenu()]
        return await connection.execute(sql, values);
    }

    static async getOrdersUser(idUser:string){
        const sql = "SELECT * FROM vista_pedidos WHERE idUser = ?"
        console.log(idUser);
        
        const values = [idUser]
        return await connection.execute(sql, values);
    }
}

export default UserRepository;