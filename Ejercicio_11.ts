//Define un tipo que convierta todas las propiedades de un objeto en opcionales.
type PartialObject<T> = {
    [P in keyof T]?: T[P];
};
