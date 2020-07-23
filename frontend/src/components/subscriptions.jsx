import React, {Component} from "react";
import Subscription from './subscription'

class Subscriptions extends Component {

    render() {
        const {subscriptions, onActivation} = this.props;
        return (
            <React.Fragment>
                <div className=" ml-4 mb-5 mt-4">
                    <h2><b> Manage subscriptions </b></h2>
                </div>
                <div className="container mt-5">
                    <div className="row mb-5 mt-5">
                        <h5 className="col-sm-4">subscription name</h5>
                        <h5 className="col-sm-4">subscription status</h5>
                        <h5 className="col-sm-4">subscription cost</h5>
                    </div>
                    {subscriptions.map(subscription => (
                        <Subscription
                            key={subscription.id}
                            onActivation={onActivation}
                            subscription={subscription}
                        />
                    ))}
                </div>
            </React.Fragment>
        );
    }
}

export default Subscriptions;
