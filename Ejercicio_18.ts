//Crea tipos usando `Extract` y `Exclude` para filtrar tipos de una unión.
type Union = 'a' | 'b' | 'c' | 'd';

type Extracted = Extract<Union, 'a' | 'b'>;
type Excluded = Exclude<Union, 'a' | 'b'>;
