'use client'
import React, { useEffect, useState } from 'react'
import SideBar from '../dasboardComponent/sidebar'
import RouteNav from '../routeNav'
import { RouteNavProps } from '@/types'
import TodaysAppointment from '@/app/home/todays-appointment/page'

const FrontDeskDashboard = ({userRole}:RouteNavProps) => {
    const [sideMenu, setSideMenu] = useState('')
    useEffect(() => {
        const path = window.location.pathname.split('/');

        setSideMenu(path[path.length - 1])
    }, [])
    return (
        <main className='w-full h-screen flex items-start justify-center bg-slate-200'>
            <div className="w-full h-screen flex flex-col gap-1 bg-slate-100 overflow-y-auto mx-auto">
                <RouteNav userRole={userRole} />
                <div className="w-full flex-1 flex flex-row gap-2">
                    <SideBar userRole={userRole} />

                    <div className="w-[80%] flex h-full items-start justify-center">
                        <div className="w-full h-full flex flex-col gap-3 py-2 pr-2 pl-1">
                            <TodaysAppointment />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default FrontDeskDashboard