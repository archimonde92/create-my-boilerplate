import { Decimal128, IndexDescription } from "mongodb";

type TExample = {
	example_field: string;
};

const ExampleIndexes: IndexDescription[] = [
	{ key: { example_field: 1 }, background: true },
];

export { TExample, ExampleIndexes };
