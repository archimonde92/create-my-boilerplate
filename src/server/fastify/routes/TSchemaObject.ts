export type TSchemaObject = {
	title: string;
	type: "object" | "string" | "number" | "boolean" | "array";
	description?: string;
	properties?: { [key: string]: TSchemaObject }; //for object
	required?: Readonly<string[]>; //for object
	items?: TSchemaObject; //for array
	minItems: number; //for array
	uniqueItems: boolean; //for array
	minimum?: number; //for number
	maximum?: number; //for number
};
