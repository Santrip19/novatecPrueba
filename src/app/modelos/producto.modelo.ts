export interface Category {
    id : string;
    name: string;
}


export interface Producto {
    id : string ;
    title: string;
    images : string[];
    price : number;
    description : string,
    category : Category
    cantidad? :number,
    total? : number,
}