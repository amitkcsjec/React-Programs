const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque sequi beatae voluptates numquam hic, atque voluptatem, labore harum quisquam esse blanditiis? Aliquid ratione totam quam? At aliquam rerum amet reprehenderit.'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque sequi beatae voluptates numquam hic, atque voluptatem, labore harum quisquam esse blanditiis? Aliquid ratione totam quam? At aliquam rerum amet reprehenderit.'},
        {id: '3', title: 'a Helix Fossil was Found', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque sequi beatae voluptates numquam hic, atque voluptatem, labore harum quisquam esse blanditiis? Aliquid ratione totam quam? At aliquam rerum amet reprehenderit.'}
    ]
}

const rootReducer = (state = initState, action) => {
    return state;
}

export default rootReducer;