'use client'
import React, { useEffect, useState } from 'react'
import { RouteNavProps } from '@/types'
import SideBar from '@/app/component/dasboardComponent/sidebar'
import RouteNav from '@/app/component/routeNav'
import { useRouter } from 'next/navigation'

const HelpAndTutorialLearning = () => {
    const router = useRouter()
    const [userRole, setUserRole] = useState('')
    useEffect(() => {
        const userRol = sessionStorage.getItem('userRole')
        if (userRol === null || userRol.trim() === '') {
            router.push('/login')
        }
        else{
            setUserRole(userRol)
        }
    }, [])
    return (
        <main className='w-full h-screen flex items-start justify-center bg-slate-200'>
            <div className="w-full h-screen flex flex-col gap-1 bg-slate-100 overflow-y-auto mx-auto">
                <RouteNav userRole={userRole} />
                <div className="w-full flex-1 flex flex-row gap-2">
                    <SideBar userRole={userRole} />

                    <div className="w-[80%] flex h-full items-start justify-center">
                        <div className="w-full h-full flex flex-col gap-3 py-2 pr-2 pl-1 bg-white">
                            Help and Tutorial learning page
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HelpAndTutorialLearning