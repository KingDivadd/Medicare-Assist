import React from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const ScheduleBar = () => {
    return (
        <div className="w-full h-[50px] flex flex-row items-center justify-between border-b border-slate-300 ">
            <div className="flex flex-row h-[80%] gap-5">
                <span className="px-3 bg-blue-100 hover:bg-sky-600 hover:text-slate-200 cursor-pointer flex items-center justify-center text-slate-500 border-2 border-sky-600">Today</span>
                <span className="px-3 bg-blue-100 hover:bg-sky-600 hover:text-slate-200 cursor-pointer flex items-center justify-center text-gray-500 border-2 border-sky-600"><GrFormPrevious size={25} className='text-slate-500 hover:text-slate-200' /> </span>
                <p className="text-black text-[16px] flex items-center font-bold">THURSDAY, APRIL 4, 2024</p>
                <span className="px-3 bg-blue-100 hover:bg-sky-600 hover:text-slate-200 cursor-pointer flex items-center justify-center text-gray-500 border-2 border-sky-600"><GrFormNext size={25} className='text-slate-500 hover:text-slate-200' /> </span>
                <span className="flex flex-row jusitify-center gap-2 items-center h-full">
                    <p className="text-black text-[16px] flex items-center">Provider: </p>
                    <p className="text-black text-[16px] flex items-center font-bold">DR BRIAN ALDRIH</p>
                </span>
            </div>
            <div className="flex flex-row h-[85%] px-2 gap-2">
                <span className="w-[90px] bg-amber-500 hover:bg-amber-600 cursor-pointer flex items-center justify-center text-red text-slate-200 rounded-[5px">Day</span>
                <span className="w-[90px] bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center justify-center text-red text-slate-200 rounded-[5px]">Week</span>
                <span className="w-[90px] bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center justify-center text-red text-slate-200 rounded-[5px]">Month</span>
                <span className="w-[90px] bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center justify-center text-red text-slate-200 rounded-[5px]">Multi View</span>
            </div>
        </div>
    )
}

export default ScheduleBar