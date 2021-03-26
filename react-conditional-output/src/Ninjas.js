import React from 'react';

const Ninjas =({ninjas}) => {    
        // const { ninjas } = props;
        // const ninjaList = ninjas.map(ninja => {
        //     if (ninja.age > 20) {
        //     return (
        //         <div className="ninja" key={ninja.id}>
        //             <div>Name: { ninja.name }</div>
        //             <div>Belt: { ninja.belt }</div>
        //             <div>Age: { ninja.age }</div>
        //         </div>
        //     );
        //     } else {
        //         return null;
        //     }
        // })

        const ninjaList = ninjas. map(ninja => {
            return ninja.age > 20 ? (
                <div className="ninja" key={ninja.id}>
                    <div>Name: { ninja.name }</div>
                    <div>Belt: { ninja.belt }</div>
                    <div>Age: { ninja.age }</div>
                </div>
            ) : null;
        });

        return (
            <div className="ninja-ninjaList">
                { ninjaList }
            </div>
        );
    }

export default Ninjas;