import React, { useEffect, useState } from 'react'
import RouteNav from '../routeNav'
import ScheduleBar from './scheduleBar'
import ScheduleTable from './scheduleTable'
import SchedulingSideBar from './schedulingSide'
import TabBar from './tabBar'
import { SchedulingTabProps } from '@/types'

const SchedulingCalender = ({tab, setTab}:SchedulingTabProps) => {
    const [clickedDate, setClickedDate] = useState('')

    useEffect(() => {
        const currentDate:any = new Date();
        setClickedDate(formatDate(currentDate))
    }, [])

    function formatDate(dateString:string) {
        const date = new Date(dateString);
        const options:any = { month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options).toUpperCase();
        return formattedDate;
    }

    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav userRole='admin-1' />
            <TabBar tab={tab} setTab={setTab} />
            <div className="w-full flex-1 flex flex-row gap-2 bg-sky-600" >
                <SchedulingSideBar clickedDate={clickedDate} setClickedDate={setClickedDate} />
                <div className="w-full flex items-center justify-center py-[6px] ">
                    <div className="w-full flex flex-col gap-3 pr-3 pl-2 bg-sky-100 h-full ">
                        <div className="w-full bg-white h-full">
                            <ScheduleBar clickedDate={clickedDate} setClickedDate={setClickedDate} />
                            <ScheduleTable />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SchedulingCalender