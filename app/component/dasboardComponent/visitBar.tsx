'use client'
import React from 'react'
import VisitCountBarChart from '../visitCountBarChart'
import DoughnutChart from '../visitByPayerDonitBar'

const VisitBar = () => {
    return (
        <div className="flex xl:flex-row flex-col justify-between w-full gap-3">
            <div className="flex flex-col w-1/2 h-[400px] bg-white rounded-[10px]">
                <span className="w-full bg-sky-600 h-[55px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                    <p className="text-xl text-white">Visit Counts</p>
                </span>
                <div className="flex items-center justify-center w-full h-full px-3 py-2">
                    <VisitCountBarChart />
                </div>
            </div>
            <div className="flex flex-col w-1/2 h-[400px] bg-white rounded-[10px]">
                <span className="w-full bg-sky-600 h-[55px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                    <p className="text-xl text-white">Visit By Payer Types</p>
                </span>
                <div className="flex items-center justify-center w-full h-full px-3 py-2">
                    <DoughnutChart />
                </div>
            </div>
        </div>
    )
}

export default VisitBar