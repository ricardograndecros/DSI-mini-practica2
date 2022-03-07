export class Product {
    public photo: string;
    public brand: string;
    public model: string;
    public year: number;
    public available_since: string;
    public price: number;
    public estado: string;

    constructor(photo: string, brand:string, model: string, year: number, available_since: string, price: number, estado: string){
        this.photo = photo;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.available_since = available_since;
        this.price = price;
        this.estado = estado
    }
}


export const product_list = [
    {
        photo: "/assets/images/renault_scenic.jpg",
        brand: "renault",
        model: "scenic",
        year: 2007,
        available_since: '04-2018',
        price: 5000,
        estado: "bueno"
    },
    {
        photo: "/assets/images/volkswagen_golf.jpg",
        brand: "volkswagen",
        model: "golf",
        year: 2009,
        available_since: '08-2019',
        price: 2800,
        estado: "bueno"

    },
    {
        photo: "/assets/images/renault_megane.jpg",
        brand: "renault",
        model: "megane",
        year: 2007,
        available_since: '03-2018',
        price: 3500,
        estado: "malo"
    },
    {
        photo: "/assets/images/tesla_model3.jpg",
        brand: "tesla",
        model: "model 3",
        year: 2007,
        available_since: '03-2018',
        price: 4000,
        estado: "bueno"
    },
    {
        photo: "/assets/images/volkswagen_sirocco.jpg",
        brand: "volkswagen",
        model: "sirocco",
        year: 2016,
        available_since: '02-2017',
        price: 23000,
        estado: "bueno"
    },
    {
        photo: "/assets/images/toyota_prius.png",
        brand: "toyota",
        model: "prius",
        year: 2009,
        available_since: '09-2020',
        price: 9000,
        estado: "bueno"
    },
    {
        photo: "/assets/images/mercedes_v220.jpg",
        brand: "mercedes",
        model: "v220",
        year: 1999,
        available_since: '01-2004',
        price: 1500,
        estado: "malo"
    },
]