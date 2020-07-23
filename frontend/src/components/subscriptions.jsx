import React, {Component} from "react";
import Subscription from './subscription'

class Subscriptions extends Component {

    render() {
        const {subscriptions, onDelete} = this.props;
        return (
            <div className="container">
                <div className="row mb-5 mt-5">
                    <h5 className="col-sm-4">subscription name</h5>
                    <h5 className="col-sm-4">subscription status</h5>
                    <h5 className="col-sm-4">subscription cost</h5>
                </div>
                    {subscriptions.map(subscription => (
                        <Subscription
                            key={subscription.id}
                            onDelete={onDelete}
                            subscription={subscription}
                        />
                    ))}
                </div>
        );
    }
}

export default Subscriptions;
