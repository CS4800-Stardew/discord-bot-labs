import React, {Component, useState} from 'react';
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
            jsonList: [],
        };
    }

    removeDuplicates(newData) {
        newData.filter((item, index, self) => self.findIndex(i => i.Name === item.Name) === index);
        this.state.finalList = newData

        console.log("this is finalList: ", this.state.finalList)
    }


    showCommand = formNumber => {
        this.setState({ activeForm: formNumber });


    };

    addCommand = () => {
        const jsonObject = {
            Name: '',
            Action: '',
        }

        const newCommandNum = this.state.highestCommandNum + 1;
        this.setState(prevState => ({
            forms: [...prevState.forms, newCommandNum],
            highestCommandNum: newCommandNum,
        }));

        this.state.jsonList.push(jsonObject)
        console.log("jsonList: ", this.state.jsonList)
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
                    jsonList={this.state.jsonList}
                />
                <BotForm
                    forms={this.state.forms}
                    activeForm={this.state.activeForm}
                    removeCommand={this.removeCommand}
                    jsonList={this.state.jsonList}
                />
            </div>
        );
    }
}

export default BotBuilder;
