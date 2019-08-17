import React from "react";


import QueueRender from "./QueueRender"
import "./Queue.css"

class Queue extends React.Component {

    state = {
        data: []
    }

    componentWillMount() {
        fetch('http://localhost:3000/users/')
            .then(body => body.json())
            .then(body =>  {
                // console.log(body);
                
                var arr = body.map(item => item)
                this.setState({...this.state, data: arr})
                console.log(arr);
            })
            // .catch(err => console.log(err))
    }

    render() {
        return (
            <React.Fragment>
                <div className="title__queue">
                    <h2>Ваша очередь отмечена зеленным цветом</h2>
                </div>

                {
                    this.state.data.map((item, index) => <QueueRender
                        key={index}
                        users={item}
                    />)
                }
            </React.Fragment>
        )

    }
}

export default Queue;