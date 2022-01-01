import fs from 'fs';

class Container {
    constructor(public itemsList: string, private items: Array<object> = []){
        this.itemsList = `./${itemsList}`;
        this.items;
    }

    public async init(){
        try {
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
            return `Base de datos inicializado`
        } catch (error) {
            throw error;
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
        try{
            await this.read();
            return this.items.find((item: {[id:string]: any})=>{
                return item.id === id;
            }) || null;
        }catch(err){
            throw err;
        }
    }

    async getAll() {
        await this.read();
        return this.items;
    }

    async deleteById(id: number){
        try{
            await this.read();
            this.items = this.items.filter((item: {[id:string]: any})=>{
                return item.id !== id;
            })
            await this.write();
        }catch(err){
            throw err;
        }
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
        }catch(err){
            throw err;
        }
    }

    private async read(){
        try{
            let response = await fs.promises.readFile(this.itemsList, 'utf-8');
            let result = JSON.parse(response)
            this.items = result;
            return result;
        }catch(err){
            throw err;
        }
    }

    // private reIndex(){

    //     this.items.forEach((item: {[id: string]: any}, index) => {
    //         item.id = index + 1;
    //     })
    // }

}

let test = new Container('productos.txt');
async function initDb() {
    try{
        console.log('Se cargan los items del archivo', await test.init(), await test.getAll());
        console.log(
        'Test save()',
        await test.save( {
            "title": "Globo Terráqueo",
            "price": 0.67,
            "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
         }),
        await test.getAll(), 
        );
        console.log('Test getById()', await test.getById(2))
        console.log('Test deleteById()',await test.deleteById(2), await test.getAll());
        console.log('Test deleteAll()',await test.deleteAll() ,await test.getAll());

    }catch(err){
        throw err;
    }
}

initDb();
