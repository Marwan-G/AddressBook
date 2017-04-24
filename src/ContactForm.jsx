import React from "react";
import countriesFn from 'country-list';

const CountrySelection = ({ value, countries, onChange }) => (
  <select className="Droplist" value={value} data-name='country' onChange={onChange}>
    {
      countries.map(country => (
        <option key={country.code} value={country.code}>{country.name}</option>
      ))
    }
  </select>
)

const withData = (Component) => {
  return (props) => {
    let countries = countriesFn().getData();
    return <Component countries={countries} {...props} />
  }
}

const CountrySelectionWithData = withData(CountrySelection);

const ContactForm = ({onChange, onSubmit, contact }) => (
  <div className="ContactForm">
    <form onSubmit={onSubmit}>
      <label>First name</label>
      <input data-name='firstName' value={contact.firstName} type='text' onChange={onChange}/>
      <label>Last name</label>
      <input data-name='lastName' value={contact.lastName} type='text' onChange={onChange}/>
      <label>Email</label>
      <input data-name='email' value={contact.email} type='text' onChange={onChange}/>
      <CountrySelectionWithData value={contact.country} onChange={onChange} />
      <button className='PrimaryButton' onClick={onSubmit}>Save</button>
    </form>

  </div>
);

export default ContactForm;
