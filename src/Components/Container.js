import React, { Component } from 'react'
import Card from './Card.js'

export default class Container extends Component {

    constructor() {
        super();
        this.state = { movies: null }
        this.getMovies()
    }

    getMovies = async () => {
        const m = await fetch("https://mern-watch-list.herokuapp.com/movies")
        const mov = await m.json()
        this.setState({ movies: mov })
    }

    render() {

        return (
            <div className='container'>
                <div className="d-flex row">
                    {this.state.movies && this.state.movies.map(movie => {
                        return <Card movie={movie} />
                    })}
                </div>
            </div>
        )
    }
}
