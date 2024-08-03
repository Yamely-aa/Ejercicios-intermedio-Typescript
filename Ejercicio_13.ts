//Define una interfaz con propiedades `readonly` y prueba modificar sus valores.
interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
}

const person: ReadonlyPerson = {
    name: 'John',
    age: 30
};
