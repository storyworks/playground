export const isScrolledIntoView = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  return elemTop >= 0 && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  // return elemTop < window.innerHeight && elemBottom >= 0;
};
