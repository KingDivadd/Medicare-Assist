'use client'
import { SchedulingTabProps } from '@/types'
import React from 'react'

const TabBar = ({tab, setTab}:SchedulingTabProps) => {

    return (
        <div className="w-full bg-sky-700 flex flex-row items-end justify-between bg-white pt-2">
            <div className="flex flex-row h-[40px] gap-1 items-center w-auto">
                <span onClick={()=>{setTab('calender')}} className={tab === 'calender' || tab === ''? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className="h-[57px] flex items-center text-[15px]">Calender</p>
                </span>
                <span onClick={()=>{setTab('search')}} className={tab === 'search'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Search</p>
                </span>
                <span onClick={()=>{setTab('scheduling-day-sheet')}} className={tab === 'scheduling-day-sheet'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Scheduling Day Sheet</p>
                </span>
                <span onClick={()=>{setTab('wait-list')}} className={tab === 'wait-list'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Wait List</p>
                </span>
                <span onClick={()=>{setTab('schedule')}} className={tab === 'schedule'? 'active-scheduling-tab-item': 'scheduling-tab-item '}>
                    <p className=" text-[15px]">Schedule</p>
                </span>
            </div>
        </div>
    )
}

export default TabBar