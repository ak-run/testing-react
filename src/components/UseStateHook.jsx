import React, {useState} from "react";
//useState
//The following code won't udpate value on the website because although let counter will change with each click, the website won't refresh to reflect it
// const StateTutorial = () => {
//     let counter2 = 0;
//     const Increment = () => {
//         counter2 = counter2 +1;
//     }
//     return (
//     <div>
//     {/*the counter doesn't rerender with each click */}
//       {counter2}
//         <button onClick={Increment}>Increment</button>
//     </div>
//     );
// };

//we need to replace counter variable with variable that is defined by a state
export const UseStateTutorial = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
    setCounter(counter + 1);

};

return (
    <div>
    {/*the counter doesn't rerender with each click */}
      {counter}
        <button onClick={increment}>Increment with useState</button>
    </div>
)

};

//here we want to grab the value of the input everytime there's a change. So it doesn't stay Agata
export const InputState = () => {
    const [inputValue, setInputValue] = useState("Agata");
//onChange function has event as an argument by default, the event contains user input
    let onChange = (event) => {
        //we need to grab the value of the input
        const newValue = event.target.value;
        setInputValue(newValue);

    };

    return (
        <div>
        {/*we're calling onChange property which calls a function everytime there's change to value of the input */}
            <input placeholder="enter something" onChange={onChange}/>{inputValue}
        </div>
    )

};