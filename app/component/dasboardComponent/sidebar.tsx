import React from 'react'
import { FiRefreshCcw } from "react-icons/fi";



const SideBar = () => {
    return (
        <div className='w-[20%] flex items-start justify-center pl-3'>
            <div className="flex flex-col bg-slate-300 rounded-b-[10px] w-full h-auto gap-[1px]">
                <span className="bord active-bord">
                    <p className="text-white text-sm">Dashboard</p>
                </span>
                
                <span className=" bord">
                    <p className="text-white text-sm">Today's Appointment</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Patient in Office</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Notes in Progress</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Not Billed Encounters</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Pending Review Labs</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Help and Tutorial Learning</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Customer Support</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">File Maintenance </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Users</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Medical Scrubbers</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Invoicing </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Support Center</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Patient Porter</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Provider Schedule</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Patient</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Register a new Patient</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Eligibility Request</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Claims</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Create a Claim</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Claim Status Inquiry</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Claim Status Report</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Clearing House</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>

            </div>
        </div>
    )
}

export default SideBar
