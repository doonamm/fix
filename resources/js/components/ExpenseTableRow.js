import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Button} from 'react-bootstrap';
import Swal from 'sweetalert2';

export default function ExpenseTableRow(props){
    const expense = props.expense;
    const navigate = useNavigate();

    function deleteExpense(){
        axios.delete('http://localhost:8000/api/expenses/' + expense.id)
        .then(res => res.data)
        .then(res => {
            console.log('Expense deleted');

            Swal.fire('Success', 'Expense deleted', 'success');

            navigate(0);
        })
        .catch(err => console.log(err));
    }

    return(
            <tr>
                <td>{expense.name}</td>
                <td>{expense.amount}</td>
                <td>{expense.description}</td>
                <td>
                    <Link className="edit-link" to={"/edit-expense/" + expense.id}>
                       <Button size="sm" variant="info">Edit</Button>
                    </Link>
                    <Button onClick={deleteExpense} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
    );
}