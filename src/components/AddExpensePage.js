import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {           //event method      
           this.props.addExpense(expense)   //addExpense is an Action Generator Function will pass data to reducer then reducer will pass the data to redux store
           this.props.history.push('/');    //history.push('/') its will take us back to the Dashboard after submittion 
    };
    render() {
        return(
            <div>
               <h1>Add Expense</h1>
                <ExpenseForm       //the <ExpenseForm/> component will render form to the browser 
                    onSubmit={this.onSubmit} //the onSubmits props will get data from ExpenseForm component on this.props.onSubmits() function and pass in the values set properties to addExpense Action Generator Function and go back to the Dashboard
                />
            </div>
        );
    }
} 
// const AddExpensePage = (props) => (
//     <div>
//         <h1>Add Expense</h1>
//         <ExpenseForm
//            onSubmit={(expense) => {
//             //    console.log(expense)
//             //    props.dispatch(addExpense(expense));  //on this line we are doing two things, we calling props.dispatch() which can easily be a spy or fake function but addExpense(expense) cannot be a spy or fake function beco's its imported and it is not pass in as a props, as a result will need to use a function that is pass to connect() which is called mapDispatchToProps which will help us to pass addExpense(expense) to props for easy testing.  
//                props.onSubmit(expense)
//                props.history.push('/');
//            }}        
//         />
//     </div>
// );

// mapDispatchToProps is a way to return your dispatch function, allowing you to extract or sperate them from the component itself. It will also allow you to pass Action Generator Function to props for easy testing.   
const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);