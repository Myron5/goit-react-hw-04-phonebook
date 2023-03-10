import { normalize } from './normalize';

export const checkOnInclude = (string, value) =>
  normalize(string).includes(normalize(value));
