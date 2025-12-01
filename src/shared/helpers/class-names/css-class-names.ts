type Mods = Record<string, string | boolean>;

export const cssClassNames = (
  cls: string,
  mods: Mods,
  additional: string[],
): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
