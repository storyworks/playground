const combineClassNames = (...classNames: Array<string | undefined>) =>
  classNames.filter((className) => className).join(" ");

export default combineClassNames;
