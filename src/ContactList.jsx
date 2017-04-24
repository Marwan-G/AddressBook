import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, onItemClick, onDelete, activeId }) => (
  <div className="ContactList">
    <h2>Contacts</h2>
    { !!contacts.length
      ? <div>
          {contacts.map( contact => (
            <ContactItem
              key={contact.id}
              dataId={contact.id}
              contact={contact}
              onItemClick={onItemClick}
              onDelete={onDelete}
              activeId={activeId}
            />
          ))}
        </div>
      : <div>
          <h3 className='NoContacts'>Add your first contact</h3>
        </div>}

  </div>
);

export default ContactList;
