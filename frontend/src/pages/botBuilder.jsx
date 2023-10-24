import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/sidebar';
import BotForm from './components/botForm';

class BotBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            forms: [],
            highestCommandNum: 0,
            activeForm: null,
        };
    }

    showCommand = formNumber => {
        this.setState({ activeForm: formNumber });
    };

    addCommand = () => {
        const newCommandNum = this.state.highestCommandNum + 1;
        this.setState(prevState => ({
            forms: [...prevState.forms, newCommandNum],
            highestCommandNum: newCommandNum,
        }));
    };

    removeCommand = formNumber => {
        if (this.state.forms.length > 0) {
            this.setState(prevState => ({
                forms: prevState.forms.filter(form => form !== formNumber),
                activeForm: null,
            }));
        }
    };

    render() {
        return (
            <div className="wrapper container-fluid no-padding">
                <Sidebar
                    forms={this.state.forms}
                    addCommand={this.addCommand}
                    showCommand={this.showCommand}
                />
                <BotForm
                    forms={this.state.forms}
                    activeForm={this.state.activeForm}
                    removeCommand={this.removeCommand}
                />
            </div>
        );
    }
}

export default BotBuilder;
