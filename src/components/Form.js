import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    getData = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitData = e => {
        e.preventDefault();
        this.props.createCard(this.state)
    }

    render() {
        return (
            <form className="new-card" onSubmit={this.submitData}>
                <h3>INSERT NEW CARD</h3>
                <label htmlFor="card-name">Name
                    <br /><input name="name" type="text" onChange={this.getData} required />
                </label>
                <br /><label htmlFor="card-picture">Image url
                    <br /><input name="picture" type="url" onChange={this.getData} required />
                </label>
                <br /><label htmlFor="card-description">Description
                    <br /><textarea name="description" rows="8" cols="1" onChange={this.getData} required />
                </label>
                <input className="button" type="submit" value="ADD" />
            </form>
        )
    }
}
