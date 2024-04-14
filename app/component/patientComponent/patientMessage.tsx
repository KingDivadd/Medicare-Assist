import { PatientTabProps } from '@/types'
import React from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'

const PatientMessage = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">
                <div className="h-[100%] flex flex-col w-full bg-slate-100 justify-start items-center gap-4 px-3 py-3">
                    <div className="h-[150px] w-full bg-blue-200 flex items-center justify-center">
                        <div className="w-[450px] flex flex-col gap-4 justify-center items-center">
                            <span className="flex flex-row w-full items-center jusity-between gap-3">
                                <p className="text-sm text-sky-600 w-[30%] font-semibold">Message Type</p>
                                <input type="text" name="" id="" placeholder='' className='w-[70%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
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
        </main>
    )
}

export default PatientMessage