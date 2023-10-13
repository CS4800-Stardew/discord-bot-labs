import 'bootstrap/dist/css/bootstrap.css'
import {CommandForm} from './components/commandForm'
import {Component} from "react"

class BotBuilder extends Component {

    state = {
        commands: [
            {
                name: '',
                description: ''
            }
        ],
        viewForm: false,
        textShow: false,
    }

    render(){
        return (
            //Div class for menu
            <div className="wrapper container-fluid no-padding">

                <nav id="sidebar">
                    <div className="sidebar-header">
                        <h3>Commands</h3>
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <button type="button" id="addCommand" className="btn btn-info"
                                    onClick={() => this.setState({viewForm: !this.state.viewForm})}>
                                New Command
                            </button>
                        </li>
                    </ul>
                </nav>
                <div class="form-container">
                    {this.state.viewForm ? <CommandForm /> : null}
                </div>

            </div>
        );
    }
}

export default BotBuilder;