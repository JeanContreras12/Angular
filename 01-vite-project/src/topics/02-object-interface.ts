let skills: string [] = [ 'bash','counter', 'healing']; // poniendo :string[] obligo a que solo contenga strings el arreglo


interface Character { //interface nos permite definir los tipos de los datos que contiene, obligando a que sean de ese tipo
    name: string;
    hp: number;
    skills: string;
    hometown?: string; // el ? es opcional o undefined
}


const strider: Character ={
    name: 'strider',
    hp: 32,
    skills: 'heal',
    
};

strider.hometown = 'riveldale';

console.table(strider)
export{};