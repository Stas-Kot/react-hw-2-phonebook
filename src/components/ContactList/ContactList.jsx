import { Component } from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contact={contact}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

export default ContactList;
