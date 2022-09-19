import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {contactAdd} from './contact/contactsSlice'

const AddContact = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch()
    const ableToAdd = Boolean(name)

  const addContact = (e) =>{
    e.preventDefault()
    dispatch(
      contactAdd(name, number, email),
    )     
    setEmail('')
    setName('')
    setNumber('')
  }
  return (
    <div className='addContact'>
        <h2>Add Contact</h2>
        <form onSubmit={addContact}>
            <input
              placeholder="Enter the Contact's Name"
              id='name'
              type='text'
              value={name}
              onChange={e => setName(e.target.value)}
              />
            <input 
              placeholder="Enter Contact's Phone Number"
              id='number'
              type='text'
              value={number}
              onChange={e => setNumber(e.target.value)}
              />
            <input
              placeholder="Enter the Contact's Email"
                id='email'
                type='text'
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            <button disabled={!ableToAdd} type='submit'>Add</button>
        </form>
    </div>
  )
}

export default AddContact