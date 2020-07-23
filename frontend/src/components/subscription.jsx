import React, {Component} from 'react';

class Subscription extends Component {

    constructor(props) {
        super(props);
        if (this.props.subscription.status === "active") this.buttonStyle = "btn btn-sm mt-2 mb-2 btn-success";
        this.buttonStyle = "btn btn-sm mt-2 mb-2 btn-danger";
    }

    handleStatus = () => {
        if (this.props.subscription.status === "active") {
            this.buttonStyle = "btn btn-sm mt-2 mb-2 btn-danger";
            return (<h6 style={{color:"green"}}>
                {this.props.subscription.status}</h6>);
        }
        this.buttonStyle = "btn btn-sm mt-2 mb-2 btn-danger";
        this.buttonStyle = "btn btn-sm mt-2 mb-2 btn-success";
        return <h6 style={{color:"red"}}>{this.props.subscription.status}</h6>;
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
                    {this.handleStatus()}
                </div>
                <span className="col-sm-2 mt-3  ml-5">{value}</span>
                <button
                    onClick={() => onActivation(id)}
                    className={this.buttonStyle}>
                    {this.handleActivationButton()}
                </button>
            </div>
        );
    }
}

export default Subscription;
