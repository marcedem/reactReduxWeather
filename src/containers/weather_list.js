import React,  { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component{
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> Ctiy </th>
                        <th> Temperature </th>
                        <th> Pressure </th>
                        <th> Humidity </th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        );
    }
}

function mapsStateToProps( {weather }){
    return { weather }; // {weather} === {weather:weather}
}

export default connect(mapsStateToProps)(WeatherList);