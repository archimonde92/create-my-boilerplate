export const exampleSchema = {
	description: "This is example schema",
	type: "object",
	properties: {
		name: { type: "string" },
		description: {
			type: "object",
			properties: { id: { type: "string" } },
		},
		done: { type: "boolean" },
	},
	required: ["name", "done"],
} as const;
