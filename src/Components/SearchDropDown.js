import React, { Component } from 'react'
import Spinner from './Spinner'


export default class SearchDropDown extends Component {

    constructor(props) {
        super(props)
        this.handleClose = this.handleClose.bind(this)
        this.state = {
            loading: false,
        }
    }

    handleClose = () => {
        this.props.changeFunction()
    }

    handleAdd = async () => {

        const resp = await fetch('https://mern-watch-list.herokuapp.com/', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                movie: this.props.movie
            })
        })
    }

    render() {

        const imageStyle = {
            width: "80%"
        }

        let { changeFunction, title, year, loading, poster, movie } = this.props

        const style = {
            width: "19.5vw",
            // height: "25vh",
            position: "absolute",
            border: "1px solid black",
            top: "9vh",
            left: "79.3vw",
            borderRadius: "10px",
            backgroundColor: "white",
            zIndex: "2"
        }

        return (

            <div style={style} id="drop-down">
                <div className="d-flex justify-content-center bg-warning" style={{
                    borderBottom: "2px solid black",
                    fontSize: "1.2rem",
                    borderTopLeftRadius: "inherit",
                    borderTopRightRadius: "inherit"

                }}>Search Result</div>
                {this.props.loading && <Spinner />}
                {!this.props.loading &&
                    <div className='d-flex flex-column bd-highlight justify-content-center align-items-center' style={
                        {
                            backgroundColor: "rgba(0,0,0,0.9)",
                            color: "white",
                            borderBottomLeftRadius: "inherit",
                            borderBottomRightRadius: "inherit"
                        }
                    }>
                        <h2 className='text-center mt-2'>{this.props.title} ({this.props.year})</h2>
                        <img src={this.props.poster} alt="wtrf" style={{
                            border: "2px solid grey",
                            height: "48vh"
                        }} />
                        <div className="d-flex mt-3 mb-3 justify-content-around" style={
                            {
                                width: "100%"
                            }
                        }>
                            <button className="btn btn-warning w-25" onClick={this.handleAdd}>Add</button>
                            <button className="btn btn-danger  w-25" onClick={this.handleClose}>Close</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
