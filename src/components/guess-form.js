import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form 
            onSubmit={event => {
                event.preventDefault();
                // console.log(event.target.userGuess.value);
                const userVal = parseInt(event.target.userGuess.value);
                props.submit(userVal);
                // props.compare();
                event.target.userGuess.value = '';
        
        }}>
            <input type="number" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off" max="100" min="0"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

