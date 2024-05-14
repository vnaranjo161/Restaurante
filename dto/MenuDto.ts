class Menu {
    private id: number;
    private nombre: string;
    private descripcion: string;
    private precio: number;

    constructor(
        id: number,
        nombre: string,
        descripcion: string,
        precio: number
    ) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }


    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public setDescripcion(descripcion: string): void {
        this.descripcion = descripcion;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }


}

export default Menu;