'use client'
import { RouteNavProps } from '@/types';
import React, { useEffect, useState } from 'react'
import { FiRefreshCcw } from "react-icons/fi";
import { useRouter } from 'next/navigation';


const SideBar = ({userRole}:RouteNavProps) => {
    const router = useRouter()
    const [selected, setSelected] = useState('')
    useEffect(() => {
        const path = window.location.pathname;
        const elem = path.split('/')
        setSelected(elem[elem.length - 1])
    }, [])

    const handleSelect = (item:string)=>{
        setSelected(item)
    }
    return (
        <div className='w-[20%] flex flex-col items-center justify-start pl-3 gap-3'>
            <div className="flex flex-col bg-slate-100 rounded-b-[10px] w-full h-auto">
                {['admin-1', 'admin-2', 'office-manager',].includes(userRole) && <span className={selected === 'dashboard'? 'active-bord': 'bord' } onClick={()=> handleSelect('dashboard')} >
                    <p className="text-white text-sm">Dashboard</p>
                </span>}
                
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'physician', 'medical-assistant'].includes(userRole) && <span className={selected === 'todays-appointment'? 'active-bord': 'bord' } onClick={()=> {handleSelect('todays-appointment'); router.push('/home/todays-appointment')}} >
                    <p className="text-white text-sm">Today's Appointment</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'physician', 'medical-assistant'].includes(userRole) && <span className={selected === 'patient-in-office'? 'active-bord': 'bord' } onClick={()=> {handleSelect('patient-in-office'); router.push('/home/patient-in-office')}} >
                    <p className="text-white text-sm">Patient in Office</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'physician', 'medical-assistant'].includes(userRole) && <span className={selected === 'notes-in-progress'? 'active-bord': 'bord' } onClick={()=> handleSelect('notes-in-progress')} >
                    <p className="text-white text-sm">Notes in Progress</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager'].includes(userRole) && <span className={selected === 'not-billed-encounters'? 'active-bord': 'bord' } onClick={()=> handleSelect('not-billed-encounters')} >
                    <p className="text-white text-sm">Not Billed Encounters</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'physician', 'medical-assistant'].includes(userRole) && <span className={selected === 'pending-review-labs'? 'active-bord': 'bord' } onClick={()=> handleSelect('pending-review-labs')} >
                    <p className="text-white text-sm">Pending Review Labs</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={selected === 'help-and-tutorial-learning'? 'active-bord': 'bord' } onClick={()=> {handleSelect('help-and-tutorial-learning'); router.push('help-and-tutorial-learning')}} >
                    <p className="text-white text-sm">Help and Tutorial Learning</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'billing'].includes(userRole) && <span className={selected === 'customer-support'? 'active-bord': 'bord' } onClick={()=> handleSelect('customer-support')} >
                    <p className="text-white text-sm">Customer Support</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager'].includes(userRole) && <span className={selected === 'file-maintenance'? 'active-bord': 'bord' } onClick={()=> handleSelect('file-maintenance')} >
                    <p className="text-white text-sm">File Maintenance </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager'].includes(userRole) && <span className={selected === 'users'? 'active-bord': 'bord' } onClick={()=> handleSelect('users')} >
                    <p className="text-white text-sm">Users</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager'].includes(userRole) && <span className={selected === 'medical-scrubbers'? 'active-bord': 'bord' } onClick={()=> handleSelect('medical-scrubbers')} >
                    <p className="text-white text-sm">Medical Scrubbers</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'front-desk'].includes(userRole) && <span className={selected === 'invoicing'? 'active-bord': 'bord' } onClick={()=> {handleSelect('invoicing'); router.push('/home/invoicing')}} >
                    <p className="text-white text-sm">Invoicing </p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={selected === 'support-center'? 'active-bord': 'bord' } onClick={()=> handleSelect('support-center')} >
                    <p className="text-white text-sm">Support Center</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className={selected === 'patient-porter'? 'active-bord': 'bord' } onClick={()=> {handleSelect('patient-porter'); router.push('/home/patient-porter')}} >
                    <p className="text-white text-sm">Patient Porter</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'front-desk', 'physician', 'medical-assistant'].includes(userRole) && <span className={selected === 'provider-schedule'? 'active-bord': 'bord' } onClick={()=> {handleSelect('provider-schedule'); router.push('/home/provider-schedule')}} >
                    <p className="text-white text-sm">Provider Schedule</p>
                    <span className="flex flex-row items-center justify-end gap-3 h-fill">
                        <span className="px-[4px] py-[1px] rounded-[10px] text-sm text-slate-600 bg-slate-200 flex items-center justify-center">10</span>
                        <FiRefreshCcw size={18} className='text-slate-200' />
                    </span>
                </span>}
            </div>

            {/* This should handle the shortcuts */}

            {['admin-1', 'admin-2', 'office-manager', 'billing',].includes(userRole) && <div className="flex flex-col bg-white rounded-b-[10px] w-full h-auto p-2 border border-sky-600 ">
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="h-[40px] flex items-center justify-start ">
                    <p className="text-amber-600 text-sm font-semibold">Shortcuts</p>
                </span>}

                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between bg-sky-600 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-white text-sm font-semibold">Patient</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Register a new Patient</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Eligibility Request</p>
                </span>}
                
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between bg-sky-600 h-[40px] px-2 cursor-pointer border-b border-slate-300 mt-3 ">
                    <p className="text-white text-sm font-semibold">Claims</p>
                </span>}

                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Manage Claims</p>
                </span>}

                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Create a Claim</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager',  'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer border-b border-slate-300">
                    <p className="text-sky-600 font-semibold text-sm">Claim Status Inquiry</p>
                </span>}
                {['admin-1', 'admin-2', 'office-manager', 'billing', 'physician', 'medical-assistant'].includes(userRole) && <span className="flex flex-row items-center justify-between hover:bg-slate-200 h-[40px] px-2 cursor-pointer rounded-b-[5px]">
                    <p className="text-sky-600 font-semibold text-sm">Claim Status Report</p>
                </span>}
            </div>}

        </div>
    )
}

export default SideBar
