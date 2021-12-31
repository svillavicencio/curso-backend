
function operacion (a: number, b: number, operation: string): Promise<number> {
    return new Promise(async (resolve, reject) => {
        if(operation === 'suma'){
            
            const f = await import('./Suma');
            let instance = new f.default(a,b);
            resolve(instance.resultado())

        } else if (operation === 'resta'){
            
            const f = await import('./Resta');
            let instance = new f.default(a,b);
            resolve(instance.resultado())

        } else {
            reject (`${operation} no es valido`);
        }
    })
  }
  

async function operaciones () {
    operacion( 43, 77, 'suma' )
    .then( console.log )
    .catch( console.log );

    console.log(await operacion(20, -10, 'resta'))

}

operaciones();