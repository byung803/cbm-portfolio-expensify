import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixture/expenses';

let editExpense, removeExpense, history, wrapper; 

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn(); 
    history = { push: jest.fn() }; 
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history} 
            expense={expenses[2]} 
        />);
});

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot(); 
});

test('should handle editExpense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');  
});

test('should handle removeExpense', () => {
    wrapper.find('button').prop('onClick')();
    //wrapper.find('button').simulate('click'); 위 코드와 동일하다. 
    //onClick 함수를 찾은다음 넣을 argument가 없는 관계로 
    //그냥 click event만 넣어줘도 동일한 역할을 한다. 
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});