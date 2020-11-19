import React from 'react';
import { useReducer } from 'react';

const initialState = { count: 0 };
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
            break;
        case "DECREMENT":

            return { count: state.count - 1 };
            break;
        default:
            return state;
    };

};

const ReducerCount = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <h1>this is Reduce Count:{state.count}</h1>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
        </>
    );
};

export default ReducerCount;