import {useState} from 'react'
import { useSelector } from 'react-redux'
import AddContact from './AddContact'

const Home = () => {
    const contacts = useSelector((state)=> state.contacts)
    const [showContactForm, setShowContactForm] = useState(false)
  return (
    <div className='home'>
        <h1 className='title'>Contact List</h1>
        <div className='addFormDisplay'>
          <button onClick={()=>setShowContactForm(!showContactForm)}>{(showContactForm? 'Close' : 'Add New Contact')}</button>
            <div className={showContactForm? 'show' : 'hide'}>
              <AddContact />
            </div>
        </div>

        
        <div>
          {contacts.map(contact => (
          <div className='contact' key={contact.id}>
            <h1>{contact.name}</h1>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.number}</p>
          </div>
        ))}
        </div>

    </div>
  )
}

export default Home