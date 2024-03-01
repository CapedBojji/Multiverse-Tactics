interface Tree {
	Find: (parent: Instance, path: string) => Instance;
	Await: (parent: Instance, path: string, timeout?: number) => Instance;
	Exists: (parent: Instance, path: string, assertIsA?: keyof Instances) => boolean;
}

export = Tree;
