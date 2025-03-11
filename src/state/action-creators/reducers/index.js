// Reducer function to handle deposit and withdraw actions
const reducer = (state = 0, action) => {
    
    // Check if the action type is 'deposit'
    if (action.type === 'deposit') {
        return state + action.payload; // Increase state (balance) by the deposited amount
    } 
    
    // Check if the action type is 'withdraw'
    else if (action.type === 'withdraw') {
        return state - action.payload; // Decrease state (balance) by the withdrawn amount
    } 
    
    // If no matching action type, return the current state
    else {
        return state;
    }
}

export default reducer; // Export the reducer for use in the Redux store
