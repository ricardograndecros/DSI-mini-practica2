export class Product {
    public photo: string;
    public brand: string;
    public model: string;
    public year: number;
    public available_since: string;
    public price: number;

    constructor(photo: string, brand:string, model: string, year: number, available_since: string, price: number){
        this.photo = photo;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.available_since = available_since;
        this.price = price;
    }
}

export const product_list = [
    {
        photo: "./lasjfñlskjfñ",
        brand: "renault",
        model: "scenic",
        year: 2007,
        available_since: '04-2018',
        price: 5000
    },
    {
        photo: "./lasjfñlskjfñ",
        brand: "volkswagen",
        model: "golf",
        year: 2009,
        available_since: '08-2019',
        price: 2800

    },
    {
        photo: "./lasjfñlskjfñ",
        brand: "renault",
        model: "megane",
        year: 2007,
        available_since: '03-2018',
        price: 3500
    },
    {
        photo: "./lasjfñlskjfñ",
        brand: "tesla",
        model: "model 3",
        year: 2007,
        available_since: '03-2018',
        price: 4000
    },
    {
        photo: "./lasjfñlskjfñ",
        brand: "volkswagen",
        model: "sirocco",
        year: 2016,
        available_since: '02-2017',
        price: 23000
    },
    {
        photo: "./lasjfñlskjfñ",
        brand: "toyota",
        model: "prius",
        year: 2009,
        available_since: '09-2020',
        price: 9000
    },
    {
        photo: "./lasjfñlskjfñ",
        brand: "mercedes",
        model: "v220",
        year: 1999,
        available_since: '01-2004',
        price: 1500
    },
]