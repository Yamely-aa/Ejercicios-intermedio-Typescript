//Define un tipo que incluya una propiedad opcional y otra que pueda ser `null`.
type OptionalAndNullable = {
    required: string;
    optional?: number;
    nullable: number | null;
};
