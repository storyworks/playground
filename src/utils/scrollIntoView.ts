export const isScrolledIntoView = (el: HTMLElement) => {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  // Only completely visible elements return true:
  return elemTop >= 0 && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  //return elemTop < window.innerHeight && elemBottom >= 0;
};
