import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, name: 'John Smith', number: '555 555 555', email: 'jSmith@email.com'},
    {id: 2, name: 'Jane Doe', number: '777 777 777', email: 'janeD@alernateEmail.co.uk'}
]

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{
        contactAdd: {
            reducer(state, action){
            state.push(action.payload)
            },
            prepare(name, number, email){
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                        email
                    }
                }
            }
        }
    }
})

export const { contactAdd } = contactsSlice.actions;
export default contactsSlice.reducer;