import PropTypes from 'prop-types';
import { Ul, Li, Name, Button } from './ContactList.styled';

export const ContactList = ({
  contacts,
  filterValue,
  filterFunc,
  handleOnDelete,
}) => {
  const filterContacts = filterFunc(contacts, filterValue);
  return (
    <div>
      <Ul>
        {filterContacts.map(({ id, name, number }) => (
          <Li key={id}>
            <Name>
              {name} : <span>{number}</span>
            </Name>
            <Button type="button" onClick={() => handleOnDelete(id)}>
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
  filterValue: PropTypes.string.isRequired,
  filterFunc: PropTypes.func.isRequired,
  handleOnDelete: PropTypes.func.isRequired,
};
