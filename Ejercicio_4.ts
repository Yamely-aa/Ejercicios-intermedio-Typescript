//Crea una subclase `Car` que extienda de `Vehicle` y agregue una propiedad `numDoors` (number).
class Car extends Vehicle {
    numDoors: number;

    constructor(make: string, model: string, numDoors: number) {
        super(make, model);
        this.numDoors = numDoors;
    }
}
