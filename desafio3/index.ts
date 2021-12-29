import fs from 'fs';

class Container {
    constructor(public itemsList: string, private items: Array<object> = []){
        

        fs.readFile(`./${itemsList}`, 'utf-8', (err, response) => {

            if(err) throw err;

            this.items = JSON.parse(response);

            this.items.forEach( (item , index) => {
                let newItem = {id: Container.id, ...item}
                Container.id++;
                this.items[index] = newItem;
            })
            this.write(`./${this.itemsList}`, this.items);

            
        })

    }

    private static id = 1;

    save(item: object){
        let result = Container.id
        this.read(`./${this.itemsList}`).then(()=>{
            
            let newItem = {id: Container.id, ...item}
            Container.id++;
            
            this.items.push(newItem);
            console.log('nuevo', this.items);
            this.write(`./${this.itemsList}`, this.items);
        }
        )
        

        return result;

    }

    getById(id: number) {
        this.read(`./${this.itemsList}`).then(()=>{
            let item: {[id: string]: any};
            for(item of this.items){
                if(item.id === id){
                    return item;
                }
                 
            }
    
            return null;
        })
    }

    getAll() {
        this.read(`./${this.itemsList}`).then(()=>{return this.items})
        
    }

    deleteById(id: number){
        this.read(`./${this.itemsList}`).then(()=>{
            this.items.splice(id, 1);
            this.write(`./${this.itemsList}`, this.items);
        })
        
    }

    async deleteAll(){
        this.write(`./${this.itemsList}`, []);
        console.log(this.items)

    }

    private async write(route: string, items: Array<object>){
        try{
            await fs.promises.writeFile(route, JSON.stringify(items))
            console.log('guardado')
            console.log(this.items)
        }catch(err){
            throw err;
        }
    }

    private async read(route:string){
        try{
            let response = await fs.promises.readFile(route, 'utf-8');
            this.items = JSON.parse(response);
            console.log('actualizado')
            console.log(this.items)
        }catch(err){
            throw err;
        }
    }

}

let test = new Container('productos.txt')
