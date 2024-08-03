//Crea un tipo que sea la unión de las claves de dos interfaces distintas.
interface A {
    a: number;
    b: string;
}

interface B {
    b: string;
    c: boolean;
}

type UnionKeys = keyof A | keyof B;
