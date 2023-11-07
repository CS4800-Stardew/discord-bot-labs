import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "./components/sidebar";
import BotForm from "./components/botForm";

class BotBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cmdNames: [],
      cmdIds: [],
      highestCmdNum: 0,
      activeCmd: null,
      jsonList: [],
    };

    this.botFormRef = React.createRef();
  }

  submitBot = () => {
    console.log(this.state.jsonList);
  };

  //   removeDuplicates(newData) {
  //     newData.filter(
  //       (item, index, self) =>
  //         self.findIndex((i) => i.Name === item.Name) === index
  //     );
  //     this.state.finalList = newData;

  //     console.log("this is finalList: ", this.state.finalList);
  //   }

  showCommand = (id) => {
    this.setState({ activeCmd: id });
  };

  addCommand = () => {
    const jsonObject = {
      Name: "",
      Action: "",
    };

    console.log("prejsonList: ", this.state.jsonList);
    const newCmdNum = this.state.highestCmdNum + 1;
    this.setState((prevState) => ({
      cmdIds: [...prevState.cmdIds, newCmdNum],
      cmdNames: [...prevState.cmdNames, "Command " + newCmdNum],
      jsonList: [...prevState.jsonList, jsonObject],
      highestCmdNum: newCmdNum,
    }));

    console.log("jsonList: ", this.state.jsonList);
  };

  removeCommand = (id) => {
    if (this.state.cmdIds.length > 0) {
      const idx = this.state.cmdIds.indexOf(id);
      //   this.state.cmdIds.splice(idx, 1);
      //   this.state.cmdIds.splice(idx, 1);
      //   this.state.activeForm = null;
      this.setState((prevState) => ({
        cmdIds: prevState.cmdIds.filter((cmdId) => cmdId !== id),
        cmdNames: prevState.cmdNames.filter(
          (cmdName, index) => this.state.cmdIds[index] !== id
        ),
        activeForm: null,
      }));
    }
  };

  render() {
    return (
      <div className="wrapper container-fluid no-padding">
        <Sidebar
          cmdIds={this.state.cmdIds}
          addCommand={this.addCommand}
          showCommand={this.showCommand}
        />
        <BotForm
          ref={(ref) => (this.botFormRef[0] = ref)}
          cmdIds={this.state.cmdIds}
          activeCmd={this.state.activeCmd}
          removeCommand={this.removeCommand}
          jsonList={this.state.jsonList}
        />
        <button onClick={this.submitBot}>Submit</button>
      </div>
    );
  }
}

export default BotBuilder;
