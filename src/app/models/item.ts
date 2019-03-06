export class Item{
    constructor( 
        public name: string,
        public description: string,
        public price: number,
        public isSold: boolean = false,
        public id?: string
     ){

    }
}

export interface Items {
    items: Item[];
}