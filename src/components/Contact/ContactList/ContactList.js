import React from "react";
import PropTypes from "prop-types";

function ContactList(props) {
  console.log(props);

  const renderContactList = props.contacts.map((contact) => {
    return (
      <div>
        <div>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <p>{contact.number}</p>
        </div>
      </div>
    );
  });
  return <div>{renderContactList}</div>;
}

ContactList.propTypes = {};

export default ContactList;
