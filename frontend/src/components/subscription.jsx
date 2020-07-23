import React, {Component} from 'react';

class Subscription extends Component {

    render() {
        return (
            <div className="container m-2">
                <div class="row">
                    <span className="m-2 col-sm-2">{this.props.subscription.id}</span>
                    <img src={this.props.subscription.imageUrl} alt=""/>
                    <span className="badge m-2 col-sm-1">{this.props.subscription.value}</span>
                    <button
                        onClick={() => this.props.onDelete(this.props.subscription.id)}
                        className="col-sm-1 btn btn-danger btn-sm m-2">
                        delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Subscription;
