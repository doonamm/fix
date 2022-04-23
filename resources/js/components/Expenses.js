import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import ExpenseTableRow from './ExpenseTableRow';

export default function Expenses(props){
    const [list, setList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/expenses/')
        .then(res => res.data)
        .then(res => {
            console.log('fetch list')
            setList(res);
        })
        .catch(err => console.log(err));
    }, []);

    return(
        <div className="table-wrapper"> 
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {list.map(item => <ExpenseTableRow key={item.id} expense={item}/>)}
                </tbody>
            </Table>
        </div>
    );
}