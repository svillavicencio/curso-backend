import { suma, resta } from './operation';

function operacion (a: number, b: number, operation: string): Promise<number> {
    return new Promise((resolve, reject) => {
        if(operation === 'suma'){
            resolve(suma(a, b))
        } else if (operation === 'resta'){
            resolve(resta(a, b))
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