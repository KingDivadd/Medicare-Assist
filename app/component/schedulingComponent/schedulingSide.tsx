import React from 'react'
import { FiRefreshCcw } from "react-icons/fi";
import MyDatePicker from './datepicker';
import { IoCaretUp } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";


const SchedulingSideBar = () => {
    return (
        <div className='w-[400px] flex items-start justify-center pl-3 bg-sky-600'>
            <div className="flex flex-col  rounded-b-[10px] w-full h-auto gap-2 pt-[15px]">
                <div className="h-[300px] w-full bg-blue-200 pt-[1px] flex itmes-center justify-center">
                    <MyDatePicker />
                </div>

                <div className=" w-full bg-red-200 pt-[1px] flex flex-col bg-white">
                    <span className="w-full flex items-center justify-center text-black text-[20px] bg-sky-100 h-[45px]">Provider</span>

                    <span className="w-full flex flex-row items-center justify-center gap-5 h-[48px]  ">
                        <p className="text-sky-600 text-[17px]">Practice</p>
                        <span className=" h-[30px] w-[40%] flex flex-row items-center justify-end cursor-pointer">
                            <span className="w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0">HIM</span>
                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                <IoCaretDown size={18} className='text-slate-200' />
                            </span>
                        </span>
                    </span>
                    <span className="w-full flex flex-row items-center justify-center gap-5 h-[48px]  ">
                        <p className="text-sky-600 text-[17px]">Provider</p>
                        <span className=" h-[30px] w-[40%] flex flex-row items-center justify-end cursor-pointer">
                            <span className="w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0">BALDRICH</span>
                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                <IoCaretDown size={18} className='text-slate-200' />
                            </span>
                        </span>
                    </span>
                    <span className="w-full flex flex-row items-center justify-center gap-5 h-[48px]  ">
                        <p className="text-sky-600 text-[17px]">Location</p>
                        <span className=" h-[30px] w-[40%] flex flex-row items-center justify-end cursor-pointer">
                            <span className="w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0">HIM</span>
                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                <IoCaretDown size={18} className='text-slate-200' />
                            </span>
                        </span>
                    </span>
                </div>

                <div className=" w-full bg-red-200 pt-[1px] flex flex-col bg-white">
                    <span className="w-full flex items-center justify-center text-black text-[20px] bg-sky-100 h-[45px]">Status Color</span>

                    <span className="w-full flex flex-row items-center justify-center gap-5 h-[48px] px-3">
                        <span className="w-1/2 flex flex-row items-center justify-start gap-5 ">
                            <span className="w-[30px] h-[30px] bg-slate-400"></span>
                            <p className="test-[15px] text-slate-500">Blocked</p>
                        </span>
                        <span className="w-1/2 flex flex-row items-center justify-start gap-5 ">
                            <span className="w-[30px] h-[30px] bg-green-400"></span>
                            <p className="test-[15px] text-slate-500">Scheduled</p>
                        </span>
                    </span>
                    <span className="w-full flex flex-row items-center justify-center gap-5 h-[48px] px-3">
                        <span className="w-1/2 flex flex-row items-center justify-start gap-5 ">
                            <span className="w-[30px] h-[30px] bg-red-400"></span>
                            <p className="test-[15px] text-slate-500">Overbooked</p>
                        </span>
                        <span className="w-1/2 flex flex-row items-center justify-start gap-5 ">
                            <span className="w-[30px] h-[30px] bg-sky-100 border-2 border-slate-300"></span>
                            <p className="test-[15px] text-slate-500">Open</p>
                        </span>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default SchedulingSideBar
