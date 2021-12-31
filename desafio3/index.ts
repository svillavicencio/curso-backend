import fs from 'fs';

class Container {
    constructor(public itemsList: string, private items: Array<object> = []){
        this.itemsList = `./${itemsList}`;
        this.items;
    }

    public async init(){
        let response = await fs.promises.readFile(this.itemsList, 'utf-8');
        let data = JSON.parse(response);
        for (let item of data){
            let id = Container.id;
            Container.id++;

            let newItemID = {
                ...item,
                id
            }

            this.items.push(newItemID);
            await this.write();
        }
    }

    private static id = 1;

    async save(item: object){
        await this.read()

        let newItem = { 
            ...item,
            id: Container.id}

        let result = Container.id;
        Container.id++;
        this.items.push(newItem);

        await this.write();

        return result;

    }

    async getById(id: number) {
        await this.read()
        return this.items[id-1] || null;
    }

    async getAll() {
        await this.read();
        return this.items;
    }

    async deleteById(id: number){
        await this.read()
        this.items.splice(id - 1, 1);
        this.reIndex();
        await this.write()
        return 'Elemento eliminado';
    }

    async deleteAll(){
        this.items = [];
        await this.write();
        return 'Base de datos formateado';

    }

    private async write(){
        try{
            await fs.promises.writeFile(this.itemsList, JSON.stringify(this.items))
            console.log('guardado')
            console.log(this.items)
        }catch(err){
            throw err;
        }
    }

    private async read(){
        try{
            let response = await fs.promises.readFile(this.itemsList, 'utf-8');
            let result = JSON.parse(response)
            this.items = result;
            console.log('actualizado', this.items)
            return result;
        }catch(err){
            throw err;
        }
    }

    private reIndex(){

        this.items.forEach((item: {[id: string]: any}, index) => {
            item.id = index + 1;
        })
    }

}

let test = new Container('productos.txt');
test.init().then(async()=>{
    // test.save( {
    //     "title": "Globo Terráqueo",
    //     "price": 0.67,
    //     "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    //  })
    test.getById(10).then((resp)=>{console.log(resp, 'getbyid')})
    // test.getAll().then(resp=>console.log(resp,'getall'))
    // test.deleteById(1)
    test.deleteAll();
})
