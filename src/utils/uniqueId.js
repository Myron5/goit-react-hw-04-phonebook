import { nanoid } from 'nanoid';

const isIdInContacts = (idArg, contacts) =>
  contacts.some(({ id }) => id === idArg);

export const uniqueId = contacts => {
  let id = nanoid();
  while (isIdInContacts(id, contacts)) {
    id = nanoid();
  }
  return id;
};
