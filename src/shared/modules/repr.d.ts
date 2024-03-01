interface ReprSettings {
	pretty?: boolean;
	robloxFullName?: boolean;
	robloxProperFullName?: boolean;
	robloxClassName?: boolean;
	tabs?: boolean;
	semicolons?: boolean;
	spaces?: number;
	sortKeys?: boolean;
}

interface Repr {
	(value: unknown, settings?: ReprSettings): string;
}

declare const Repr: Repr;
export = Repr;
