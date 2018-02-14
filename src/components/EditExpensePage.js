import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import RemoveModal from './RemoveModal';

export class EditExpensePage extends React.Component {
    state = {
        modalToggler: false
    }

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    }

    openModal = () => {
        this.setState(() => ({ modalToggler: true }));
        // this.props.startRemoveExpense(this.props.expense);
        // this.props.history.push('/');
    }

    closeModal = () => {
        this.setState(() => ({ modalToggler: false }));
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        className="button button--secondary"
                        onClick={this.openModal}
                    >
                        Remove Expense
                    </button>
                    <RemoveModal
                        modalToggler={this.state.modalToggler}
                        closeModal={this.closeModal}
                        expense={this.props.expense}
                        history={this.props.history}
                    />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);