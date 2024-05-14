class Auth {
    private password: string;
    private id: string;

    constructor(password: string, id: string) {
        this.password = password
        this.id = id
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
}

export default Auth;