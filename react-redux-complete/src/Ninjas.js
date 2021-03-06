import React from 'react';

const Ninjas =({ninjas}) => {
    
        // const { ninjas } = props;
        const ninjaList = ninjas.map(ninja => {
            return (
                <div className="ninja" key={ninja.id}>
                    <div>Name: { ninja.name }</div>
                    <div>Age: { ninja.age }</div>
                    <div>Belt: { ninja.belt }</div>
                </div>
            );
        })
        return (
            <div className="ninja-ninjaList">
                { ninjaList }
            </div>
        );
    }

export default Ninjas;