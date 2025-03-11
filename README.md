🛍️ Redux Shopping Cart 🛒
A simple shopping cart project built with React, Redux, and Bootstrap, featuring a balance system that allows users to deposit and withdraw money dynamically.

🔥 Features
✅ Redux State Management – Track user balance, deposit, and withdraw money.
✅ React Router – Navigate seamlessly between pages.
✅ Bootstrap UI – Modern, responsive, and user-friendly design.
✅ Dynamic Pricing – Add and remove items while updating the total cost.
✅ Optimized State Handling – Using react-redux and redux-thunk.

🎯 Focus on Redux – How It Works?
This project is designed to demonstrate Redux in action, showing how state management works in a React application.

🔵 1. Redux Store (store.js)
The store is the central place where the global state is stored. It is created using:

javascript
Copy
Edit
import { createStore, applyMiddleware } from "redux";
import reducers from "./action-creators/reducers";
import { thunk } from "redux-thunk";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
Here, we apply Redux Thunk as middleware to allow asynchronous actions.

🔴 2. Actions (action-creators/index.js)
Actions define what kind of changes we want to make in the state.

Deposit Money Action
javascript
Copy
Edit
export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: Number(amount),
        });
    };
};
Withdraw Money Action
javascript
Copy
Edit
export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: "withdraw",
            payload: Number(amount),
        });
    };
};
These functions dispatch actions with a type and payload.

🟢 3. Reducer (reducers/index.js)
A reducer determines how the state should change based on an action.

javascript
Copy
Edit
const reducer = (state = 0, action) => {
    if (action.type === 'deposit') {
        return state + action.payload;
    } else if (action.type === 'withdraw') {
        return state - action.payload;
    } else {
        return state;
    }
};

export default reducer;
Here, when a deposit action is dispatched, the balance increases.
When a withdraw action is dispatched, the balance decreases.

🟡 4. Connecting Redux to React (Shop.js)
We use Redux hooks to connect our React components to the Redux store.

javascript
Copy
Edit
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state/index';
import { bindActionCreators } from 'redux';

const dispatch = useDispatch();
const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch);
const amount = useSelector(state => state.amount);
useSelector(state => state.amount) – Gets the current balance from the Redux store.
useDispatch() – Used to dispatch actions like deposit and withdraw.
bindActionCreators() – Binds action creators so we can call them directly.
📂 Project Structure
scss
Copy
Edit
📦 Redux-Shopping-Cart  
 ┣ 📂 src  
 ┃ ┣ 📂 component  
 ┃ ┃ ┣ 📜 Navbar.js  
 ┃ ┃ ┣ 📜 Shop.js  
 ┃ ┃ ┣ 📂 image (Contains product images)  
 ┃ ┣ 📂 state  
 ┃ ┃ ┣ 📂 action-creators  
 ┃ ┃ ┃ ┣ 📜 index.js (Export all action creators)  
 ┃ ┃ ┃ ┣ 📜 reducer.js (Handles deposit & withdraw actions)  
 ┃ ┃ ┣ 📜 store.js (Configures Redux store)  
 ┃ ┣ 📜 App.js (Main React component)  
 ┃ ┣ 📜 index.js (Entry point of the app)  
 ┣ 📜 package.json  
 ┣ 📜 README.md  
 ┣ 📜 .gitignore  
🚀 Installation & Setup
1️⃣ Clone the repository

bash
Copy
Edit
git clone https://github.com/AhsanLaeeq/Redux-Shopping-Cart.git
cd Redux-Shopping-Cart
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Run the application

bash
Copy
Edit
npm start
⚡ Technologies Used
🔹 React – Component-based UI
🔹 Redux – State management
🔹 Redux-Thunk – Async middleware
🔹 Bootstrap – Styling framework
🔹 React Router – Navigation

📸 Screenshots
🏠 Home Page	🛍️ Shop Page
👨‍💻 Author
Ahsan Laeeq – Full-Stack Developer
🔗 GitHub Profile

🚀 Happy Coding! 🚀

