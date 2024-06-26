'use client'
import { SelectDateProps } from '@/types';
import React, { useEffect, useState } from 'react'
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import DropDown from '../dropDown';

const ScheduleBar = ({clickedDate, setClickedDate}:SelectDateProps) => {
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        jump: false,
    });
    const [dropElements, setDropElements] = useState({
        jump: 'SELECT',
    })

    const handleSelectDropdown = (dropdown: any, title:any)=>{
        setDropElements({...dropElements, [title]: dropdown}); setDropMenus({...dropMenus, [title]: false})
    }

    const handleDropMenu = (dropdown: any) => {
        const updatedDropMenus = Object.keys(dropMenus).reduce((acc, key) => {
            acc[key] = key === dropdown ? !dropMenus[key] : false;
            return acc;
        }, {} as { [key: string]: boolean });
        setDropMenus(updatedDropMenus);
        setDropElements({...dropElements, [dropdown]: 'SELECT'});
    };
    useEffect(() => {
    const today:any = new Date()
    setClickedDate(formatDate(today))
    }, [])

    function formatDate(dateString:string) {
        const date = new Date(dateString);
        const options:any = { month: 'long', day: 'numeric', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('en-US', options).toUpperCase();
        return formattedDate;
    }

    function formatToday(){
        const today:any = new Date()
        setClickedDate(formatDate(today))
    }

    const goDayBack = () => {
        const yesterday:any = new Date(clickedDate);
        yesterday.setDate(yesterday.getDate() - 1);
        setClickedDate(formatDate(yesterday));
    };
    
    const goDayForward = () => {
        const tomorrow:any = new Date(clickedDate);
        tomorrow.setDate(tomorrow.getDate() + 1);
        setClickedDate(formatDate(tomorrow));
    };
    return (
        <div className="w-full py-1 flex flex-row items-center justify-between border-b">
            <div className="flex flex-row h-[35px] gap-5 ">
                <span onClick={formatToday} className="px-3 bg-blue-100 hover:bg-sky-600 hover:text-slate-100 cursor-pointer flex items-center justify-center text-slate-600 border-2 border-sky-600 rounded-[3px]">Today</span>
                <span onClick={goDayBack} className="px-3 bg-blue-100 hover:bg-sky-600 hover:text-slate-100 cursor-pointer flex items-center justify-center text-gray-500 border-2 border-sky-600 rounded-[3px]"><GrFormPrevious size={25} /> </span>
                <p className="text-slate-600 text-[15px] flex items-center font-bold">{clickedDate}</p>
                <span onClick={goDayForward} className="px-3 bg-blue-100 hover:bg-sky-600 hover:text-slate-100 cursor-pointer flex items-center justify-center text-gray-500 border-2 border-sky-600 rounded-[3px]"><GrFormNext size={25} /> </span>
                <span className="flex flex-row jusitify-center gap-2 items-center h-full">
                    <p className="text-black text-[15px] flex items-center">Provider: </p>
                    <p className="text-slate-600 text-[15px] flex items-center font-bold">DR BRIAN ALDRIH</p>
                </span>
            </div>
            <div className="flex flex-row py-1 px-2 gap-2">
                <p className="text-[15px] font-semibold text-slate-700 text-center my-auto">Jump To:</p>
                <span className="w-[150px]">
                    <DropDown title={'jump'} dropArray={['', '']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                </span>
                
                <span className="w-[90px] h-[35px] bg-amber-500 hover:bg-amber-600 cursor-pointer flex items-center justify-center text-red text-slate-100 rounded-[3px]">Day</span>
                <span className="w-[90px] h-[35px] bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center justify-center text-red text-slate-100 rounded-[3px]">Week</span>
                <span className="w-[90px] h-[35px] bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center justify-center text-red text-slate-100 rounded-[3px]">Month</span>
                <span className="w-[90px] h-[35px] bg-sky-600 hover:bg-sky-700 cursor-pointer flex items-center justify-center text-red text-slate-100 rounded-[3px]">Multi View</span>
            </div>
        </div>
    )
}

export default ScheduleBar