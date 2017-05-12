import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: ''};

        // this is a way to bypass the "THIS" related bug on setState.
        // basically we are overriding the onInputChange method
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        //console.log(event.target.value);
        this.setState({term: event.target.value});

    }

    onFormSubmit(event){
        // prevent browser to submit by default
        event.preventDefault();

        // We need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
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

// bind action creator with dispath make sure that action flow down to the reducers and the middlewares
function mapDispatchToProps(dispatch){
    // we are calling action here with fetchWeather
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);