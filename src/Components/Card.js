import React, { Component } from 'react'

export default class Card extends Component {

    handleRemove = async (event) => {

        const data = await fetch("https://mern-watch-list.herokuapp.com/movies/remove", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                movie: this.props.movie.title
            })
        })
    }

    render() {

        let { movie } = this.props

        return (
            <div className='col-sm-4 mb-5'>
                <div className="card" style={{
                    width: "20vw",
                    height: "100%",
                    margin: "auto auto",
                    border: "1px solid black",
                    boxShadow: "-0px -0px 10px black"
                }}>
                    <img src={this.props.movie.posterUrl} className="card-img-top" alt="..." style={{ width: "100%" }} />
                    <div className="card-body">
                        <h4 className="card-title text-center">{this.props.movie.title}</h4>
                        <p className="card-text text-center" style={{
                            // height: "30vh"
                        }}>{this.props.movie.plot}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='text-center' style={{ fontWeight: "bolder" }}>Rating: {this.props.movie.rating}</div>
                            <button onClick={this.handleRemove} className="btn btn-danger font-weight-bold">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
