'use client'
import { useEffect, useState } from "react";
import { BiHomeAlt2 } from "react-icons/bi";
import { GoGear } from "react-icons/go";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { LuCalendarClock } from "react-icons/lu";
import { GoPerson } from "react-icons/go";
import { IoAdd } from "react-icons/io5";
import { BiNotepad } from "react-icons/bi";
import { PiNotepad } from "react-icons/pi";
import { BiTask } from "react-icons/bi";
import Link from "next/link";

const RouteNav = () => {
    const [page, setPage] = useState('')

    useEffect(() => {
        const path = window.location.pathname;
        setPage(path)
        console.log(path); // This will log the path after localhost:3000/

    }, [])
    return (
        <nav className='w-full bg-sky-700 flex flex-row items-center justify-between positon-fixed'>
            <div className="flex flex-row gap-1 items-center w-auto h-[50px]">
                <Link href={'/home/dashboard'} className={page === '/home/dashboard'? 'active-route-nav-item':'route-nav-item'}>
                    <BiHomeAlt2 size={23} className="text-slate-300" />
                    <p className="text-slate-300 text-[15px]">Home</p>
                </Link>
                
                <Link href={'/ehr'} className={page === '/ehr'? 'active-route-nav-item':'route-nav-item'}>
                    <BiNotepad size={23} className="text-slate-300" />
                    <p className="text-slate-300 text-[15px]">EHR</p>
                </Link>
                
                <Link href={'/patient'} className={page === '/patient'? 'active-route-nav-item':'route-nav-item'}>
                    <GoPerson size={23} className="text-slate-300" />
                    <p className="text-slate-300 text-[15px]">Patient</p>
                </Link>
                
                <Link href={'/scheduling'} className={page === '/scheduling'? 'active-route-nav-item':'route-nav-item'}>
                    <LuCalendarClock size={23} className="text-slate-300" />
                    <p className="text-slate-300 text-[15px]">Scheduling</p>
                </Link>
                
                <Link href={'/pmr'} className={page === '/pmr'? 'active-route-nav-item':'route-nav-item'}>
                    <PiNotepad size={24} className="text-slate-300" />
                    <p className="text-slate-300 text-[15px]">PMR</p>
                </Link>
                
                <Link href={'/reports'} className={page === '/reports'? 'active-route-nav-item':'route-nav-item'}>
                    <HiOutlineDocumentReport size={23} className="text-slate-300" />
                    <p className="text-slate-300 text-[15px]">Reports</p>
                </Link>
                
                <Link href={'/task-management'} className={page === 'task-management'? 'active-route-nav-item':'route-nav-item'}>
                    <BiTask size={23} className="text-slate-300" />
                    <p className="text-slate-300 text-[15px]">Task Management</p>
                </Link>
                
            </div>

            <div className="flex flex-row gap-2 items-center h-[70%] items-center pr-5">
                <Link href={'/new-patient'} className='flex flex-row gap-2 h-full items-center justify-center px-3 bg-amber-500 cursor-pointer'>
                    <IoAdd size={23} className="text-white" />
                    <p className="text-white font text-[15px]">New Patient</p>
                </Link>
                <span className='flex flex-row gap-2 h-full items-center justify-center px-3 bg-amber-500 cursor-pointer'>
                    <p className="text-white text-[15px]">Search</p>
                </span>
            </div>
        </nav>
    )
}

export default RouteNav