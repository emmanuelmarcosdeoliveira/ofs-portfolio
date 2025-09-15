export const fadeUp = {
  initial: { opacity: 0, y: -100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
};
export const fadeDown = {
  initial: { opacity: 0, y: 100 },
  whileInView: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};
export const fadeLeft = {
  initial: { opacity: 0, x: 100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};
export const fadeRight = {
  initial: { opacity: 0, x: -100 },
  whileInView: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};
export const fade = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0 },
};
