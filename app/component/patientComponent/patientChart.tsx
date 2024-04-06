import { PatientTabProps } from '@/types'
import React from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { IoPrintOutline } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { MdSmokingRooms } from "react-icons/md";
import Image from 'next/image';



const PatientChart = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-gray-200 overflow-hidden">
            <RouteNav />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />

            <div className="w-full bg-sky-600 flex-1 py-3">
                <div className="w-full h-full flex flex-col bg-gray-200 px-5">

                    <span className="w-full flex flex-row items-center justify-between gap-3 h-[50px] px-4 mt-2">
                        <p className="text-xl text-sky-600 font-semibold h-full flex items-end">Patient Chart</p>
                        <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-500 h-[73%]">
                            <IoPrintOutline size={23} className='text-sky-500' />
                            <IoMdSettings size={25} className='text-blue-800' />
                        </span>
                    </span>

                    <div className="w-full flex flex-row gap-4 mt-[60px]">
                        <div className="lg:w-[40%] flex flex-col rounded-[5px] bg-white px-[40px] py-[30px]">
                            <span className="w-full flex flex-row items-center justify-between h-[35px]">
                                <p className="text-[17px] text-slate-600 font-semibold">Primary Plan</p>
                                <p className="text-[18px] text-slate-500 ">BCBS SC</p>
                                <span className="h-full flex flex-row items-center justify-center gap-10">
                                    <p className="text-[17px] text-slate-600 font-semibold">Copay</p>
                                    <p className="text-[18px] text-slate-500 ">$0</p>
                                </span>
                            </span>
                            
                            <span className="w-full flex flex-row items-center justify-start h-[40px] border-b border-slate-400">
                                <p className="text-[17px] text-slate-600 font-semibold">No Active Referral Documented</p>
                            </span>

                            <span className="w-full flex flex-row items-center justify-start h-[40px]">
                                <p className="text-[17px] text-slate-600 font-semibold">Medicare Cap</p>
                            </span>

                            <span className="w-[70%] flex flex-row items-center justify-between h-[30px]  ">
                                <p className="text-[17px] text-slate-600 font-semibold">OT Used/Remaining YTD</p>
                                <p className="text-[18px] text-slate-500">$0.00 / $2110.0</p>
                            </span>

                            <span className="w-[70%] flex flex-row items-center justify-between h-[30px] h-[40px] ">
                                <p className="text-[17px] text-slate-600 font-semibold">PT/SLP Used/Remaining YTD</p>
                                <p className="text-[18px] text-slate-500">$0.00 / $2110.0</p>
                            </span>

                            <span className="w-full flex flex-row items-center justify-start border-b border-slate-400"></span>

                            <span className="w-[70%] flex flex-row items-center justify-between h-[40px] ">
                                <p className="text-[17px] text-slate-600 font-semibold">Next Appointment</p>
                                <p className="text-[18px] text-slate-500">No Appointment Scheduled</p>
                            </span>
                        </div>

                        <div className="lg:w-[60%] flex flex-row rounded-[5px] bg-white ">
                            <span className="w-[250px] h-[300px] border-r border-slate-300 flex items-center justify-center">
                                <Image src={'/human.svg'} alt={'Human svg'} width={150} height={700} ></Image>
                                <div className="flex flex-col w-5 justify-center items-center h-full w-auto">
                                    <span className="h-[20%] border-b border-slate-300 w-[15px]"></span>
                                    <span className="h-[15%] border-l border-slate-300"></span>
                                    <span className="h-[10%]  text-slate-600 text-[16px]">Height</span>
                                    <span className="h-[10%]  text-slate-600 text-[22px]">N/A</span>
                                    <span className="h-[15%] border-l border-slate-300"></span>
                                    <span className="h-[20%] border-t border-slate-300 w-[15px]"></span>
                                </div>
                            </span>

                            <span className="w-full h-full">
                                <span className="flex border-b border-slate-300 h-[37%]">
                                    <span className="w-[40%] h-full flex flex-col items-start justify-center px-[40px] border-r border-slate-300">
                                        <p className="text-sm text-slate-500">BMI</p>
                                        <p className="text-4xl text-slate-600">N/A</p>
                                    </span>
                                    <span className="w-[60%] h-full flex flex-col items-start justify-center px-[40px] ">
                                        <p className="text-sm text-slate-500">Weight</p>
                                        <p className="text-4xl text-slate-600">N/A</p>
                                    </span>
                                </span>

                                <span className="flex jusitify-center items-center border-b border-slate-300 h-[37%] w-full">
                                    <span className="w-auto h-full flex flex-row gap-4 mx-auto">
                                        <p className="text-sm text-slate-500 w-auto flex items-center justify-center">Blood Pressure</p>

                                        <span className="w-auto flex flex-col items-center justify-end gap-1">
                                            <span className="w-[140px] h-[20px] rounded-l-[10px] rounded-r-[10px] bg-slate-300"></span>
                                            <span className="flex flex-row items-start justify-center gap-2">
                                                <p className="text-4xl text-slate-600">N/A</p>
                                                <p className="text-sm text-slate-500">(Systolic)</p>
                                            </span>
                                        </span>

                                        <span className="w-auto flex flex-col items-center justify-end gap-1">
                                            <span className="w-[140px] h-[20px] rounded-l-[10px] rounded-r-[10px] bg-slate-300"></span>
                                            <span className="flex flex-row items-start justify-center gap-2">
                                                <p className="text-4xl text-slate-600">N/A</p>
                                                <p className="text-sm text-slate-500">(Diastolic)</p>
                                            </span>
                                        </span>
                                    </span>
                                </span>

                                <span className="flex flex-row items-center justify-between w-[70%] h-[26%] px-[40px]">
                                    <MdSmokingRooms size={35} className='text-slate-500' />
                                    <span className="flex flex-row">
                                        <p className="text-lg text-slate-600">Smoking Status: </p>
                                        <p className="text-lg text-slate-400"> N/A</p>
                                    </span>
                                </span>

                            </span>
                        </div>
                    </div>

                </div>
            </div>
            
        </main>
    )
}

export default PatientChart