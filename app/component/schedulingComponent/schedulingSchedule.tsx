'use client'
import { SchedulingTabProps } from '@/types'
import React, { useState } from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { IoCaretDown } from 'react-icons/io5'
import { ImBin } from "react-icons/im";
import DropDown from '../dropDown'

const SchedulingSchedule = ({tab, setTab}:SchedulingTabProps) => {
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        provider: false,
    });
    const [dropElements, setDropElements] = useState({
        provider: 'SELECT',
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
        <main className='w-full h-screen flex flex-col bg-slate-100 overflow-hidden'>
            <RouteNav userRole='admin-1' />
            <TabBar tab={tab} setTab={setTab} />
            <div className="w-full bg-sky-600 py-3 flex-1 flex items-center jusitify-center">
                <div className="w-full mx-auto flex flex-col h-full bg-slate-100 pt-2">
                    <span className="w-auto flex flex-row items-center justify-center gap-5 h-[50px]">
                        <p className="text-sky-600 text-[15px] font-semibold">Provider</p>
                        <span className=" h-[25px] w-[150px] flex flex-row items-center justify-end cursor-pointer">
                            <DropDown title={'provider'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                        </span>
                    </span>

                    <div className="flex flex-col flex-1 w-[95%] mx-auto py-1 px-1 border-2 border-slate-200 rounded-t-[6px] overflow-hidden">
                        <span className="flex flex-row items-center justify-between h-[40px] w-full bg-sky-600 border-2 border-sky-600 rounded-t-[6px] px-3">
                            <p className="text-slate-100 font-semibold text-[15px]">Provider/Resoureces Schedule</p>
                            <span className="flex flex-row items-center h-full justify-end w-auto gap-3">
                                <button type="button" className='px-4 text-sm h-[30px] text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-[3px]'>Create new schedule</button>
                                <button type="button" className='px-4 text-sm h-[30px] text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-[3px]'>Batch schedule</button>
                            </span>
                        </span>

                        <div className="flex items-start justify-center w-full cont overflow-y-auto">
                            <table className="border-collapse border-2 w-full">
                                <thead className='h-[45px] '>
                                    <tr>
                                        <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Location</th>
                                        <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Form Data</th>
                                        <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">To Date</th>
                                        <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Slot Minute</th>
                                        <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">From Time</th>
                                        <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">To Time</th>
                                        <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Reason</th>
                                        <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ...">Days</th>
                                        <th className="border-2 border-slate-300 bg-slate-200 font-semibold text-slate-500 ..."></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[1,2,3,4,5,6,7,8,9,10,11,12,1,1,1,1,1,1].map((data, ind)=>{
                                        return (
                                                <tr key={ind} className='h-[50px]'>
                                                    <td className="border border-slate-200 border-r-0 border-l-0 pl-1 text-sm ..."></td>
                                                    <td className="border border-slate-200 border-r-0 border-l-0 pl-1 text-sm ..."></td>
                                                    <td className="border border-slate-200 border-r-0 border-l-0 pl-1 text-sm ..."></td>
                                                    <td className="border border-slate-200 border-r-0 border-l-0 pl-1 text-sm ..."></td>
                                                    <td className="border border-slate-200 border-r-0 border-l-0 pl-1 text-sm ..."></td>
                                                    <td className="border border-slate-200 border-r-0 border-l-0 pl-1 text-sm ..."></td>
                                                    <td className="border border-slate-200 border-r-0 border-l-0 pl-1 text-sm ..."></td>
                                                    <td className="border border-slate-200 border-r-0 border-l-0 pl-1 text-sm ..."></td>
                                                    <td className="border border-slate-200 border-r-0 border-l-0 pl-1 text-sm ..."><p className="w-[30px]"></p> <ImBin size={16} color='red' className='cursor-pointer mx-auto ' /> </td>
                                                </tr>
                                        )
                                    })}
                                    
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    )
}

export default SchedulingSchedule