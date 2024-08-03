//Define un tipo que extraiga el tipo de retorno de una función.
type ReturnTypeOfFunction<T extends (...args: any[]) => any> = ReturnType<T>;
