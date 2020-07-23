import React, {Component} from 'react';
import NavBar from './components/navbar'
import Subscriptions from "./components/subscriptions";
import "./style/app-style.css"

class App extends Component {
    state = {
        subscriptions: [
            {
                id: 0,
                name: "Facebook",
                value: "9.99€",
                status: "active",
                imageUrl: 'https://picsum.photos/50'
            },
            {
                id: 1,
                name: "Github",
                value: "22€",
                status: "active",
                imageUrl: 'https://picsum.photos/50'
            },
            {
                id:2,
                name: "World of Warcraft",
                value: "12€",
                status: "active",
                imageUrl: 'https://picsum.photos/50'
            },
            {
                id:3,
                name: "Netflix",
                value: "0.25€",
                status: "disabled",
                imageUrl: 'https://picsum.photos/50'
            }
        ]
    };

    handleActivation = (subscriptionId) => {
        const subscriptions = [...this.state.subscriptions];
        let subscriptionStatus = subscriptions[subscriptionId].status;
        if (subscriptionStatus === "active") subscriptions[subscriptionId].status = "disabled";
        else subscriptions[subscriptionId].status = "active";
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
                            onActivation={this.handleActivation}
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;