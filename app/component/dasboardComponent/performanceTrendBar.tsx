import React from 'react'
import VisitCountBarChart from '../visitCountBarChart'

const PerformanceTrendBar = () => {
    return (
        <div className='flex flex-col h-[450px] w-full bg-white rounded-[10px]'>
            <span className="w-full bg-sky-600 h-[55px] rounded-t-[10px] flex items-center justify-start pl-[20px]">
                <p className="text-[20px] text-white">Key Performance Trends</p>
            </span>
            <div className="flex items-center justify-center w-full h-full px-3 py-2">
                <VisitCountBarChart />
            </div>
        </div>
    )
}

export default PerformanceTrendBar