//Crea una función genérica que tome un array de cualquier tipo y retorne el primer elemento.
function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}
