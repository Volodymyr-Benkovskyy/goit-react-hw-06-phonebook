

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


const App = () => {


  return (
    
    <>
       <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
       <h2>Contacts list</h2>
      <ContactList />
     
  </>
    
  );
};

export default App;
