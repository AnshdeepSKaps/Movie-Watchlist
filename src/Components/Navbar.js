import React, { Component } from 'react'
import SearchDropDown from './SearchDropDown'

export default class Navbar extends Component {

    constructor() {
        super()
        this.changeState = this.changeState.bind(this)
        this.state = {
            movie: this.movie,
            loading: false,
            isActive: false
        }
    }

    handleChange = (event) => {
        this.setState({ searchString: event.target.value })
    }

    changeState = () => {
        this.setState({ isActive: false })
    }

    handleSearch = async () => {

        this.setState({
            loading: true,
            isActive: true
        })
        const data = await fetch(`http://www.omdbapi.com/?t=${this.state.searchString}&apikey=5ee30d99`)
        const parsedData = await data.json()
        this.setState({
            movie: parsedData,
            loading: false
        })
    }

    render() {

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="d-flex flex-row justify-content-between w-100">

                        <a className="navbar-brand ms-3" href="#" style={{ fontSize: "2rem" }}>Movie Watch List</a>

                        <div className="d-flex align-self-center me-3">
                            <input onChange={this.handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" onClick={this.handleSearch}>Search</button>
                            {this.state.isActive && this.state.movie && <SearchDropDown changeFunction={this.changeState} title={this.state.movie.Title} year={this.state.movie.Year} loading={this.state.loading} poster={this.state.movie.Poster} movie={this.state.movie} />}
                        </div>

                    </div>
                </nav >
            </div >
        )
    }
}
