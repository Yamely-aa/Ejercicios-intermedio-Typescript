//Crea un tipo que sea la intersección de dos tipos.
type TypeA = { a: number; b: string; };
type TypeB = { b: string; c: boolean; };

type Intersected = TypeA & TypeB;
