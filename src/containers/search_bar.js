import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''};

        // this is a way to bypass the "THIS" related bug on setState.
        // basically we are overriding the onInputChange method
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){
        //console.log(event.target.value);
        this.setState({term: event.target.value});

    }

    onFormSubmit(event){
        // prevent browser to submit by default
        event.preventDefault();

        // weather API KEY: f7e0de7e479713428584bb036d708e5a

    }

    render() {
        return ( 
            <form onSubmit={this.onFormSubmit} className = "input-group"> 
                <input 
                    placeholder="get a five-day forecast in your favorite cities"
                    value={this.state.term}
                    className="form-control"
                    onChange={this.onInputChange}
                /> 
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}