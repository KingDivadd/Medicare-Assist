'use client'
import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import UserDashboard from "@/app/component/dashboard/userDashboard";


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
            <UserDashboard userRole={userRole} />
        </>
        
    );
};

export default Dashboard;
