import React from 'react';

const Ninjas = ({ninjas, deleteNinja}) => {    
        
        const ninjaList = ninjas.map(ninja => {
            if (ninja.age > 20) {
                return (
                    <div className="ninja" key={ninja.id}>
                    <div>Name: { ninja.name }</div>
                    <div>Belt: { ninja.age }</div>
                    <div>Age: { ninja.belt }</div>
                    <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
                    </div>
                )
            } else {
                return null;
            }
        });

        return (
            <div className="ninja-list">
                { ninjaList }
            </div>
        );
    }

export default Ninjas;