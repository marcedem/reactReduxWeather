import React,  { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{
    renderWeather(cityData){
        const cityName = cityData.city.name;
        const cityTemperature = cityData.list.map(weather => weather.main.temp);
        const cityHumidity = cityData.list.map(weather => weather.main.humidity);
        const cityPressure = cityData.list.map(weather => weather.main.pressure);
        return (
            <tr key={cityName}>
                <td>{cityName}</td>
                <td><Chart data={cityTemperature} color="blue"  units="°C"/></td>
                <td><Chart data={cityPressure} color="orange"  units="hPa"/></td>
                <td><Chart data={cityHumidity} color="red"  units="%"/></td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th> Ctiy </th>
                        <th> Temperature (°C)</th>
                        <th> Pressure (hPa)</th>
                        <th> Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps( {weather }){
    return { weather }; // {weather} === {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);