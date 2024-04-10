import React from 'react'
import AgingBar from '../dasboardComponent/agingBar'
import AppointmentStatusBar from '../dasboardComponent/appointmentStatusBar'
import CopayCollectedBar from '../dasboardComponent/copayCollectedBar'
import MessageBar from '../dasboardComponent/messageBar'
import MoneyBar from '../dasboardComponent/moneyBar'
import PerformanceTrendBar from '../dasboardComponent/performanceTrendBar'
import SideBar from '../dasboardComponent/sidebar'
import VisitBar from '../dasboardComponent/visitBar'
import RouteNav from '../routeNav'

const AdminOneDashboard = () => {
    return (
        <main className='w-full h-screen flex flex-col gap-1 bg-gray-200 overflow-y-auto'>
            <RouteNav />
            <div className="w-full flex-1 flex flex-row gap-2">
                <SideBar />
                <div className="w-full flex flex-col gap-3 py-2 pr-3 pl-1">
                    <MessageBar />
                    <AppointmentStatusBar />
                    <CopayCollectedBar />
                    <VisitBar />
                    <PerformanceTrendBar />
                    <MoneyBar />
                    <AgingBar /> 
                </div>
            </div>
        </main>
    )
}

export default AdminOneDashboard