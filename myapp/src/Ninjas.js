import React, { Component } from 'react'

class Ninjas extends Component {
    render() {
        // console.log(this.props);
        const { ninjas } = this.props;
        // const ninjaList = ninjas.map(ninja => {})
        return (
            <div className="ninja">
                <div>Name: Ryu</div>
                <div>Age: 30</div>
                <div>Belt: Black</div>

                <div>Name: { this.props.name }</div>
                <div>Age: { this.props.age }</div>
                <div>Belt: { this.props.belt }</div>
            </div>
        );
    }
}

export default Ninjas;