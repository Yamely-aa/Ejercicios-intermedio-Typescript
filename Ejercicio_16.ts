//Utiliza Indexed Access Types para crear un tipo que represente los valores de una interfaz.
interface Person {
    name: string;
    age: number;
}

type PersonValues = Person[keyof Person];
