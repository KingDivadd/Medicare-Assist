import { SchedulingTabProps } from '@/types'
import React from 'react'
import { IoCaretDown } from 'react-icons/io5'
import RouteNav from '../routeNav'
import TabBar from './tabBar'

const ScheduleWaitList = ({tab, setTab}:SchedulingTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
        <RouteNav userRole='admin-1' />
        <TabBar tab={tab} setTab={setTab} />
        <div className="w-full flex-1 flex flex-row gap-2 bg-sky-600 py-3">
            <div className="flex flex-col w-full bg-white gap-3">
                <span className="w-full flex flex-row items-center justify-between gap-3 h-[55px] px-10 ">
                    <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Wait List</p>
                    <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[73%]">
                    </span>
                </span>

                <div className="flex flex-col xl:w-[93%] px-10 py-6 mx-auto bg-blue-200 gap-3 ">
                    <div className="flex flex-col w-full items-center justify-center gap-2">
                        
                        <span className="flex flex-row gap-[140px] w-full items-center justify-center h-auto">

                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px] ">
                                <p className="text-sky-600 text-[15px] font-semibold">Practice</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Provider</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Location</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Reason</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <span className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 ' >-SELECT-</span>
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                        </span>
                        
                        <span className="flex flex-row gap-[140px] w-full items-center justify-center h-auto">

                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Practice</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Provider</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Location</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Reason</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                        </span>
                        
                        <span className="flex flex-row gap-[140px] w-full items-center justify-center h-auto">

                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Practice</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Provider</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Location</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] font-semibold">Reason</p>
                                <span className=" h-[25px] w-[120px] flex flex-row items-center justify-end cursor-pointer bg-red-200">
                                    <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                    <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                        <IoCaretDown size={18} className='text-slate-200' />
                                    </span>
                                </span>
                            </span>
                            
                        </span>
                        
                    </div>

                    <button type="button" className='w-[100px] h-[40px] bg-green-600 hover:bg-green-700 text-white text-[17px] mx-auto rounded-[3px]'>Search</button>

                </div>

                {/* Waiting on the design */}
                {/* <span className="xl:w-[93%] mx-auto flex flex-row items-center justify-between bg-blue-300 h-[50px] mt-2 px-2 rounded-t-[10px] border-2 border-blue-300">
                    <p className="text-black text-[18px] font-semibold">Search Result</p>
                    <span className="w-auto flex flex-row items-center h-full jusitify-between">
                        <button type="button" className='w-[100px] h-[35px] rounded-[5px] bg-sky-600 hover:bg-sky-700 text-slate-100'>Print</button>
                    </span>
                </span> */}

                {/* <div className="w-[93%] mx-auto flex items-start justify-center sheet-table-cont overflow-hidden">
                    <div className="w-full h-full overflow-y-auto">
                        <table className="border-collapse border-2 w-full">
                            <thead className='h-[45px] '>
                                <tr>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ..."><input type="checkbox" name="" id="" /></th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Appointment Date</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Account</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Patient</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">DOB</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Plan</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Duration</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Reason</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Status</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Provider</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Resources</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Location</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Entered By</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Copay</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Amount Collected</th>
                                    <th className="border-2 border-slate-300 bg-slate-200 font-semibold ...">Pat Total Bal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[1,2,3,4,5,6,7,8,9,10,11,12,1,1,1,1,1,1].map((data, ind)=>{
                                    return (
                                            <tr key={ind} className='h-[50px]'>
                                                <td className="border-2 border-slate-300 pl-1  w-[20px] ..."><input type="checkbox" name="" id="" className='w-[70px]' /></td>
                                                <td className="border-2 border-slate-300 pl-1 text-blue-500 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p> </td>
                                                <td className="border-2 border-slate-300 pl-1 text-blue-500 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 text-green-500 ..."></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[60px]">{}</p></td>
                                                <td className="border-2 border-slate-300 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                            </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div> */}

            </div>
        </div>
    </main>
    )
}

export default ScheduleWaitList