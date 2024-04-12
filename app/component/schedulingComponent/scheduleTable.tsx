import React from 'react'
import { IoCaretDownCircle } from "react-icons/io5";

const ScheduleTable = () => {
    return (
        <div className="w-full h-full py-2 overflow-hidden flex-1 overflow-hidden">
            <div className="w-[99%] mx-auto border-t my-auto overflow-hidden flex flex-col items-center justify-center table-cage">
                <div className="w-full h-[40px] bg-sky-600 flex flex-row items-center justify-between px-3 border-2 border-sky-600 rounded-t-[5px]">
                    <p className="text-slate-100 text-[15px] font-semibold flex items-center">Provide Daily Schedule</p>
                    <span className="flex  items-center justify-end gap-2">
                        <input type="checkbox" name="" id="" />
                        <p className="text-slate-100 text-sm flex items-center">Show Cancelled</p>
                        <button className='text-slate-600 text-sm h-[30px] rounded-[3px] bg-slate-100 hover:bg-slate-200 cursor-pointer w-[90px] ml-1'>Print</button>
                    </span>
                </div>

                <div className="flex-1 w-full overflow-y-auto h-[100%]">
                    <table className="border-collapse border-2 w-full">
                        <thead className='h-[35px] '>
                            <tr>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ...">Time</th>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ...">Location</th>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ...">Patient</th>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ..."></th>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ...">Reason</th>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ...">Plan/Copay</th>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ...">Phone</th>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ...">Reminder</th>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ...">Comments</th>
                                <th className="border-2 border-slate-300 bg-slate-200 text-sm font-semibold text-slate-500 ...">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1,2,3,4,5,6,7,8,9,10,11,12,1,1,1,1,1,1].map((data, ind)=>{
                                return (
                                        <tr key={ind} className='h-[50px]'>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[20px]"></p> </td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                        </tr>
                                )
                            })}
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ScheduleTable