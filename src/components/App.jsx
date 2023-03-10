import { Component } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';

import { AppBox, Section, FlexBox, RightBox } from './GeneralContainers';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import {
  uniqueId,
  checkOnInclude,
  isInContactsNumber,
  isInContactsName,
  getLSContacts,
  setLSContacts,
} from '../utils';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = getLSContacts();
    this.setState({ contacts });
  }

  filterFunc = (contacts, value) => {
    return !value
      ? contacts
      : contacts.filter(
          ({ name, number }) =>
            checkOnInclude(name, value) || checkOnInclude(number, value)
        );
  };

  handleOnFilterChange = e => {
    const { value } = e.target;

    this.setState({
      filter: value,
    });
  };

  handleOnDelete = idArg => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(({ id }) => idArg !== id);
    this.setState({ contacts: newContacts });
    setLSContacts(newContacts);
  };

  handleOnSubmit = ({ name, number }, { resetForm }) => {
    const { contacts } = this.state;
    const id = uniqueId(contacts);

    try {
      if (isInContactsName(contacts, name))
        throw new Error(`Name "${name}" is already in your contacts`);
      else if (isInContactsNumber(contacts, number))
        throw new Error(`Number "${number}" is already in your contacts`);

      const newContacts = [...contacts, { id, name, number }];
      this.setState({ contacts: newContacts });
      setLSContacts(newContacts);
      resetForm();
    } catch (err) {
      alert(err.message);
    }
  };

  render = () => {
    return (
      <AppBox>
        <Section title="Phonebook" icon={<BsFillTelephoneFill />}>
          <FlexBox>
            <ContactForm handleOnSubmit={this.handleOnSubmit}></ContactForm>

            <RightBox>
              <Filter
                title="Contacts"
                handleOnChange={this.handleOnFilterChange}
                filterValue={this.state.filter}
              ></Filter>
              <ContactList
                contacts={this.state.contacts}
                filterValue={this.state.filter}
                filterFunc={this.filterFunc}
                handleOnDelete={this.handleOnDelete}
              ></ContactList>
            </RightBox>
          </FlexBox>
        </Section>
      </AppBox>
    );
  };
}
