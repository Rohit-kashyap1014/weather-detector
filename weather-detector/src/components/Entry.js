import React, {Component} from 'react'

class Entry extends Component {
    render() {
        return(
            <form onSubmit = {this.props.detectweather}>
		        <input type="text" name="city" placeholder="City.."/>
		        <input type="text" name="country" placeholder="Country.."/>
		        <button>Get Weather</button>
	        </form>
        );
    }
};

export default Entry;