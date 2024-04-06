import React from 'react'
import { IoCaretDownCircle } from "react-icons/io5";

const ScheduleTable = () => {
    return (
        <div className="w-full h-full py-2 overflow-hidden flex-1 overflow-hidden">
            <div className="w-[99%] mx-auto border-t rounded-[10px] my-auto overflow-hidden flex flex-col items-center justify-center table-cage">
                <div className="w-full bg-blue-100 flex flex-row items-center justify-between px-3 border-2 border-sky-600 rounded-t-[10px] min-h-[50px]">
                    <p className="text-slate-500 h-[45px] text-[18px] font-semibold flex items-center">Provide Daily Schedule</p>
                    <span className="flex  h-[45px] items-center justify-end gap-2">
                        <input type="checkbox" name="" id="" />
                        <p className="text-slate-600 text-[16px]  h-[45px] flex items-center">Show Cancelled</p>
                        <button className='text-slate-200 text-[15px] h-[40] rounded-[5px] bg-sky-600 hover:bg-sky-700 cursor-pointer w-[90px] h-[70%] ml-1'>Print</button>
                    </span>
                </div>

                <div className="flex-1 w-full overflow-y-auto h-[100%]">
                    <table className="border-collapse border-2 w-full">
                        <thead className='h-[45px] '>
                            <tr>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Time</th>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Location</th>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Patient</th>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ..."></th>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Reason</th>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Plan/Copay</th>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Phone</th>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Reminder</th>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Comments</th>
                                <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1,2,3,4,5,6,7,8,9,10,11,12,1,1,1,1,1,1].map((data, ind)=>{
                                return (
                                        <tr key={ind} className='h-[50px]'>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-2 border-slate-300 pl-1 ..."></td>
                                            <td className="border-1 border-slate-300 pl-1 border-l-0 border-r-0 flex items-center justify-center h-[100%] border h-[50px] ..."><IoCaretDownCircle size={23} className='text-sky-600' /></td>
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