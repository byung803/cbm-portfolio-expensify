import React from 'react';
import { connect } from 'react-redux'; 
import numeral from 'numeral';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'; 
import selectExpensesTotal from '../selectors/expensesTotal';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses</p>
            ) : (
                props.expenses.map((expense, i) => {
                    return (
                            <ExpenseListItem key={expense.id} expense={expense} />                            
                    );
                })                
            )
        }
        <p>{`Viewing ${props.expenses.length} Totalling ${numeral(props.total / 100).format('$0,0.00')}`}</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        total: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
    };
};


export default connect(mapStateToProps)(ExpenseList); 
