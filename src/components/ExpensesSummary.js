import React from 'react';
import { connect } from 'react-redux'; 
import numeral from 'numeral'; 
import selectExpenses from '../selectors/expenses'; 
import selectExpensesTotal from '../selectors/expensesTotal';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expensesCount === 1 ? 'expense' : 'expenses'; 

    return (
    <div>
        <h1>{`Viewing ${props.expensesCount} ${expenseWord} Totalling ${numeral(props.expensesTotal / 100).format('$0,0.00')}`}</h1>
    </div>
    )
};

const mapStateToProps = (state) => ({
    expensesCount: selectExpenses(state.expenses, state.filters).length,
    expensesTotal: selectExpensesTotal(selectExpenses(state.expenses, state.filters))
});

export default connect(mapStateToProps)(ExpensesSummary);