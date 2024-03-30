import React from 'react';
import style from "./Messages.module.css"

const Messages = ({messages, name}) => {
    return (
        <div className={style.messages}>
            {messages.map(({user, message}, i) => {
                const itsMe = user.name.trim().toLowerCase() === name.trim().toLowerCase();
                const className = itsMe ? style.me : style.user
                return (
                    <div key={i} className={`${style.message} ${className}`}>
                         <span className={style.user}>
                              {user.name}
                         </span>
                        <div className={style.text}>
                            {message}
                        </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Messages;