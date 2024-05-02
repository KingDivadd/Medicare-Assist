'use client'
import React, { useState } from 'react'
import { FiRefreshCcw } from "react-icons/fi";
import MyDatePicker from './datepicker';
import { IoCaretUp } from "react-icons/io5";
import { IoCaretDown } from "react-icons/io5";
import { SelectDateProps } from '@/types';
import DropDown from '../dropDown';


const SchedulingSideBar = ({clickedDate, setClickedDate}: SelectDateProps) => {
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        practice: false,
        location: false,
        provider: false,
    });
    const [dropElements, setDropElements] = useState({
        practice: 'SELECT',
        location: 'SELECT',
        provider: 'SELECT',
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
    return (
        <div className='w-[400px] flex items-start justify-center pl-3 bg-sky-600'>
            <div className="flex flex-col  rounded-b-[10px] w-full h-auto gap-2 pt-[15px]">
                <div className="h-[290px] w-full bg-blue-200 pt-[1px] flex itmes-center justify-start">
                    <MyDatePicker clickedDate={clickedDate} setClickedDate={setClickedDate} />
                </div>

                <div className=" w-full bg-red-200 pt-[1px] flex flex-col bg-white">
                    <span className="w-full flex items-center justify-center text-black text-[16px] font-semibold bg-blue-200 h-[35px]">Provider</span>

                    <span className="w-full flex flex-row items-center justify-center gap-5 py-1">
                        <p className="text-sky-600 text-[15px] font-semibold">Practice</p>
                        <span className="w-[60%] flex flex-row items-center justify-end cursor-pointer ">
                            <DropDown title={'practice'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                        </span>
                    </span>
                    <span className="w-full flex flex-row items-center justify-center gap-5 py-1">
                        <p className="text-sky-600 text-[15px] font-semibold">Provider</p>
                        <span className="w-[60%] flex flex-row items-center justify-end cursor-pointer ">
                            <DropDown title={'provider'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                        </span>
                    </span>
                    <span className="w-full flex flex-row items-center justify-center gap-5 py-1">
                        <p className="text-sky-600 text-[15px] font-semibold">Location</p>
                        <span className="w-[60%] flex flex-row items-center justify-end cursor-pointer ">
                            <DropDown title={'location'} dropArray={['HIM', 'BALDRICH']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} handleSelectDropdown={handleSelectDropdown} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                        </span>
                    </span>
                    
                </div>

                <div className=" w-full bg-red-200 pt-[1px] flex flex-col bg-white">
                    <span className="w-full flex items-center justify-center text-black text-[15px] font-semibold bg-blue-200 h-[35px]">Status Color</span>

                    <span className="w-full flex flex-row items-center justify-center gap-5 h-[40px] px-3">
                        <span className="w-1/2 flex flex-row items-center justify-start gap-3 ">
                            <span className="w-[24px] h-[22px] bg-slate-400"></span>
                            <p className="text-[14px] text-slate-500 font-semibold">Blocked</p>
                        </span>
                        <span className="w-1/2 flex flex-row items-center justify-start gap-3 ">
                            <span className="w-[24px] h-[22px] bg-green-400"></span>
                            <p className="text-[14px] text-slate-500 font-semibold">Scheduled</p>
                        </span>
                    </span>
                    <span className="w-full flex flex-row items-center justify-center gap-5 h-[40px] px-3">
                        <span className="w-1/2 flex flex-row items-center justify-start gap-3 ">
                            <span className="w-[24px] h-[22px] bg-red-400"></span>
                            <p className="text-[14px] text-slate-500 font-semibold">Overbooked</p>
                        </span>
                        <span className="w-1/2 flex flex-row items-center justify-start gap-3 ">
                            <span className="w-[24px] h-[22px] bg-sky-100 border-2 border-slate-300"></span>
                            <p className="text-[14px] text-slate-500 font-semibold">Open</p>
                        </span>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default SchedulingSideBar
