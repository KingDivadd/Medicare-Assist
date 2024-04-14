'use client'
import { PatientTabProps } from '@/types'
import React, { useEffect } from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import io from 'socket.io-client'

const endpoint = 'http://localhost:6000';

const PatientMedication = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    useEffect(() => {
        const socket = io(endpoint)
        socket.on('connect', ()=>{
            console.log('connected to socket.io successfully')
        })
    }, [])
    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">
                Medication page
            </div>
        </main>
    )
}

export default PatientMedication