import { SchedulingTabProps } from '@/types'
import React from 'react'
import { IoCaretDown, IoCaretDownCircle } from 'react-icons/io5'
import RouteNav from '../routeNav'
import TabBar from './tabBar'

const SchedulingDaySheet = ({tab, setTab}:SchedulingTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-gray-200 overflow-hidden">
            <RouteNav />
            <TabBar tab={tab} setTab={setTab} />
            <div className="w-full flex-1 flex flex-row gap-2 bg-sky-600 py-3">
                <div className="flex flex-col w-full bg-white gap-3">
                    <span className="w-full flex flex-row items-center justify-between gap-3 h-[55px] px-7">
                        <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Search Schedule</p>
                        <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[73%]">
                        </span>
                    </span>

                    <div className="w-full flex flex-col items-center justify-start overflow-y-auto cont-3">
                        
                        <div className="flex flex-col xl:w-[95%] px-10 py-6 mx-auto bg-blue-100 gap-3 shadow-xl">
                            <div className="flex flex-col w-full items-center justify-center gap-2">
                                
                                <span className="flex flex-row gap-[140px] w-full items-center justify-center h-auto">

                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px] ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Practice</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Provider</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Location</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Reason</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
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
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Provider</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Location</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Reason</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
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
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Provider</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='BALDRICH' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Location</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                        <p className="text-sky-600 text-[15px] font-semibold">Reason</p>
                                        <span className=" h-[24px] w-[130px] flex flex-row items-center justify-end cursor-pointer">
                                            <input type="text" name="" id="" placeholder='HIM' className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border-2 border-slate-400 border-r-0 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none' />
                                            <span className="h-full w-[40px] bg-sky-700 flex items-center justify-center">
                                                <IoCaretDown size={18} className='text-slate-200' />
                                            </span>
                                        </span>
                                    </span>
                                    
                                </span>
                                
                            </div>

                            <button type="button" className='w-[100px] h-[40px] bg-green-600 hover:bg-green-700 text-white text-[15px] font-semibold mx-auto rounded-[3px]'>Search</button>

                        </div>

                        <span className="xl:w-[95%] mx-auto flex flex-row items-center justify-between bg-sky-600 h-[40px] mt-2 px-2 rounded-t-[6px] border-2 border-sky-600">
                            <p className="text-slate-100 text-[15px] font-semibold">Search Result</p>
                            <span className="w-auto flex flex-row items-center h-full jusitify-between">
                                <button type="button" className='w-[100px] h-[30px] rounded-[3px] bg-slate-100 hover:bg-slate-200 text-slate-600'>Print</button>
                            </span>
                        </span>

                        <div className="w-[95%] mx-auto flex items-start justify-center sheet-table-cont overflow-hidden">
                            <div className="w-full h-full overflow-y-auto">
                                <table className="border-collapse border-2 w-full">
                                    <thead className='h-[45px] '>
                                        <tr>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ..."><input type="checkbox" name="" id="" /></th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Appointment Date</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Account</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Patient</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">DOB</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Plan</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Duration</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Reason</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Status</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Provider</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Resources</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Location</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Entered By</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Copay</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Amount Collected</th>
                                            <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 text-sm font-bold h-[25px] ...">Pat Total Bal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[1,2,3,4,5,6,7,8,9,10,11,12,1,1,1,1,1,1].map((data, ind)=>{
                                            return (
                                                    <tr key={ind} className='h-[50px]'>
                                                        <td className="border-b border-slate-200 pl-1  w-[20px] ..."><input type="checkbox" name="" id="" className='w-[30px]' /></td>
                                                        <td className="border-b border-slate-200 pl-1 text-blue-500 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p> </td>
                                                        <td className="border-b border-slate-200 pl-1 text-blue-500 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 text-green-500 ..."></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[50px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                        <td className="border-b border-slate-200 pl-1 ..."><p className="w-[80px]">{}</p></td>
                                                    </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}

export default SchedulingDaySheet