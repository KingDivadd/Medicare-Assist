import React from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";

const ScheduleBar = () => {
    return (
        <div className="w-full py-1 flex flex-row items-center justify-between border-b">
            <div className="flex flex-row h-[35px] gap-5 ">
                <span className="px-3 bg-blue-100 hover:bg-sky-600 hover:text-slate-100 cursor-pointer flex items-center justify-center text-slate-600 border-2 border-sky-600 rounded-[3px]">Today</span>
                <span className="px-3 bg-blue-100 hover:bg-sky-600 hover:text-slate-100 cursor-pointer flex items-center justify-center text-gray-500 border-2 border-sky-600 rounded-[3px]"><GrFormPrevious size={25} /> </span>
                <p className="text-slate-600 text-[15px] flex items-center font-bold">THURSDAY, APRIL 4, 2024</p>
                <span className="px-3 bg-blue-100 hover:bg-sky-600 hover:text-slate-100 cursor-pointer flex items-center justify-center text-gray-500 border-2 border-sky-600 rounded-[3px]"><GrFormNext size={25} /> </span>
                <span className="flex flex-row jusitify-center gap-2 items-center h-full">
                    <p className="text-black text-[15px] flex items-center">Provider: </p>
                    <p className="text-slate-600 text-[15px] flex items-center font-bold">DR BRIAN ALDRIH</p>
                </span>
            </div>
            <div className="flex flex-row py-1 px-2 gap-2">
                <span className="w-[90px] h-[35px] bg-amber-500 hover:bg-amber-600 cursor-pointer flex items-center justify-center text-red text-slate-100 rounded-[3px]">Day</span>
                <span className="w-[90px] h-[35px] bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center justify-center text-red text-slate-100 rounded-[3px]">Week</span>
                <span className="w-[90px] h-[35px] bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center justify-center text-red text-slate-100 rounded-[3px]">Month</span>
                <span className="w-[90px] h-[35px] bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center justify-center text-red text-slate-100 rounded-[3px]">Multi View</span>
            </div>
        </div>
    )
}

export default ScheduleBar