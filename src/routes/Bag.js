import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {changeName, increase} from "./../store/userSlice.js";
import {addCount} from './../store.js';


function Bag() {

    let state = useSelector((state)=> state)
    let dispatch = useDispatch();

    return(
        <div>

            <h6>{state.user.name} {state.user.age}의 장바구니</h6>
            <button onClick={() => {dispatch(increase())}}>버튼</button>
            
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.Bag?.map((a, i) =>
                            <tr key={i}>
                                <td>{state.Bag[i].id}</td>
                                <td>{state.Bag[i].name}</td>
                                <td>{state.Bag[i].count}</td>
                                <td>
                                    <button onClick={() => {
                                        dispatch(changeName());
                                        dispatch(addCount(state.Bag[i].id))      
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Bag;