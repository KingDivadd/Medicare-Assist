'use client'
import { PatientTabProps, SchedulingTabProps } from '@/types'
import React from 'react'

const TabBar = ({patient_tab, setPatient_tab}:PatientTabProps) => {

    return (
        <div className="w-full bg-sky-700 h-[57px] flex flex-row items-end justify-between bg-white ">
            <div className="flex flex-row h-[57px] gap-1 items-center w-auto h-[80%]">
                <span onClick={()=>{setPatient_tab('chart')}} className={patient_tab === 'chart' || patient_tab === ''? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className="h-[57px] flex items-center text-[15px]">Chart</p>
                </span>
                <span onClick={()=>{setPatient_tab('financial')}} className={patient_tab === 'financial'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Financial</p>
                </span>
                <span onClick={()=>{setPatient_tab('demographic')}} className={patient_tab === 'demographic'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Demographic</p>
                </span>
                <span onClick={()=>{setPatient_tab('insurance')}} className={patient_tab === 'insurance'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Insurance</p>
                </span>
                <span onClick={()=>{setPatient_tab('document')}} className={patient_tab === 'document'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Document</p>
                </span>
                <span onClick={()=>{setPatient_tab('messages')}} className={patient_tab === 'messages'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Messages</p>
                </span>
                <span onClick={()=>{setPatient_tab('medication')}} className={patient_tab === 'medication'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Medication</p>
                </span>
            </div>
        </div>
    )
}

export default TabBar