import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notification: [],
        };
    }

    componentDidMount() {
        const { notification } = this.state;
        timer = setInterval(() => {
            if (notification.length < reservedNotifications.length) {
                const index = notification.length;
                notification.push(reservedNotifications[index]);
                this.setState({
                    notification: notification,
                });
            } else {
                clearInterval(timer);
            }
        }, 10000);
    }

    render() {
        return (
            <div>
                {this.state.notification.map((notification) => {
                    return <Notification key={notification.id} message={notification.message} />
                })}
            </div>
        );
    }
}

export default NotificationList;