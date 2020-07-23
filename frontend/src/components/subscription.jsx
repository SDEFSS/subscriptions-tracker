import React, {Component} from 'react';

class Subscription extends Component {

    render() {
        const { onDelete } = this.props;
        const { id, imageUrl, value } = this.props.subscription;
        return (
            <div className="container m-2">
                <div class="row">
                    <span className="m-2 col-sm-2">{id}</span>
                    <img src={imageUrl} alt=""/>
                    <span className="badge m-2 col-sm-1">{value}</span>
                    <button
                        onClick={() => onDelete(id)}
                        className="col-sm-1 btn btn-danger btn-sm m-2">
                        delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Subscription;
