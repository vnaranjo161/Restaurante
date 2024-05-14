class Pedido {
    private idMenu: number;
    private idUser: string;

    constructor(idMenu: number, idUser: string) {
        this.idMenu = idMenu
        this.idUser = idUser
    }

    public getIdMenu(): number {
        return this.idMenu;
    }

    public setIdMenu(idMenu: number): void {
        this.idMenu = idMenu;
    }

    public getIdUser(): string {
        return this.idUser;
    }

    public setIdUser(idUser: string): void {
        this.idUser = idUser;
    }


}

export default Pedido;