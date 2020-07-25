import React, {Component} from 'react';

class Subscription extends Component {

    constructor(props) {
        super(props);
        if (this.props.subscription.status === "active") this.activationButtonStyle = "btn btn-sm mt-2 mb-2 btn-success";
        this.activationButtonStyle = "btn btn-sm mt-2 mb-2 btn-danger";
    }

    handleStatus = () => {
        if (this.props.subscription.status === "active") {
            this.activationButtonStyle = "btn btn-sm mt-2 mb-2 btn-danger";
            return {color:"green"};
        }
        this.activationButtonStyle = "btn btn-sm mt-2 mb-2 btn-success";
        return {color:"red"};
    };

    handleActivationButton = () => {
        if (this.props.subscription.status === "active") {
            return "disable";
        }
        return "activate";
    };

    render() {
        const {onActivation} = this.props;
        const {name, imageUrl, value, id} = this.props.subscription;

        return (
            <div className="row mb-4">
                <img src={imageUrl} alt=""/>
                <span className="col-sm-4 mt-2 ml-3">{name}</span>
                <div className="col-sm-3 mt-3  mr-5">
                    <h6 style={this.handleStatus()}>{this.props.subscription.status}</h6>
                </div>
                <span className="col-sm-2 mt-3  ml-5">{value}</span>
                <button
                    onClick={() => onActivation(id)}
                    className={this.activationButtonStyle}>
                    {this.handleActivationButton()}
                </button>
            </div>
        );
    }
}

export default Subscription;
