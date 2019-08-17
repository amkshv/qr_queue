import React from "react";


import "./QueueRender.css";

class QueueRender extends React.Component {
    renderQueue = () => {
        // console.log(this.props)
        if (this.props.users.id === 1) {
            console.log(this.props.users);
            return <div className="queue"> <div>{this.props.users.id }</div> </div>
        } else{
            return <div className="queue2"> <div>{this.props.users.id}</div> </div>
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