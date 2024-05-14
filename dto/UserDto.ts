class User {

    private password: string;
    private id: string;
    private adress: string;
    
    constructor(password: string, id: string, adress: string) {
        this.password = password
        this.id = id
        this.adress = adress
    }

    public getPassword(): string {
        return this.password;
    }

    public setPassword(password: string): void {
        this.password = password;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getAdress(): string {
        return this.adress;
    }

    public setAdress(adress: string): void {
        this.adress = adress;
    }

}

export default User;