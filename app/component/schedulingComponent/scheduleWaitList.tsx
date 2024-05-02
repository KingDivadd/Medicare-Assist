import { SchedulingTabProps } from '@/types'
import React, { useState } from 'react'
import { IoCaretDown } from 'react-icons/io5'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import DropDown from '../dropDown'

const ScheduleWaitList = ({tab, setTab}:SchedulingTabProps) => {
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        practice: false,
        location: false,
        provider: false,
        reason: false,
        status: false,
        day: false
    });
    const [dropElements, setDropElements] = useState({
        practice: 'SELECT',
        location: 'SELECT',
        provider: 'SELECT',
        reason: 'SELECT',
        status: 'SELECT',
        time: '',
        day: 'SELECT',
        first_name: '',
        last_name: '',
        fromDate: '',
        toDate: ''
    })

    const handleSelectDropdown = (dropdown: any, title:any)=>{
        setDropElements({...dropElements, [title]: dropdown}); setDropMenus({...dropMenus, [title]: false})
    }

    const handleDropMenu = (dropdown: any) => {
        const updatedDropMenus = Object.keys(dropMenus).reduce((acc, key) => {
            acc[key] = key === dropdown ? !dropMenus[key] : false;
            return acc;
        }, {} as { [key: string]: boolean });
        setDropMenus(updatedDropMenus);
        setDropElements({...dropElements, [dropdown]: 'SELECT'});
    };

    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setDropElements({...dropElements, [name]:value})
    }
    
    const handleSearch = async()=>{
        console.log('elements :: ',dropElements)
    }
    
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

                <div className="flex flex-col xl:w-[93%] px-10 py-6 mx-auto bg-blue-100 gap-3 ">
                    <div className="flex flex-col w-full items-center justify-center gap-2">
                        
                        <span className="flex flex-row gap-[80px] w-full items-center justify-center h-auto">

                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px] ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">Practice</p>
                                <span className=" h-[25px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <DropDown title={'practice'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px] ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">Location</p>
                                <span className=" h-[25px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <DropDown title={'location'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px] ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">Provider</p>
                                <span className=" h-[25px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <DropDown title={'provider'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                            
                        </span>
                        
                        <span className="flex flex-row gap-[80px] w-full items-center justify-center h-auto">

                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">First Name</p>
                                <span className=" h-[35px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <input type="text" name="first_name" id="" placeholder='' value={dropElements.first_name} onChange={handleChange} className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 rounded-[3px] focus:bg-slate-200 focus:outline-none' />
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">Last Name</p>
                                <span className=" h-[35px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <input type="text" name="last_name" id="" placeholder='' value={dropElements.last_name} onChange={handleChange} className='w-full flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-slate-200 focus:outline-none rounded-[3px]' />
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px] ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">Reason</p>
                                <span className=" h-[25px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <DropDown title={'provider'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                            
                        </span>
                        
                        <span className="flex flex-row gap-[80px] w-full items-center justify-center h-auto">
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">From Date</p>
                                <span className=" h-[25px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <label htmlFor="fromDate" className="w-full flex h-[35px] items-center justify-between cursor-pointer">
                                        <input type='date' name='fromDate' id="fromDate" value={dropElements.fromDate} onChange={handleChange} className='w-full h-full text-slate-500 text-sm border border-slate-400 px-2 bg-slate-100 focus:bg-gray-100 focus:outline-none rounded-[3px] cursor-pointer ' />
                                    </label>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">Time</p>
                                <span className=" h-[35px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <input type='time' name='time' id="time" placeholder='' value={dropElements.time} onChange={handleChange} className='w-full h-[35px] text-slate-500 font-semibold text-sm border border-slate-400 px-2 bg-slate-100 focus:bg-gray-100 focus:outline-none rounded-[3px] cursor-pointer ' />
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">Status</p>
                                <span className=" h-[25px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <DropDown title={'status'} dropArray={['Resolved', 'UnResolved', 'All']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                            
                        </span>
                        
                        <span className="flex flex-row gap-[80px] w-full items-center justify-center h-auto">
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">To Date</p>
                                <span className=" h-[25px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <label htmlFor="toDate" className="w-full flex h-[35px] items-center justify-between cursor-pointer">
                                        <input type='date' name='toDate' id="toDate" value={dropElements.toDate} onChange={handleChange} className='w-full h-full text-slate-500 text-sm border border-slate-400 px-2 bg-slate-100 focus:bg-gray-100 focus:outline-none rounded-[3px] cursor-pointer ' />
                                    </label>
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold">Day</p>
                                <span className=" h-[35px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
                                    <DropDown title={'day'} dropArray={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                </span>
                            </span>
                            
                            <span className="w-auto flex flex-row items-center justify-center gap-5 h-[40px]  ">
                                <p className="text-sky-600 text-[15px] w-[120px] text-end font-semibold"></p>
                                <span className=" h-[25px] w-[200px] flex flex-row items-center justify-end cursor-pointer">
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