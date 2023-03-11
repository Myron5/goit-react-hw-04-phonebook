import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { Ul, Li, Name, Button } from './ContactList.styled';
import { checkOnInclude } from '../../utils';

export const ContactList = ({ contacts, value, onDelete }) => {
  const filteredContacts = useMemo(() => {
    return !value
      ? contacts
      : contacts.filter(
          ({ name, number }) =>
            checkOnInclude(name, value) || checkOnInclude(number, value)
        );
  }, [contacts, value]);

  return (
    <div>
      <Ul>
        {filteredContacts.map(({ id, name, number }) => (
          <Li key={id}>
            <Name>
              {name} : <span>{number}</span>
            </Name>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Li>
        ))}
      </Ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  value: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
