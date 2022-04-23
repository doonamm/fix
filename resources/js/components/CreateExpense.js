import React, {useState} from 'react';
import { 
    Form, 
    Button,
    Row,
    Col 
} from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
import Expenses from './Expenses';
import { useNavigate } from 'react-router-dom';

export default function CreateExpense(props){
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    function onChangeName(e){
        setName(e.target.value);
    }

    function onChangeAmount(e){
        setAmount(e.target.value);
    }

    function onChangeDescription(e){
        setDescription(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();

        const expense = {
            name: name,
            amount: amount,
            description: description
        };

        axios.post('http://localhost:8000/api/expenses', expense)
        .then(res => res.data)
        .then(res => {
            console.log(res);

            Swal.fire(
                'Good job!',
                'Expense Added Successfully',
                'success'
            );

            navigate(0);
        })
        .catch(err => console.log(err));
    }

    return(
        <div className="form-wrapper">
            <Form onSubmit={onSubmit}>
                <Row> 
                    <Col>
                        <Form.Group controlId="Name">
                           <Form.Label>Name</Form.Label>
                           <Form.Control type="text" value={name} onChange={onChangeName}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="Amount">
                           <Form.Label>Amount</Form.Label>
                           <Form.Control type="number" value={amount} onChange={onChangeAmount}/>
                        </Form.Group>
                    </Col>  
                </Row>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="textarea" value={description} onChange={onChangeDescription}/>
                </Form.Group>

                <Button variant="primary" size="lg" block="block" type="submit">
                    Add Expense
                </Button>
            </Form>
            <br></br>
            <br></br>
            <Expenses></Expenses>
        </div>
    );
}
