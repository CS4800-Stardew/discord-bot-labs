import 'bootstrap/dist/css/bootstrap.css'
import {Component} from "react"
import Sidebar from './components/sidebar'

class BotBuilder extends Component {

    render(){
        return (
            //Div class for menu
            <div className="wrapper container-fluid no-padding">
                <Sidebar/>
            </div>
        );
    }
}

export default BotBuilder;