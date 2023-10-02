export const classList = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
