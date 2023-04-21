//use reducer is used when we want to manage multiple states with a single action (e.g. a click)
import React, {useReducer, useState} from "react";
//When changing 2 states we can use useState twice
const UseReducerTutorial = () => {
    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(true);

    return (
        <div>
            <h1>{count}</h1>
            <button
              onClick={() => {
                //when clicking the count increments and showText is the opposite to what's now, so goes between true and false
                setCount(count + 1)
                setShowText(!showText);
              }}
            >
              Click here
            </button>
            {/*showText only appear if the bulean is equal to true*/}
            {showText && <p>This is a text</p>}
        </div>
    )
}

//instead we can use useReducer

//reducer function with what happens with all the states below, counter and showingText
//2 arguments - state to add access to value of each state + action - a way to determine what we're doing with each state
//then we're using switch to determine what action we take for different states
const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            //we return state of count + 1 but we keep showingText at current state
            return {
                counter: state.counter + 1, 
                showingText: state.showingText
            };
            //for this case we're not changing count, but we're chaning showingText to the opposite value
        case "TOGGLE":
            return {counter: state.counter, showingText: !state.showingText};
            //for default return empty values
        default:
            return state;
    };

};
export const ReducerTutorial = () => {
   //we start by creating a variable that will hold both states, in this case an object
   //we're calling it state and we have a dispatch function which will be used to change value of our states
   //inside useReducer we have a reducer function (which we'll create) and set values for all states
   const [state, dispatch] = useReducer(reducer, 
    {counter: 0, 
    showingText: true});
    return (
        <div>
            <h1>{state.counter}</h1>
            {/* {Now we needt to dispatch(call) an action} */}
            <button onClick={() => {
                dispatch ({type: "INCREMENT"});
                dispatch ({type: "TOGGLE"});
            }}>
              useReducer
            </button>
            {/*showText only appear if the bulean is equal to true*/}
            {state.showingText && <p>Hello back!</p>}
        </div>
    )
}