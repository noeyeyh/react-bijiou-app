import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js';


let Bag = createSlice({
    name: 'Bag',
    initialState : [
        {id: 1, name: 'Ocean Heart Necklace', count: 2},
        {id: 2, name: 'Retro Necklace', count: 1},
    ],
    reducers : {
        addCount(state, action){
            let 번호 = state.findIndex((a) => {return a.id === action.payload})
            state[번호].count++
        },
        addItem(state, action) {
            state.push(action.payload)
        }
    }
})

export let {addCount, addItem} = Bag.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    Bag: Bag.reducer
   }
}) 