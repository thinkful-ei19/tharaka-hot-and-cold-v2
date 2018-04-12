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
            currentFeedback: "Make your guess!",
            guessCount: 0,
            guessList: [],
            showModel: false,
            showMain: true,
            newGame: false
        }
    }

    setGuessNum(guessNum) {
        this.setState({guessNum}, ()=>{//FIX FOR THE GUESS VALUE BUG
            // console.log('GuessNum', this.state.guessNum);
            this.compareNum();
            this.setGuessCount(this.state.guessCount + 1);
            this.setGuessList(guessNum)
            // console.log('COUNT', this.state.guessCount);
            console.log('LIST', this.state.guessList);
        })
        // console.log('GuessNum', this.state.guessNum)
    }

    setCurrentFeed(currentFeedback) {
        this.setState({currentFeedback})
    }

    setGuessCount(guessCount) {
        this.setState({guessCount})
    }

    setGuessList(guess) {
        this.setState({guessList:[...this.state.guessList, guess]})
    }
    

    showModelUpdate() {
        this.setState({showModel: !this.state.showModel})
    }

    showMainUpdate() {
        this.setState({showMain: !this.state.showMain})
        this.setState({showModel: !this.state.showModel})
    }

    setNewGame() {
        this.setState({newGame: !this.state.newGame})
        this.setState({actualNum: Math.floor(Math.random() * 100 + 1)})
        this.setState({currentFeedback: "Make your guess!"})
        this.setState({guessCount: 0})
        this.setState({guessList: []})
        this.setState({showModel: false})
        this.setState({showMain: true})
        // this.setState({})
    }


    compareNum() {
        console.log(this.state);
        if(this.state.guessNum === this.state.actualNum){
            // console.log('MATCH');
            this.setCurrentFeed(this.state.possibleFeedback[1]);
        } else if((this.state.actualNum <= this.state.guessNum + 20) && (this.state.actualNum >= this.state.guessNum - 20)) {
            if((this.state.actualNum <= this.state.guessNum + 10) && (this.state.actualNum >= this.state.guessNum - 10)) {
                // console.log('SUPER HOT');
                this.setCurrentFeed(this.state.possibleFeedback[4]);
            } else {
                // console.log('HOT');
                this.setCurrentFeed(this.state.possibleFeedback[3]);
            }
        } else if((this.state.actualNum > this.state.guessNum + 20) || (this.state.actualNum < this.state.guessNum -20)) {
            if((this.state.actualNum > this.state.guessNum + 30) || (this.state.actualNum < this.state.guessNum - 30)) {
                // console.log('SUPER COLD');
                this.setCurrentFeed(this.state.possibleFeedback[5]);
            } else {
                // console.log('COLD');
                this.setCurrentFeed(this.state.possibleFeedback[2]);
            }
        } 
    }


    render(){

        return (
            <div>
                <Header showMod={this.state.showModel} showModButton={() => {this.showModelUpdate()}} showMainButton={() => {this.showMainUpdate()}} showNewButton={() => {this.setNewGame()}}/>
                <GuessSection feedback={this.state.currentFeedback} />
                <GuessForm submit={guessNum => this.setGuessNum(guessNum)} /> {/*Included GuessForm directly over here instead of through Guest Section*/}
                <GuessCount count={this.state.guessCount} />
                <GuessList guesses={this.state.guessList} />
            </div>
        );
    }
}

