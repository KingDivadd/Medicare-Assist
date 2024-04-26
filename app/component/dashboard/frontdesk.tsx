'use client'
import React, { useState } from 'react'
import AgingBar from '../dasboardComponent/agingBar'
import AppointmentStatusBar from '../dasboardComponent/appointmentStatusBar'
import CopayCollectedBar from '../dasboardComponent/copayCollectedBar'
import MessageBar from '../dasboardComponent/messageBar'
import MoneyBar from '../dasboardComponent/moneyBar'
import PerformanceTrendBar from '../dasboardComponent/performanceTrendBar'
import SideBar from '../dasboardComponent/sidebar'
import VisitBar from '../dasboardComponent/visitBar'
import RouteNav from '../routeNav'

const FrontDeskDashboard = () => {
    const [userRole, setUserRole] = useState('frontdesk')
    return (
        <main className='w-full h-screen flex items-start justify-center bg-slate-200'>
            <div className="w-full h-screen flex flex-col gap-1 bg-slate-100 overflow-y-auto mx-auto">
                <RouteNav userRole={userRole} />
                <div className="w-full flex-1 flex flex-row gap-2">
                    <SideBar />
                    <div className="w-[80%] flex flex-col gap-3 py-2 pr-3 pl-1">
                        <MessageBar />
                        <AppointmentStatusBar />
                        <CopayCollectedBar />
                        <VisitBar />
                        <PerformanceTrendBar />
                        <MoneyBar />
                        <AgingBar /> 
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FrontDeskDashboard