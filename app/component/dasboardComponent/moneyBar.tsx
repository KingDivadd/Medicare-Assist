import React from 'react'

const MoneyBar = () => {
    return (
        <div className="flex xl:flex-row flex-col justify-between w-full gap-3">
            <div className="flex flex-col w-1/2 h-[400px] bg-white rounded-[10px]">
                <span className="w-full bg-sky-600 h-[55px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                    <p className="text-[20px] text-white">Charges</p>
                </span>
                <div className="flex items-center justify-center w-full h-full px-3 py-2">
                    Use chartjs to add bar chart
                </div>
            </div>
            <div className="flex flex-col w-1/2 h-[400px] bg-white rounded-[10px]">
                <span className="w-full bg-sky-600 h-[55px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                    <p className="text-[20px] text-white">Payments</p>
                </span>
                <div className="flex items-center justify-center w-full h-full px-3 py-2">
                    Use chartjs to add doughnut chart
                </div>
            </div>
        </div>
    )
}

export default MoneyBar