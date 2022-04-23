import React from 'react';
import ReactDOM from 'react-dom';
import {Nav, Navbar, Col, Row, Container, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import {Route, Routes, Link, BrowserRouter} from 'react-router-dom';

import EditExpense from './EditExpense';
import Expenses from './Expenses';
import CreateExpense from './CreateExpense';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header>
                    <Navbar>
                        <Container>
                            <Navbar.Brand>
                                <Link className='nav-link' to="/create-expense">Expense manager</Link>
                            </Navbar.Brand>
                            <Nav className="justify-content-end">
                                <Nav>
                                    <Link to="/create-expense">Create expense</Link>
                                    <Link to="/expenses">Expenses List</Link>
                                </Nav>
                            </Nav>
                        </Container>
                    </Navbar>
                </header>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="wrapper">
                                <Routes>
                                    <Route path="/" element={<CreateExpense/>} />
                                    <Route path="/create-expense" element={<CreateExpense/>} />
                                    <Route path="/edit-expense/:id" element={<EditExpense/>} />
                                    <Route path="/expenses" element={<Expenses/>} />
                                </Routes>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(<App />, root);
}
