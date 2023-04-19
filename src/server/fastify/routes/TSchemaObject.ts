type ESchemaObjectTypeValue = "object" | "string" | "number" | "boolean" | "array"
export type TSchemaObject = {
    title?: string;
    type: ESchemaObjectTypeValue | ESchemaObjectTypeValue[];
    description?: string;
    properties?: { [key: string]: TSchemaObject }; //for object
    required?: Readonly<string[]>; //for object
    items?: TSchemaObject; //for array
    minItems?: number; //for array
    uniqueItems?: boolean; //for array
    minimum?: number; //for number
    maximum?: number; //for number
    format?: string, // for string
    minLength?: number; //for string
    maxLength?: number; //for string
};