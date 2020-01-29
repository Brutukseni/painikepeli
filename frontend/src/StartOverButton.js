import React from 'react';
import './App.css'

class StartOverButton extends React.Component {
    constructor(props) {
        super(props);
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent() {
        this.props.startOver();
    };

    render() {
        return (
            <div className="startOverDiv">
                <button className="startOverButton" onClick={this.clickEvent}>Start over</button>
            </div>
        );
    }
}

export default StartOverButton