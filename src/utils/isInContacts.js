import { checkOnInclude } from './checkOnInclude';

export const isInContactsName = (contacts, nameArg) =>
  contacts.find(({ name }) => checkOnInclude(name, nameArg));

export const isInContactsNumber = (contacts, numberArg) =>
  contacts.find(({ number }) => checkOnInclude(number, numberArg));
