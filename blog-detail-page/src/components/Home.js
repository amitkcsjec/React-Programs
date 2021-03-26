// import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux';


class Home extends Component {
    // state = {
    //     posts: [ ]
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => {
    //             console.log(res);
    //             this.setState({
    //                 posts: res.data.slice(0, 10)
    //             })
    //         })
    // }
    render () {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A pokeball" />
                    <div className="card-content">
                    <Link to={'/' + post.id}>
                    <span className="card-title red-text">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                    </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return (
            <div className="container home">
            <h4 className="center">Home</h4>
            {postList}
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);