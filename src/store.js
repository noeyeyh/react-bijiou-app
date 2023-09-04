import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice.js';

let Bag = createSlice({
    name: 'Bag',
    initialState: [],
    reducers: {
        addCount(state, action) {
            let 번호 = state.findIndex((a) => a.id === action.payload);
            if (번호 !== -1) {
                state[번호].count++;
            }
        },
        addItem(state, action) {
            let 번호 = state.findIndex((a) => a.id === action.payload.id);
            if (번호 !== -1) {
                state[번호].count++;
            } else {
                state.push({ ...action.payload, count: 1 });
            }
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