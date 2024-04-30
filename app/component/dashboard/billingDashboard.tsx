'use client'
import React, { useEffect, useState } from 'react'
import AgingBar from '../dasboardComponent/agingBar'
import AppointmentStatusBar from '../dasboardComponent/appointmentStatusBar'
import CopayCollectedBar from '../dasboardComponent/copayCollectedBar'
import MessageBar from '../dasboardComponent/messageBar'
import MoneyBar from '../dasboardComponent/moneyBar'
import PerformanceTrendBar from '../dasboardComponent/performanceTrendBar'
import SideBar from '../dasboardComponent/sidebar'
import VisitBar from '../dasboardComponent/visitBar'
import RouteNav from '../routeNav'
import SystemAdminSideBar from '../dasboardComponent/systemAdminSideBar'
import { RouteNavProps } from '@/types'

const BillingDashboard = ({userRole}:RouteNavProps) => {
    return (
        <main className='w-full h-screen flex items-start justify-center bg-slate-200'>
            <div className="w-full h-screen flex flex-col gap-1 bg-slate-100 overflow-y-auto mx-auto">
                <RouteNav userRole={userRole} />
                <div className="w-full flex-1 flex flex-row gap-2">
                    <SideBar userRole={userRole} />

                    <div className="w-[80%] flex items-start justify-center">
                        <div className="w-full flex-1 flex flex-col gap-3 py-2 pr-2 pl-1 bg-blue-100">
                                
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default BillingDashboard