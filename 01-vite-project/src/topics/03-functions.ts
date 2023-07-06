function addNumerber(a:any,b:number){ //declarar una funcion
    return(a+b);

}

addNumerber(1,2);


const numero:number = addNumerber(1,2);


const addNumberFuncionFlecha = (a: number, b:number):string => {
    return `${a+b}`;
}

const numero2:string = addNumberFuncionFlecha(1,2)

function multiply (firstnumber: number, secondNumber?:number, base: number = 2){
    return firstnumber*base;
}
const multiplicar:number = multiply(5);

//Creamos una interaz para un character.
interface Character {
    name: string;
    hp: number;
    showHp: () => void; //se define una funcion
}

//Creamos un metodo para 
const healCharacter = ( character:Character, amount:number ) => {

    character.hp += amount;

};

const strider:Character = {
    name: 'Strider',
    hp: 50,
    showHp(){
        console.log(`Puntos de vida: ${ this.hp }`);
    }
    
}

healCharacter(strider, 40);

strider.showHp();
console.log({numero, numero2, multiplicar});

export{};