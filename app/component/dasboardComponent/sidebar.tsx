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
                    <p className="text-white text-sm">Today's appointment</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Patient in office</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Notes in progress</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Not billed encounters</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Pending review labs</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Pending review tab</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Help and tutorial learning</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Customer support</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">File maintenance </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Users</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Medical scrubbers</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Invoicing </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Support center</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Patient porter</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-sm">Provider schedule</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>

            </div>
        </div>
    )
}

export default SideBar
