interface BemModifierMap {
  [key: string]: any; // eslint-disable-line
}

type BemModifiers = string | string[] | number | BemModifierMap;

const createBem = (block: string) => {
  const bem = (element?: string | null, modifiers?: BemModifiers) => {
    const baseClass = block + (element ? `__${element}` : "");
    let classes = baseClass;
    if (modifiers || modifiers === 0) {
      if (typeof modifiers === "string" || typeof modifiers === "number") {
        classes += ` ${baseClass}--${modifiers}`;
      } else if (Array.isArray(modifiers)) {
        classes += ` ${modifiers
          .filter((modifier) => modifier)
          .map((modifier) => ` ${baseClass}--${modifier}`)
          .join(" ")}`;
      } else if (typeof modifiers === "object") {
        Object.keys(modifiers).forEach((modifier) => {
          if (modifiers[modifier]) {
            classes += ` ${baseClass}--${modifier}`;
          }
        });
      }
    }
    return classes;
  };

  return bem;
};

export default createBem;
