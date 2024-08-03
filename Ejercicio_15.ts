//Define una clase genérica que tome dos tipos y contenga un método que devuelva un objeto que tenga ambas propiedades.
class Pair<T, U> {
    first: T;
    second: U;

    constructor(first: T, second: U) {
        this.first = first;
        this.second = second;
    }

    getPair(): { first: T; second: U } {
        return { first: this.first, second: this.second };
    }
}
