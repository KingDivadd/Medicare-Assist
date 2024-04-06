import React from 'react'

const CopayCollectedBar = () => {
    return (
        <div className='flex flex-row h-[100px] w-full bg-white rounded-[10px]'>
            <span className="w-[300px] h-full bg-sky-600 rounded-l-[10px] flex items-center justify-center">
                <p className='text-xl text-white'>Copay Collected</p>
            </span>
            <div className="flex items-center w-full h-full px-3 py-2 flex flex-row justify-between px-[200px]">
                <span className="flex items-center justify-center flex-col">
                    <p className="text-3xl text-sky-500">$0.00 </p>
                    <p className="text-lg text-sky-400">Last Week</p>
                </span>
                
                <span className="flex items-center justify-center flex-col">
                    <p className="text-3xl text-sky-500">$0.00 </p>
                    <p className="text-lg text-sky-400">Last Week</p>
                </span>
                
                <span className="flex items-center justify-center flex-col">
                    <p className="text-3xl text-sky-500">$0.00 </p>
                    <p className="text-lg text-sky-400">Last Week</p>
                </span>
                
            </div>
        </div>
    )
}

export default CopayCollectedBar