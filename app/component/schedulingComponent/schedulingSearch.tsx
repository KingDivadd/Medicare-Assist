import React from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { SchedulingTabProps } from '@/types'
import { IoCaretDown } from 'react-icons/io5'

const ScheduleingSearch = ({tab, setTab}:SchedulingTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-gray-200 overflow-hidden">
            <RouteNav />
            <TabBar tab={tab} setTab={setTab} />
            <div className="w-full flex-1 flex flex-row gap-2 bg-sky-600 py-3">
                <div className="flex flex-col w-full bg-white">
                    <span className="flex flex-row gap-2 bg-white px-10 h-[60px] items-center justify-between">
                        <p className="text-sky-600 text-[18px] font-semibold ">Search Schedule</p>
                        <span className="flex-1 border-b-2 border-sky-600"></span>
                    </span>

                    <div className="flex flex-col w-[93%] px-10 py-6 mx-auto bg-blue-100 gap-2">
                        <span className="flex flex-row gap-2  px-2 h-[50px] items-center justify-between w-full">
                            <p className="text-slate-600 text-[16px]">Status Colors</p>
                            <span className="flex-1 border-b border-sky-400"></span>
                        </span>

                        <span className="flex flex-row gap-4 items-center justify-center w-full h-[50px]">
                            <span className="w-[150px] flex flex-row items-center justify-start gap-5 ">
                                <span className="w-[30px] h-[30px] bg-slate-400"></span>
                                <p className="test-[15px] text-slate-500">Blocked</p>
                            </span>
                            <span className="w-[150px] flex flex-row items-center justify-start gap-5 ">
                                <span className="w-[30px] h-[30px] bg-green-400"></span>
                                <p className="test-[15px] text-slate-500">Scheduled</p>
                            </span>
                            <span className="w-[150px] flex flex-row items-center justify-start gap-5 ">
                                <span className="w-[30px] h-[30px] bg-red-400"></span>
                                <p className="test-[15px] text-slate-500">Overbooked</p>
                            </span>
                            <span className="w-[150px] flex flex-row items-center justify-start gap-5 ">
                                <span className="w-[30px] h-[30px] bg-white border-2 border-slate-300"></span>
                                <p className="test-[15px] text-slate-500">Open</p>
                            </span>
                        </span>

                        <span className="flex flex-row gap-2  px-2 h-[50px] items-center justify-between w-full">
                            <p className="text-slate-600 text-[16px]">Search Schedule</p>
                            <span className="flex-1 border-b border-sky-400"></span>
                        </span>

                        <div className="flex flex-col w-full items-center justify-center">
                            
                            <span className="flex flex-row gap-[80px] w-full items-center justify-center h-[50px]">

                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Practice</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Provider</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Location</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                            </span>

                            <span className="flex flex-row gap-[80px] w-full items-center justify-center h-[50px]">

                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Practice</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Provider</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Location</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                            </span>

                            <span className="flex flex-row gap-[80px] w-full items-center justify-center h-[50px]">

                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Practice</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Provider</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Location</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                            </span>

                            <span className="flex flex-row gap-[80px] w-full items-center justify-center h-[50px]">

                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Practice</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Provider</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[17px]">Location</p>
                                    <span className=" h-[30px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-[15px] border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                        <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                            <IoCaretDown size={18} className='text-slate-200' />
                                        </span>
                                    </span>
                                </span>
                                
                            </span>

                            
                            {/* checkboxes */}
                            <span className="w-auto flex flex-row items-center justify-center gap-4 h-[48px]">
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <p className="text-sky-600 text-[17px]">Monday</p>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <p className="text-sky-600 text-[17px]">Tuesday</p>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <p className="text-sky-600 text-[17px]">Wednesday</p>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <p className="text-sky-600 text-[17px]">Thursday</p>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <p className="text-sky-600 text-[17px]">Friday</p>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <p className="text-sky-600 text-[17px]">Saturday</p>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input type="checkbox" name="" id="" />
                                    <p className="text-sky-600 text-[17px]">Sunday</p>
                                </span>
                            </span>

                        </div>

                        <button type="button" className='w-[120px] h-[50px] bg-green-600 hover:bg-green-700 text-white text-[17px] mx-auto rounded-[5px]'>Search</button>

                    </div>

                </div>
            </div>
        </main>
    )
}

export default ScheduleingSearch