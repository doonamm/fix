import React, {useState, useEffect} from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function EditExpense(props){
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [description, setDescription] = useState('');

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/expenses/' + id)
        .then(res => res.data)
        .then(res => {
            setName(res.name);
            setAmount(res.amount);
            setDescription(res.description);
        })
        .catch(err => console.log(err));
    }, []);

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

        axios.put('http://localhost:8000/api/expenses/' + id, expense)
        .then(res => res.data)
        .then(res => {
            console.log(res);
            Swal.fire(
                'Success!',
                'Expense updated Successfully',
                'success'
            );
        })
        .catch(err => console.log(err));
        
        navigate('/expenses');
    }   

    return(
        <div className="form-wrapper">
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={onChangeName} />
                </Form.Group>

                <Form.Group controlId="Amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control type="number" value={amount} onChange={onChangeAmount} />
                </Form.Group>

                <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={description} onChange={onChangeDescription} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Update Expense
                </Button>
            </Form>
        </div>
    );
}