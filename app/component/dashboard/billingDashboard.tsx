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
import CustomerSupport from '../sideBarPages/customerSupport'
import SupportCenter from '../sideBarPages/supportCenter'
import HelpAndTutorialLearning from '../sideBarPages/helpAndTutorialLearning'
import PatientPorter from '../sideBarPages/patientPorter'

const BillingDashboard = ({userRole}:RouteNavProps) => {
    const [sidebar_tab, setSidebar_tab] = useState('')
    useEffect(() => {
        const scheduled_tab = sessionStorage.getItem('sidebar_tab')
        if(scheduled_tab !== null){
            setSidebar_tab(scheduled_tab)
        }
        if (scheduled_tab === null && sidebar_tab === ''){
            setSidebar_tab('help-and-tutorial-learning')
        }
    }, [])

    useEffect(() => {
        if (sidebar_tab.trim() !== ''){
            sessionStorage.setItem('sidebar_tab',sidebar_tab)
        }
    }, [sidebar_tab])
    return (
        <main className='w-full h-screen flex items-start justify-center bg-slate-200'>
            <div className="w-full h-screen flex flex-col gap-1 bg-slate-100 overflow-y-auto mx-auto">
                <RouteNav userRole={userRole} />
                <div className="w-full flex-1 flex flex-row gap-2">
                    <SideBar userRole={userRole} sidebar_tab={sidebar_tab} setSidebar_tab={setSidebar_tab} />

                    {sidebar_tab  === 'help-and-tutorial-learning' && <HelpAndTutorialLearning />}
                    {sidebar_tab  === 'customer-support' && <CustomerSupport />}
                    {sidebar_tab  === 'support-center' && <SupportCenter />}
                    {sidebar_tab  === 'patient-porter' && <PatientPorter />}
                </div>
            </div>
        </main>
    )
}

export default BillingDashboard