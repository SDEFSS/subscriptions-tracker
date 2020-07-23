import React, {Component} from "react";
import Subscription from './subscription'

class Subscriptions extends Component {

    render() {
        const { subscriptions, onDelete } = this.props;
        return (
            <div>
                {subscriptions.map(subscription =>(
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
