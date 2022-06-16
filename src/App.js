import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import Container from './Components/Container'
import { BrowserRouter } from "react-router-dom";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar />
                    <h1 className='d-flex justify-content-center mt-4 mb-5'>Your Watch List</h1>
                    <Container />
                </div>
            </BrowserRouter>
        )
    }
}
