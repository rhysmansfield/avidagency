export const classList = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter((n) => (!n ? false : n.toString().trim())).join(" ");
};
