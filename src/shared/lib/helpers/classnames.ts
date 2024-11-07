type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods?: Mods, additional?: string[]): string => [
    cls,
    Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([className, _]) => className),
    ...additional,
].join(' ');
