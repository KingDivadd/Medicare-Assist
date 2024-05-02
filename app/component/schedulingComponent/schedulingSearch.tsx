import React, { useState } from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { SchedulingTabProps } from '@/types'
import { IoCaretDown } from 'react-icons/io5'
import DropDown from '../dropDown'

const ScheduleingSearch = ({tab, setTab}:SchedulingTabProps) => {
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        practice: false,
        location: false,
        provider: false,
        reason: false,
        status: false,
    });
    const [dropElements, setDropElements] = useState({
        practice: 'SELECT',
        location: 'SELECT',
        provider: 'SELECT',
        reason: 'SELECT',
        status: 'SELECT',
        fromDate: '00-00-0000',
        fromTime: '00-00-0000',
        toDate: '00:00',
        toTime: '00:00',
        mondayCheck:false,
        tuesdayCheck:false,
        wednesdayCheck:false,
        thursdayCheck:false,
        fridayCheck:false,
        saturdayCheck:false,
        sundayCheck:false,
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
                <div className="flex flex-col w-full bg-slate-100 gap-5">
                    <span className="w-full flex flex-row items-center justify-between gap-3 h-[55px] px-10 ">
                        <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Search Schedule</p>
                        <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[73%]">
                        </span>
                    </span>

                    <div className="flex flex-col w-[93%] px-10 py-3 mx-auto bg-blue-100 ">
                        <span className="flex flex-row gap-2  px-2 h-[45px] items-center justify-between w-full">
                            <p className="text-slate-600 text-[15px] font-semibold">Status Colors</p>
                            <span className="flex-1 border-b border-sky-600 h-[9px]"></span>
                        </span>

                        <span className="flex flex-row gap-4 items-center justify-center w-full mt-2">
                            <span className="w-[150px] flex flex-row items-center justify-start gap-3 ">
                                <span className="w-[27px] h-[27px] bg-slate-400"></span>
                                <p className="text-[15px] text-slate-500">Blocked</p>
                            </span>
                            <span className="w-[150px] flex flex-row items-center justify-start gap-3 ">
                                <span className="w-[27px] h-[27px] bg-green-400"></span>
                                <p className="text-[15px] text-slate-500">Scheduled</p>
                            </span>
                            <span className="w-[150px] flex flex-row items-center justify-start gap-3 ">
                                <span className="w-[27px] h-[27px] bg-red-400"></span>
                                <p className="text-[15px] text-slate-500">Overbooked</p>
                            </span>
                            <span className="w-[150px] flex flex-row items-center justify-start gap-3 ">
                                <span className="w-[27px] h-[27px] bg-white border-2 border-slate-100"></span>
                                <p className="text-[15px] text-slate-500">Open</p>
                            </span>
                        </span>

                        <span className="flex flex-row gap-2  px-2 h-[45px] items-center justify-between w-full">
                            <p className="text-slate-600 text-[15px] font-semibold">Search Schedule</p>
                            <span className="flex-1 border-b border-sky-600 h-[9px]"></span>
                        </span>

                        <div className="flex flex-col w-full items-center justify-center">
                            
                            <span className="flex flex-row gap-[80px] w-full items-center justify-center">

                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px] ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end">Practice</p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <DropDown title={'practice'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end">Location</p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <DropDown title={'location'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end">Provider</p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <DropDown title={'provider'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                            </span>

                            <span className="flex flex-row gap-[80px] w-full items-center justify-center">

                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end">From Date</p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <label htmlFor="fromDate" className="w-full flex h-[35px] items-center justify-between cursor-pointer">
                                            <input type='date' name='fromDate' id="fromDate" value={dropElements.fromDate} onChange={handleChange} className='w-full h-full text-slate-500 text-sm border border-slate-400 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px] cursor-pointer ' />
                                        </label>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end">From Time</p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type='time' name='fromTime' id="fromTime" placeholder='' value={dropElements.fromTime} onChange={handleChange} className='w-full h-[35px] text-slate-500 font-semibold text-sm border border-slate-400 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px] cursor-pointer ' />
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end"></p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                    
                                    </span>
                                </span>
                                
                            </span>

                            <span className="flex flex-row gap-[80px] w-full items-center justify-center">

                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end">To Date</p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <label htmlFor="toDate" className="w-full flex h-[35px] items-center justify-between cursor-pointer">
                                            <input type='date' name='toDate' id="toDate" placeholder='' value={dropElements.toDate} onChange={handleChange} className='w-full h-full text-slate-500 text-sm border border-slate-400 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px] cursor-pointer ' />
                                        </label>
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end">From Time</p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <input type='time' name='toTime' id="toTime" placeholder='' value={dropElements.toTime} onChange={handleChange} className='w-full h-[35px] text-slate-500 font-semibold text-sm border border-slate-400 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px] cursor-pointer ' />
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end"></p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                    
                                    </span>
                                </span>
                                
                            </span>
                        
                            <span className="flex flex-row gap-[80px] w-full items-center justify-center">

                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end">Reason</p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <DropDown title={'reason'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end">Status</p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        <DropDown title={'status'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                    </span>
                                </span>
                                
                                <span className="w-auto flex flex-row items-center justify-center gap-5 h-[48px]  ">
                                    <p className="text-sky-600 text-[15px] font-semibold  w-[100px] text-end"></p>
                                    <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                                        
                                    </span>
                                </span>
                                
                            </span>

                            
                            {/* checkboxes */}
                            <span className="w-auto flex flex-row items-center justify-center gap-4 h-[48px]">
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2" >
                                    <input onChange={(e:any)=> {setDropElements({...dropElements, mondayCheck: e.target.checked})}} checked={dropElements.mondayCheck} type="checkbox" id="mondayId" className='h-[17px] w-[17px]' />
                                    <label htmlFor="mondayId" className="text-sky-600 text-[16px]">Monday</label>
                                </span>

                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input onChange={(e:any)=> {setDropElements({...dropElements, tuesdayCheck: e.target.checked})}} checked={dropElements.tuesdayCheck} type="checkbox" name="" id="tuesdayId" className='h-[17px] w-[17px]' />
                                    <label htmlFor="tuesdayId" className="text-sky-600 text-[16px]">Tuesday</label>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input onChange={(e:any)=> {setDropElements({...dropElements, wednesdayCheck: e.target.checked})}} checked={dropElements.wednesdayCheck} type="checkbox" name="" id="wednesdayId" className='h-[17px] w-[17px]' />
                                    <label htmlFor="wednesdayId" className="text-sky-600 text-[16px]">Wednesday</label>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input onChange={(e:any)=> {setDropElements({...dropElements, thursdayCheck: e.target.checked})}} checked={dropElements.thursdayCheck} type="checkbox" name="" id="thursdayId" className='h-[17px] w-[17px]' />
                                    <label htmlFor="thursdayId" className="text-sky-600 text-[16px]">Thursday</label>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input onChange={(e:any)=> {setDropElements({...dropElements, fridayCheck: e.target.checked})}} checked={dropElements.fridayCheck} type="checkbox" name="" id="fridayId" className='h-[17px] w-[17px]' />
                                    <label htmlFor="fridayId" className="text-sky-600 text-[16px]">Friday</label>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input onChange={(e:any)=> {setDropElements({...dropElements, saturdayCheck: e.target.checked})}} checked={dropElements.saturdayCheck} type="checkbox" name="" id="saturdayId" className='h-[17px] w-[17px]' />
                                    <label htmlFor="saturdayId" className="text-sky-600 text-[16px]">Saturday</label>
                                </span>
                                <span className="flex flex-row items-center justify-start cursor-pointer gap-2">
                                    <input onChange={(e:any)=> {setDropElements({...dropElements, sundayCheck: e.target.checked})}} checked={dropElements.sundayCheck} type="checkbox" name="" id="sundayId" className='h-[17px] w-[17px]' />
                                    <label htmlFor="sundayId" className="text-sky-600 text-[16px]">Sunday</label>
                                </span>
                            </span>

                        </div>

                        <button onClick={handleSearch} type="button" className='w-[100px] h-[40px] bg-green-600 hover:bg-green-700 text-white text-[17px] mx-auto rounded-[3px] mt-2'>Search</button>

                    </div>

                </div>
            </div>
        </main>
    )
}

export default ScheduleingSearch