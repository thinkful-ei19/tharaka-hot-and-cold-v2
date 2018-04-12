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
            actualNum: Math.floor(Math.random() * 100 + 1),
            guessNum: null,
            possibleFeedback: ["Make your guess!", "You Won!", "Cold", "Hot", "Super Hot", "Super Cold"],
            currentFeedback: "Make your guess!"
        }
    }

    setGuessNum(guessNum) {
        this.setState({guessNum}, ()=>{//FIX FOR THE GUESS VALUE BUG
            // console.log('GuessNum', this.state.guessNum);
            this.compareNum();
        })
        // console.log('GuessNum', this.state.guessNum)
    }

    setCurrentFeed(currentFeedback) {
        this.setState({currentFeedback})
    }
    

    compareNum() {
        // console.log(this.state);
        if(this.state.guessNum === this.state.actualNum){
            console.log('MATCH');
            this.setCurrentFeed(this.state.possibleFeedback[1]);
        } else if((this.state.actualNum <= this.state.guessNum + 20) && (this.state.actualNum >= this.state.guessNum - 20)) {
            console.log('HOT');
            if((this.state.actualNum <= this.state.guessNum + 10) && (this.state.actualNum >= this.state.guessNum - 10)) {
                console.log('SUPER HOT');
                this.setCurrentFeed(this.state.possibleFeedback[4]);
            } else {
                this.setCurrentFeed(this.state.possibleFeedback[3]);
            }
        } else if((this.state.actualNum > this.state.guessNum + 20) || (this.state.actualNum < this.state.guessNum -20)) {
            console.log('COLD')
            if((this.state.actualNum > this.state.guessNum + 30) || (this.state.actualNum < this.state.guessNum - 30)) {
                this.setCurrentFeed(this.state.possibleFeedback[5]);
            } else {
                this.setCurrentFeed(this.state.possibleFeedback[2]);
            }
        }
    }


    render(){

        return (
            <div>
                <Header />
                <GuessSection feedback={this.state.currentFeedback} />
                <GuessForm submit={guessNum => this.setGuessNum(guessNum)} /> {/*Included GuessForm directly over here instead of through Guest Section*/}
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );
    }
}

