import React, {Component} from 'react';
import NavBar from './components/navbar'
import Subscriptions from "./components/subscriptions";
import "./style/app-style.css"

class App extends Component {
    state = {
        subscriptions: [
            {
                id: "Facebook",
                value: "9.99€",
                status: "Active",
                imageUrl: 'https://picsum.photos/50'
            },
            {
                id: "Github",
                value: "22€",
                status: "Active",
                imageUrl: 'https://picsum.photos/50'
            },
            {
                id: "World of Warcraft",
                value: "12€",
                status: "Active",
                imageUrl: 'https://picsum.photos/50'
            },
            {
                id: "Netflix",
                value: "0.25€",
                status: "disabled",
                imageUrl: 'https://picsum.photos/50'
            }
        ]
    };

    handleDelete = (subscriptionId) => {
        const subscriptions = this.state.subscriptions.filter(c => c.id !== subscriptionId);
        this.setState({subscriptions: subscriptions});
    };

    render() {
        return (
            <React.Fragment>
                <div className="d-flex" id="wrapper">
                    <div className="bg-light" id="sidebar-wrapper">
                        <NavBar />
                    </div>
                    <div id="page-content-wrapper" className="m-2">
                        <Subscriptions
                            subscriptions={this.state.subscriptions}
                            onReset={this.handleReset}
                            onIncrement={this.handleIncrement}
                            onDelete={this.handleDelete}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;