export function whatsMyType<T>(argument: T): T{
    return argument;
}

const amIstring = whatsMyType<string>('Maracas');
const amINumber = whatsMyType<number>(123);
const amIarray = whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIstring);
console.log(amINumber);
console.log(amIarray);