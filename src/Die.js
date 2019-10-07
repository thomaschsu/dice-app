import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
    render() {
        return (
            <div>
                <i className={`Die fas fa-dice-${this.props.number} ${this.props.rolling && 'Die-rolling'}`} />
            </div>
        )
    }
}

export default Die;