import React, { Component } from 'react'

class NinjasDestructuring extends Component {
    render() {
        const { name, age, belt } = this.props;
        //const ninjaList = ninjas.map(ninjas => {})
        return (
            <div>
            <div>Name: { name }</div>
            <div>Age: { age }</div>
            <div>Belt: { belt }</div>  
            </div>
        )
    }
}
