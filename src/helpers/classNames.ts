type Mods = Record<string, boolean | string>;

export function classNames(
  classes: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  const filteredObject = Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className, value]) => className);

  const className = [classes, ...filteredObject, ...additional].join(' ');

  return className;
}
