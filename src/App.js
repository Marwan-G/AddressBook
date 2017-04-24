import React, { Component } from "react";
import "./App.css";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";
import Contact from "./Contact";
import shortid from "shortid";

class App extends Component {
  state = {
    editing: '',
    contacts: [],
    contact: {
      firstName: "",
      lastName: "",
      email: "",
      country: ""
    }
  };

  componentDidMount() {
    const localState = localStorage.getItem('state');
    console.log(`localState`, localState);
    this.setState({...JSON.parse(localState)})
  }

  onEdit = () => {
    this.setState({
      editing: 'edit'
    });
  };

  onDelete = e => {
    const dataId = e.target.dataset.id;
    this.setState(
      {
        contacts: this.state.contacts.filter(contact => dataId !== contact.id),
        contact: {
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          country: ""
        }
      },
      this.saveState
    );
  };

  onAddNew = () => {
    this.setState({
      editing: 'new',  // 'edit', 'new', 'item'
      contact: {
        id: shortid.generate(),
        firstName: "",
        lastName: "",
        email: "",
        country: ""
      }
    });
  };

  onItemClick = e => {
    const id = e.target.dataset.id;
    this.setState({
      editing: 'item',
      contact: this.state.contacts.find(contact => id === contact.id)
    });
  };

  saveState = () => {
    console.log("saving", this.state)
    localStorage.setItem('state', JSON.stringify(this.state) );
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.state.editing==='new') {
      this.setState(
        {
          editing: 'item',
          contacts: [...this.state.contacts, this.state.contact]
        },
        this.saveState
      );
    } else {
      //editing
      this.setState(
        {
          editing: 'item',
          contacts: this.state.contacts.map( contact => contact.id === this.state.contact.id ? this.state.contact : contact )
        },
        this.saveState
      )
    }
  };

  onChange = e => {
    console.log("New value", e.target.dataset.name, e.target.value);

    const value = e.target.value;
    const name = e.target.dataset.name;
    this.setState({
      contact: { ...this.state.contact, [name]: value }
    });
  };

  render() {
    return (
      <div className="App">
        <div className="AppHeader">
          <h2>Address Book</h2>
        </div>
        <div className="Subheader">
          <button className="PrimaryButton" onClick={this.onAddNew}>Add new</button>
        </div>
        <div className="Contacts">
          <ContactList
            contacts={this.state.contacts}
            onItemClick={this.onItemClick}
            onDelete={this.onDelete}
            activeId={this.state.contact.id}
          />
          {this.state.editing === 'edit' || this.state.editing === 'new'
            ? <ContactForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                contact={this.state.contact}
              />
            : <Contact
                contact={this.state.contact}
                hasContacts={!!this.state.contacts.length}
                onEdit={this.onEdit}
                onDelete={this.onDelete}
              />}
        </div>
      </div>
    );
  }
}

export default App;
