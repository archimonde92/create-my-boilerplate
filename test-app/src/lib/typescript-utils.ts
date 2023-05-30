export type MyPicking<TObj, TKey extends keyof TObj> = {
	[Key in TKey]: TObj[Key];
};

export type MyOmit<T, K extends keyof T> = {
	[Key in Exclude<keyof T, K>]: T[Key];
};
export type MyReadonly<TObj> = {
	readonly [Key in keyof TObj]: TObj[Key];
};

export type First<TArray extends any[]> = TArray extends [infer TFirst, ...any]
	? TFirst
	: never;

export type MyMerge<T> = {
	[K in keyof T]: T[K];
};

export type OptionalSelected<T, K extends keyof T> = MyMerge<
	{ [Key in K]?: T[Key] } & Omit<T, K>
>;

export type OptionalAll<T> = { [Key in keyof T]?: T[Key] };

export type RequiredSelected<T, K extends keyof T> = MyMerge<
	{ [Key in K]-?: T[Key] } & Omit<T, K>
>;

export type RequiredAll<T> = MyMerge<{ [Key in keyof T]-?: T[Key] }>;

export type Awaited<T extends Promise<any>> = T extends Promise<infer x>
	? x extends Promise<any>
		? Awaited<x>
		: x
	: never;

export type If<C extends boolean, T, F> = C extends true ? T : F;
