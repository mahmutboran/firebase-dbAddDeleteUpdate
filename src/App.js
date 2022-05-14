import './App.css';
import FormComponent from './components/form/FormComponent';
import Contacts from "./components/contacts/Contacts"
import { useState } from 'react';
import { AddUser, EditUser } from './utils/function';
import { ToastContainer } from 'react-toastify';
const initalValue = { username: "", phoneNumber: "", gender: "NO INFO" }

function App() {
  const [info, setInfo] = useState(initalValue)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(info)
    if (info.id) {
      EditUser(info)
    } else {
      AddUser(info)
    }
  }

  //!EDİT DATA

  const editHandler = (id, username, phoneNumber, gender) => {
    setInfo({ id, username, phoneNumber, gender })

  }
  return (
    <div className="App">
      <FormComponent info={info} setInfo={setInfo} handleFormSubmit={handleFormSubmit} />
      <Contacts editHandler={editHandler} />
      <ToastContainer />
    </div>
  );
}

export default App;
