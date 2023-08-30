import { useState } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';
import './Styles/App.css';
import bg from "./images/bg3.JPG";
import data from './data.js';
import {  Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import Bag from './routes/Bag.js';

function App() {

  let [necklaces] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">


      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => { navigate('/')}}>Bijiou</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/Shop')}}>Shop</Nav.Link>
            <Nav.Link onClick={() => { navigate('/Bag')}}>Bag</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

     
      <Routes>
        <Route path="/" element={<div className="main-bg" style={{backgroundImage : 'url(' + bg + ')'}}></div>} />;
        <Route path="/shop" element={
          <>
          <div className="container">
            <div className="row">
            {
              necklaces.map((a, i) => {
                return (
                  <div className="col-md-4">
                  <Card necklaces={necklaces[i]} i={i}></Card>
                  </div>
                )
              })
            }
            </div>
          </div>
          </>
        } />

        
        <Route path="/detail/:id" element={<Detail necklaces={necklaces}/>} />
        <Route path="/Bag" element={<Bag />} />
      
      </Routes>
     


    </div>
  );
}


function Card(props) {
  let navigate = useNavigate();
  const imageUrl = `${process.env.PUBLIC_URL}/${props.i+1}.png`;

  return (
    <div>
      <img src={imageUrl} width="80%" onClick={() => { navigate(`/detail/${props.i+1}`)}}/>
      <h4>{props.necklaces.title}</h4>
      <p>{props.necklaces.price}</p>
    </div>
  );
}


export default App;
