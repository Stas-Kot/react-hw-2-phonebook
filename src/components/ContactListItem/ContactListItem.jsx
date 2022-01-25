import { Component } from 'react';
import { Btn } from '../ContactForm/ContactForm.styled';
import { Item } from './ContactListItem.styled';

class ContactListItem extends Component {
  render() {
    const { contact, onDelete } = this.props;
    return (
      <Item>
        {contact.name}: {contact.number}
        <Btn
          className="deleteBtn"
          type="button"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </Btn>
      </Item>
    );
  }
}

export default ContactListItem;
