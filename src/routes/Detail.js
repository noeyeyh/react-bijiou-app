import React from "react";
import { useParams } from "react-router-dom";
import {addItem} from "./../store.js";
import {useDispatch} from "react-redux";


function Detail(props) {
    

    let {id} = useParams();
    id = parseInt(id);
    let 찾은상품 = props.necklaces.find(x => x.id === id - 1);
    let dispatch = useDispatch()

    
    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-md-6">
                    <img src={`/${id}.png`} alt="" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.price}</p>
                    <button className="btn btn-outline-dark" onClick= {() => {
                        dispatch(addItem({id: id, name: props.necklaces[id].title, count: 1}))
                    }}>구매하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;