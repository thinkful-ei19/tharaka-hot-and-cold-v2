import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form 
            onSubmit={event => {
                event.preventDefault();
                console.log(event.target.userGuess.value);
                const userVal = event.target.userGuess.value;
                props.submit(userVal);
                event.target.userGuess.value = '';
        
        }}>
            <input type="number" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off" max="100" min="0"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};



// export default function SearchForm(props) {
//     return (
//         <form onSubmit={e => e.preventDefault()}>
//             <label htmlFor="search">Search</label>&emsp;
//             <input
//                 aria-controls="character-count"
//                 type="search"
//                 id="search"
//                 name="search"
//                 placeholder="Dale Cooper"
//                 onChange={e => props.change(e.target.value)}//grabbing the value and passing it back to parent
//             />
//             {/* Dont need to pass back the value */}
//             <button onClick={props.click}>Click ME</button>   
//         </form>
//     );
// }
