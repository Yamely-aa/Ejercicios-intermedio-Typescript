//Crea un tipo condicional que devuelva `true` si el tipo es `string`, y `false` en caso contrario.
type IsString<T> = T extends string ? true : false;
