import React, {Component} from 'react';

class Subscription extends Component {

    handleStatus = () => {
        console.log(this.props.subscription.status);
        if (this.props.subscription.status === "Active") return <h6 style={{color:"green"}}>
            {this.props.subscription.status}</h6>;
        return <h6 style={{color:"red"}}>{this.props.subscription.status}</h6>;
    };

    render() {
        const {onDelete} = this.props;
        const {id, imageUrl, value} = this.props.subscription;

        return (
            <div className="row mb-4">
                <img src={imageUrl} alt=""/>
                <span className="col-sm-4 mt-2 ml-3">{id}</span>
                <div className="col-sm-3 mt-3  mr-5">
                    {this.handleStatus()}
                </div>
                <span className="col-sm-2 mt-3  ml-5">{value}</span>
                <button
                    onClick={() => onDelete(id)}
                    className="btn btn-danger btn-sm mt-2 mb-2">
                    delete
                </button>
            </div>
        );
    }
}

export default Subscription;
