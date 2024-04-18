'use client'
import { PatientTabProps } from '@/types'
import React, {useState, useEffect} from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { FaCaretUp } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";
import NewMessageModal from './newMessageModal'


const PatientMessage = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    const [dropMenu, setDropMenu] = useState(false)
    const [dropElement, setDropElement] = useState('SELECT')

    const handleDropMenu =()=>{
        if(dropMenu){setDropMenu(false)}
        if(!dropMenu){setDropMenu(true)}
    }
    
    return (
        <main className="relative w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">
                <div className="h-[100%] flex flex-col w-full bg-slate-100 justify-start items-center gap-4 px-3 py-3">
                    <div className="h-[150px] w-full bg-blue-200 flex items-center justify-center">
                        <div className="w-[450px] flex flex-col gap-4 justify-center items-center">
                            <span className="flex flex-row w-full items-center jusity-between gap-3">
                                <p className="text-sm text-sky-600 w-[30%] font-semibold">Message Type</p>

                                <div className="relative flex h-auto items-center justify-start w-[30%] w-full">
                                    <span onClick={handleDropMenu} className="flex flex-row item-center jusitify-between w-full h-[25px] cursor-pointer ">
                                        <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white text-slate-600 text-sm">{dropElement}</span>
                                        <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 text-white">
                                            {dropMenu? <FaCaretUp  /> : <FaCaretDown  />}
                                        </span>
                                    </span>

                                    {dropMenu && 
                                    <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[30px] left-0 rounded-[5px] shadow-xl ">
                                        {['SELECT','Collect Balances', 'eRefill', 'Financial', 'Laboratory', 'Medication', 'Message', 'Other', 'Patient Refill', 'Phone Log', 'Reminders', 'Rx Change', 'Rx Fill', 'Secure Email' ].map((data, ind)=>{
                                            return (
                                                <span onClick={()=> {setDropElement(data); setDropMenu(false)}} key={ind} className="drop-element">{data}</span>
                                            )
                                        })}
                                    </span>
                                    }
                                </div>

                            </span>
                            <span className="flex flex-row w-full items-center jusity-between gap-3">
                                <p className="text-sm text-sky-600 w-[30%] font-semibold">Message Status</p>
                                <span className="flex items-center justify-center w-[70%] gap-3">
                                    <span className="flex flex-row items-center justify-center gap-3 w-full">
                                        <input type="radio" name="one" id="" className='h-[17px] w-[17px] ' /> 
                                        <p className="text-sm text-start flex items-center justify-end text-sky-600 h-full">Resolved</p>
                                    </span>
                                    <span className="flex flex-row items-center justify-center gap-3 w-full">
                                        <input type="radio" name="one" id="" className='h-[17px] w-[17px] ' /> 
                                        <p className="text-sm text-start flex items-center justify-end text-sky-600 h-full">Unresolved</p>
                                    </span>
                                    <span className="flex flex-row items-center justify-center gap-3 w-full">
                                        <input type="radio" name="one" id="" className='h-[17px] w-[17px] ' /> 
                                        <p className="text-sm text-start flex items-center justify-end text-sky-600 h-full">All</p>
                                    </span>
                                </span>    
                            </span>

                            <button type="button" className="px-3 h-[35px] flex items-center justify-center rounded-[3px] text-sm text-white bg-lime-500 hover:bg-lime-600">Search</button>
                        </div>
                    </div>

                    <div className="w-full flex flex-col justify-start">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            Patient Message
                            <button type="button" className='flex items-center justify-center text-sm text-slate-700 rounded-[3px] h-[30px] bg-slate-100 hover:bg-slate-200 px-3'>
                                New Message
                            </button>
                        </span>
                        <span className="w-full flex flex-row items-center justify-between h-[35px] bg-gray-300">
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[17.5%] border-r border-gray-600">Message</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Status</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Type</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Priority</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Called Date</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Cell #</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Email</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Patient View</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Tracking Field</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Assigned To</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%] border-r border-gray-600">Entered By</p>
                            <p className="text-sm text-end px-2 h-full flex items-center justify-start w-[7.5%]">Entered Date</p>
                        </span>
                        <div className="w-full flex items-center justify-center h-[350px] bg-white rounded-b-[5px]">
                            <p className="text-lg">No Data Found</p>
                        </div>
                    </div>


                </div>
            </div>
            <NewMessageModal />
        </main>
    )
}

export default PatientMessage