import React from "react";


import "./QueueRender.css";

class QueueRender extends React.Component {
    renderQueue = () => {
        if (this.props.users.time !== "14:00") {
            return <div className="queue"> <div>{this.props.users.id + ") " + this.props.users.time}</div> </div>
        } else {
            return <div className="queue2"> <div>{this.props.users.id + ") " + this.props.users.time}</div> </div>
        }
    }
    render() {
        return(
            <div className="container">
            <div className="queues">
                {this.renderQueue()}
            </div>

        </div>
        )
    }
}

export default QueueRender;