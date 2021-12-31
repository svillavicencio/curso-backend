export default class Suma {
    constructor(a:number,b:number){
        this.valor1 = a;
        this.valor2 = b;
    }
    private valor1 : number = 0;
    private valor2 : number = 0;

    public resultado(): number {
       return this.valor1 + this.valor2;
   }

}