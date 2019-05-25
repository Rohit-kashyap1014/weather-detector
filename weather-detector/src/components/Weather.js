import React, {Component} from 'react';

class Weather extends Component {
    render() {
        return(
            <div>
                {this.props.city && this.props.country && <p>Destination: {this.props.city} :: {this.props.country} </p>}
                { this.props.temperature && <p>Temperature : {this.props.temperature} &#8451; </p>}
                {this.props.humidity && <p>Humidity : {this.props.humidity} </p>}
                {this.props.description && <p>Weather Conditions : {this.props.description} </p>}
                {this.props.error && <p> {this.props.error} </p>}

            </div>
        );
    }
};

export default Weather;