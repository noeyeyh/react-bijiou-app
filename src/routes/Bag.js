import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {addCount, clearBag} from './../store.js';

function Bag() {

    let state = useSelector((state)=> state)
    let dispatch = useDispatch();


    const handleRemoveClick = () => {
        dispatch(clearBag()); // 장바구니 비우기 액션을 dispatch
    };

    return(
        <div>
            
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
                                    <button type="button" class="btn btn-outline-dark" onClick={() => {
                                        dispatch(addCount(state.Bag[i].id))      
                                    }}>+</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
            <button type="button" class="btn btn-outline-dark" onClick={handleRemoveClick}>Delete All</button>
        </div>
    )
}

export default Bag;