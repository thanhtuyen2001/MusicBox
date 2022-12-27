import React from "react";

const noti_content = [
    {mess: '😃 Motanita just released new song 2 days ago!!!! Listen now!!!', time: 'Jul 23, 2022 at 9:15 AM'},
    {mess: '🌳🌳 Today is a good day. Lets turn on the radio!!!', time: 'Jul 24, 2022 at 9:15 AM'},
]

const Notification = () => {
  return (
    <div className="bg-[#344b6b] rounded-md p-2">
      { noti_content.map((item, i)=> (
        <div className="border-b border-[#8792a2] mb-2" key={i}>
            {/* message */}
            <div>{item.mess}</div>
            {/* time */}
            <div className="text-[#8792a2]">{item.time}</div>
        </div>
      )) }
     
    </div>
  )
};

export default Notification;
