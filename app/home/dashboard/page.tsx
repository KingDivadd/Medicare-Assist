'use client'
import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import AdminOneDashboard from "@/app/component/dashboard/admin-1";
import AdminTwoDashboard from "@/app/component/dashboard/admin-2";
import BillingDashboard from "@/app/component/dashboard/billing";
import FrontDeskDashboard from "@/app/component/dashboard/frontdesk";
import MedicalAssistantDashboard from "@/app/component/dashboard/medicalassistant";
import OfficeManagerDashboard from "@/app/component/dashboard/officeManager";
import PhysicianDashboard from "@/app/component/dashboard/physician";


const Dashboard = () => {
    const router = useRouter();
    const [userRole, setUserRole] = useState('')
    useEffect(() => {
        const role = sessionStorage.getItem('userRole')
        if ( role === null || role === ''){
            router.push('/login')
        }
        setUserRole(sessionStorage.getItem('userRole') || '')
        
    }, [])
    return (
        <>
            {userRole === 'admin-1' && <AdminOneDashboard />}
            {userRole === 'admin-2' && <AdminTwoDashboard />}
            {userRole === 'office-manager' && <OfficeManagerDashboard />}
            {userRole === 'front-desk' && <FrontDeskDashboard />}
            {userRole === 'billing' && <BillingDashboard />}
            {userRole === 'physician' && <PhysicianDashboard />}
            {userRole === 'medical-assistant' && <MedicalAssistantDashboard />}
        </>
        
    );
};

export default Dashboard;
