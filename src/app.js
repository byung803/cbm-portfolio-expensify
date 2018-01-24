import React from 'react';
import ReactDOM from 'react-dom'; 
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css'; 
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';  


const store = configureStore(); 


store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 50 }));
store.dispatch(addExpense({description: 'Gas bill', amount: 22000, createdAt: 40 }));
store.dispatch(addExpense({description: 'Rent', amount: 109500, createdAt: 70 }));
store.dispatch(setTextFilter(''));

store.subscribe(() => {
    console.log(store.getState());
});

console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters)); 

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));

