import React from "react";

const ContactItem = ({ contact, dataId, onItemClick, onDelete, activeId }) => {
  const contactClass = `ContactItem ${contact.id === activeId ?' ContactItemActive' : ''}`
  return (
    <div className={contactClass}>
      <span data-id={dataId} onClick={onItemClick}>
        {`${contact.firstName} ${contact.lastName}`}
      </span>
      <span data-id={dataId} className='DangerButton' onClick={onDelete}>X</span>
    </div>
  )
};

export default ContactItem;
