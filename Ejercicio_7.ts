//Escribe una función que devuelva una promesa que se resuelva después de 2 segundos.
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
