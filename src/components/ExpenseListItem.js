import React from 'react'; 
import { Link } from 'react-router-dom';

const ExpenseListItem = (props) => {
    return ( 
        <div>
            <Link to={`/edit/${props.expense.id}`}>
                <h3>{`${props.expense.description}`}</h3>
            </Link>
            <p>{`Amount: ${props.expense.amount}`}</p>
            <p>{`CreatedAt: ${props.expense.createdAt}`}</p>
        </div>
)}

export default ExpenseListItem;