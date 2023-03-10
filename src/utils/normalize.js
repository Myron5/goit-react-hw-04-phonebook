export const normalize = string =>
  string.toLowerCase().replaceAll(' ', '').replaceAll('+', '');
