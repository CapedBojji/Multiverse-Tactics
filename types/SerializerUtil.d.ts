type ClassDataType = {
	valueType: unknown;
	serializer: (value: unknown, intermediateSerializedData: {}) => void;
	deserializer: (serializedData: {}) => void;
};

interface SerializerUtil {
	addClassDataTypes: (this: void, classDataTypes: Array<ClassDataType>) => void;
	deserialize: (this: void, value: string) => unknown;
	deserializeTableDeep: (this: void, value: string) => unknown;
	serialize: (this: void, value: unknown) => string;
	serializeTableDeep: (this: void, value: unknown) => string;
}

export default SerializerUtil;
