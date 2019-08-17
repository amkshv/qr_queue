import React from "react";


import QueueRender from "./QueueRender"
import "./Queue.css"

const users = [   // Тестовый массив обьектов.Подвергнется удалению после добавления json на проэкт
    {
        id: 1,
        order: 1,
        time: "12:30"
    },
    {
        id: 2,
        order: 2,
        time: "13:00"
    },
    {
        id: 3,
        order: 3,
        time: "14:00"

    }
];

class Queue extends React.Component {

    render() {
        return (
            <React.Fragment>
                <div className="title__queue">
                    <h2>Ваша очередь отмечена зеленным цветом цветом</h2>
                </div>

                {
                    users.map((item, index) => <QueueRender
                        key={index}
                        users={item}

                    />)
                }
            </React.Fragment>
        )

    }
}

export default Queue;