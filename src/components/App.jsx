import { useState, useEffect } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';

import { AppBox, Section, FlexBox, RightBox } from './GeneralContainers';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import {
  uniqueId,
  isInContactsNumber,
  isInContactsName,
  getLSContacts,
  setLSContacts,
} from '../utils';

export const App = () => {
  const [contacts, setContacts] = useState(getLSContacts);
  const [filter, setFilter] = useState('');

  const handleOnFilterChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const handleOnDelete = idArg => {
    const newContacts = contacts.filter(({ id }) => idArg !== id);
    setContacts(newContacts);
    setLSContacts(newContacts);
  };

  const handleOnSubmit = ({ name, number }, { resetForm }) => {
    const id = uniqueId(contacts);

    try {
      if (isInContactsName(contacts, name))
        throw new Error(`Name "${name}" is already in your contacts`);
      else if (isInContactsNumber(contacts, number))
        throw new Error(`Number "${number}" is already in your contacts`);

      const newContacts = [...contacts, { id, name, number }];
      setContacts(newContacts);
      setLSContacts(newContacts);
      resetForm();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <AppBox>
      <Section title="Phonebook" icon={<BsFillTelephoneFill />}>
        <FlexBox>
          <ContactForm onSubmit={handleOnSubmit}></ContactForm>

          <RightBox>
            <Filter
              title="Contacts"
              onChange={handleOnFilterChange}
              value={filter}
            ></Filter>
            <ContactList
              contacts={contacts}
              value={filter}
              onDelete={handleOnDelete}
            ></ContactList>
          </RightBox>
        </FlexBox>
      </Section>
    </AppBox>
  );
};
