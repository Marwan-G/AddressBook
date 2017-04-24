import React from "react";
const Contact = ({contact, hasContacts, onEdit, onDelete }) => (
  <div className="Contact">
    {hasContacts &&
      <div>
        <div className='ContactDetails'>
          <h2>{`${contact.firstName} ${contact.lastName}`}</h2>
          <span className='email'>{contact.email}</span>
        </div>
        <button className='PrimaryButton' onClick={onEdit}>Edit</button>
      </div>
    }
  </div>
);

export default Contact;
