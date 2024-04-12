import React from 'react'
import RouteNav from '../routeNav'
import ScheduleBar from './scheduleBar'
import ScheduleTable from './scheduleTable'
import SchedulingSideBar from './schedulingSide'
import TabBar from './tabBar'
import { SchedulingTabProps } from '@/types'

const SchedulingCalender = ({tab, setTab}:SchedulingTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav />
            <TabBar tab={tab} setTab={setTab} />
            <div className="w-full flex-1 flex flex-row gap-2 bg-sky-600" >
                <SchedulingSideBar />
                <div className="w-full flex items-center justify-center py-[6px] ">
                    <div className="w-full flex flex-col gap-3 pr-3 pl-2 bg-sky-100 h-full ">
                        <div className="w-full bg-white h-full">
                            <ScheduleBar />
                            <ScheduleTable />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SchedulingCalender