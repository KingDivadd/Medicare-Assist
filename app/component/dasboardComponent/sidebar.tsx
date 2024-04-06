import React from 'react'
import { FiRefreshCcw } from "react-icons/fi";



const SideBar = () => {
    return (
        <div className='w-[400px] flex items-start justify-center pl-3'>
            <div className="flex flex-col bg-slate-300 rounded-b-[10px] w-full h-auto gap-[1px]">
                <span className="bord active-bord">
                    <p className="text-white text-[15px]">Dashboard</p>
                </span>
                
                <span className=" bord">
                    <p className="text-white text-[15px]">Today's appointment</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Patient in office</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Notes in progress</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Not billed encounters</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Pending review labs</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Pending review tab</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Help and tutorial learning</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Customer support</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">File maintenance </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Users</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Medical scrubbers</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Invoicing </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Support center</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Patient porter</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>
                <span className=" bord">
                    <p className="text-white text-[15px]">Provider schedule</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[6px] py-[3px] rounded-[10px] bg-slate-200">10</span>
                        <FiRefreshCcw size={20} className='text-slate-200' />
                    </span>
                </span>

            </div>
        </div>
    )
}

export default SideBar
