import React from 'react'

const MessageBar = () => {
    return (
        <div className="flex flex-row items-center justify-between px-[500px] h-[95px] w-full bg-white py-1 px-2 rounded-[10px]">
            <span className="flex flex-col items-center justify-center">
                <p className="text-3xl text-sky-500">0 </p>
                <p className="text-lg text-sky-400 hover:underline">Unread Fax</p>
            </span>
            
            <span className="flex flex-col items-center justify-center">
                <p className="text-3xl text-sky-500">0 </p>
                <p className="text-lg text-sky-400 hover:underline">Inbox</p>
            </span>
        </div>
    )
}

export default MessageBar