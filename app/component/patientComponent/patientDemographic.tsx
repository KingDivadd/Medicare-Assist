import { PatientTabProps } from '@/types'
import React from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'

const PatientDemographic = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-gray-200 overflow-hidden">
            <RouteNav />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">
                <div className="flex w-full bg-gray-200 cont-2 overflow-y-auto px-5">
                s
                </div>
            </div>
        </main>
    )
}

export default PatientDemographic