// Action creator for depositing money
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',  // Action type for deposit
            payload: Number(amount), // Convert amount to a number before dispatching
        });
    };
};

// Action creator for withdrawing money
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw", // Action type for withdrawal
            payload: Number(amount), // Convert amount to a number before dispatching
        });
    };
};
