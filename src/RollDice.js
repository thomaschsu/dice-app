import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        side: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props);
        this.roll = this.roll.bind(this);
        this.state = {
            die1: 'one',
            die2: 'one',
            isRolling: false
        }
    }
    roll() {
        let randomNum = Math.floor(Math.random() * this.props.side.length);
        let randomNum2 = Math.floor(Math.random() * this.props.side.length);
        this.setState({
            die1: [this.props.side[randomNum]],
            die2: [this.props.side[randomNum2]],
            isRolling: true
        })
    }
    render() {
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die number={this.state.die1} />
                    <Die number={this.state.die2} />
                </div>
                <button onClick={this.roll}>Roll Dice!</button>
            </div>
        )
    }
}

export default RollDice;