import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import GuessForm from './guess-form';

export default class Game extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            guessNum: null,
        }
    }

    setGuessNum(guessNum) {
        this.setState({guessNum})
        console.log(this.state.guessNum)
    }

    render(){
        return (
            <div>
                <Header />
                {/* <GuessSection feedback="Make your guess!" /> */}
                <h2>Make your guess!</h2>
                <GuessForm submit={guessNum => this.setGuessNum(guessNum)} />
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}

