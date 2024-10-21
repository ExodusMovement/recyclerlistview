// extracted from https://github.com/naqvitalha/ts-object-utils

export class ObjectUtil {
    public static isNullOrUndefined<T>(obj: null | undefined | T): obj is null | undefined {
        const ref = obj as any;
        return !(ref || ref === 0 || ref === false);
    }
}

export class Default {
    public static value<T>(obj: T | null | undefined, defaultValue: T): T {
        return ObjectUtil.isNullOrUndefined(obj) ? defaultValue : obj;
    }
}
