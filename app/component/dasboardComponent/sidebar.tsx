import { RouteNavProps } from '@/types';
import React from 'react'
import { FiRefreshCcw } from "react-icons/fi";


const SideBar = ({userRole}: RouteNavProps) => {
    return (
        <div className='w-[20%] flex flex-col items-center justify-start pl-3 gap-3'>
            <div className="flex flex-col bg-slate-100 rounded-b-[10px] w-full h-auto">
                <span className="bord active-bord">
                    <p className="text-white text-sm">Dashboard</p>
                </span>
                
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Today's Appointment</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Patient in Office</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Notes in Progress</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Not Billed Encounters</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Pending Review Labs</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Help and Tutorial Learning</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Customer Support</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">File Maintenance </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Users</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Medical Scrubbers</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Invoicing </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Support Center</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Patient Porter</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="bord">
                    <p className="text-white text-sm">Provider Schedule</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
            </div>

            {/* This should handle the shortcuts */}

            <div className="flex flex-col bg-white rounded-b-[10px] w-full h-auto p-2 border border-sky-600 ">
                <span className="h-[40px] flex items-center justify-start ">
                    <p className="text-amber-600 text-sm font-semibold">Shortcuts</p>
                </span>

                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between bg-sky-600 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-white text-sm font-semibold">Patient</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Register a new Patient</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Eligibility Request</p>
                </span>}
                
                <span className="flex flex-row items-center justify-between bg-sky-600 h-[40px] px-2 cursor-pointer border-b border-slate-300 mt-3 ">
                    <p className="text-white text-sm font-semibold">Claims</p>
                </span>
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Manage Claims</p>
                </span>}

                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Create a Claim</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Claim Status Inquiry</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer rounded-b-[5px]">
                    <p className="text-sky-600 font-semibold text-sm">Claim Status Report</p>
                </span>}
            </div>

        </div>
    )
}

export default SideBar
