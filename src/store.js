import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js';


let Bag = createSlice({
    name: 'Bag',
    initialState : [
        
    ],
    reducers : {
        addCount(state, action){
            let 번호 = state.findIndex((a) => {return a.id === action.payload})
            state[번호].count++
        },
        addItem(state, action) {
            state.push(action.payload)
        },
        clearBag(state) {
            state.length = 0; // 장바구니 비우기
        }
    }
})

export let {addCount, addItem, clearBag} = Bag.actions

export default configureStore({
  reducer: {
    user: user.reducer,
    Bag: Bag.reducer
   }
}) 