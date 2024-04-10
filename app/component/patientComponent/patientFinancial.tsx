import { PatientTabProps } from '@/types'
import React from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { IoMdSettings } from 'react-icons/io'
import { IoPrintOutline } from 'react-icons/io5'
import AgingBarChat from '../agingBarChat'

const PatientFinancial = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-gray-100 overflow-hidden">
            <RouteNav />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">
                <div className="flex w-full bg-slate-100 cont-2 overflow-y-auto px-5">
                    <div className="w-full h-auto flex-col pt-2 flex flex-col gap-3 overflow-hidden">
                        <span className="w-full flex flex-row items-center justify-between gap-3 h-[55px] px-4 ">
                            <p className="text-xl text-sky-700 font-semibold h-full flex items-end">Financial</p>
                            <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[73%]">
                                <button type="button" className='text-[14px] text-slate-100 bg-sky-600 hover:bg-sky-700 h-[33px] my-auto px-3 flex flex-row items-center justify-center rounded-[3px]'>
                                    Requeue Statement
                                </button>

                                <button type="button" className='text-[14px] text-slate-100 bg-sky-600 hover:bg-sky-700 h-[33px] my-auto px-3 flex flex-row items-center justify-center rounded-[3px]'>
                                    HSA Statement
                                </button>

                                <button type="button" className='text-[14px] text-slate-100 bg-sky-600 hover:bg-sky-700 h-[33px] my-auto px-3 flex flex-row items-center justify-center rounded-[3px]'>
                                    Print Statement
                                </button>

                                <button type="button" className='text-[14px] text-slate-100 bg-sky-600 hover:bg-sky-700 h-[33px] my-auto px-3 flex flex-row items-center justify-center rounded-[3px]'>
                                    Patient Payment
                                </button>

                                <button type="button" className='text-[14px] text-slate-100 bg-sky-600 hover:bg-sky-700 h-[33px] my-auto px-3 flex flex-row items-center justify-center rounded-[3px]'>
                                    Ledger
                                </button>
                            </span>
                        </span>

                        <div className="w-full flex flex-col jusitify-start overflow-y-auto gap-3 fincancial-cont">
                            <div className="flex flex-row w-full h-auto items-start justify-between gap-3">
                                <div className="flex flex-col items-center justify-start w-[35%] shadow-xl">
                                    <span className="flex items-center justify-start w-full border border-blue-200 bg-sky-600 text-lg font-bold text-slate-100 px-2 h-[50px] rounded-t-[5px] ">
                                        Advance Payment
                                    </span>
                                    <span className="w-full flex flex-row items-center justify-between bg-slate-300 h-[40px]">
                                        <p className="h-full flex items-center justify-column text-lg text-slate-700 w-1/3 border-r border-slate-400 px-2">Group</p>
                                        <p className="h-full flex items-center justify-column text-lg text-slate-700 w-1/3 border-r border-slate-400  px-2 ">Case #</p>
                                        <p className="h-full flex items-center justify-column text-lg text-slate-700 w-1/3  px-2">Balance</p>
                                    </span>
                                    <div className="flex flex-col justify-start w-full bg-white h-[410px] overflow-y-auto">
                                        {[1,2].map((data, ind)=>{
                                            return(
                                                <div key={ind} className="flex flex-row border-b border-slate-300 h-[45px] w-full">
                                                    <p className="text-lg text-slate-500 w-1/3 h-full flex items-center justify-start px-2 font-semibold">Patient</p>
                                                    <p className="text-lg text-slate-500 w-1/3 h-full flex items-center justify-start px-2 font-semibold"></p>
                                                    <p className="text-lg text-slate-500 w-1/3 h-full flex items-center justify-start px-2 font-semibold">35.00</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <span className="flex flex-row h-[45px] gap-2 bg-blue-100 w-full border border-slate-400 rounded-b-[7px] "></span>
                                </div>

                                <div className="flex flex-col w-[65%] h-full flex-1">
                                    <span className="flex items-center justify-start w-full border border-sky-600 bg-sky-600 text-lg font-bold text-slate-100 px-2 h-[50px] rounded-t-[5px] ">
                                        Aging
                                    </span>
                                    <div className="w-full flex-1 bg-white flex flex-row">
                                        <div className="h-full w-[87%] flex flex-col gap-3 justify-end items-center py-2">
                                            <p className="text-lg text-slate-400">Aging</p>
                                            <span className="flex flex-row items-center justify-center gap-3">
                                                <span className="flex flex-row gap-2 items-center justify-center text-sm text-slate-800">
                                                    <span className="w-[14px] h-[14px] bg-sky-500"></span>
                                                    Plan
                                                </span>
                                                <span className="flex flex-row gap-2 items-center justify-center text-sm text-slate-800">
                                                    <span className="w-[14px] h-[14px] bg-lime-300"></span>
                                                    Patient
                                                </span>
                                            </span>
                                            <AgingBarChat />
                                        </div>
                                        <div className="h-full w-[15%] flex items-center justify-center">
                                            <div className="w-auto h-auto mx-auto my-auto flex flex-col items-center gap-2">
                                                <p className="text-2xl font-bold text-slate-900">Total</p>
                                                <span className="w-[90px] bg-sky-500 h-10 text-slate-100 text-lg flex items-center justify-center">
                                                    $0.00
                                                </span>
                                                <span className="w-[90px] bg-lime-500 h-10 text-slate-100 text-lg flex items-center justify-center">
                                                    $0.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row w-full h-auto items-start justify-between gap-3 pb-3">
                                <div className="flex flex-col justify-start items-center w-[34%] shadow-xl">
                                    <span className="w-full px-2 flex items-center justify-start bg-sky-500 h-[45px] text-lg text-slate-700 font-semibold rounded-t-[5px] border border-sky-600">
                                        Last Payment Date / Amount Paid
                                    </span>
                                    <div className="flex flex-col px-2 items-center justify-center gap-4 h-[200px] bg-white w-full rounded-b-[5px]">
                                        <span className="flex flex-row items-center justify-center gap-4 w-full">
                                            <p className="text-lg text-slate-600">Latest Payment Date:</p>
                                            <p className="text-lg text-slate-600">10/12/2024</p>
                                        </span>
                                        <span className="flex flex-row items-center justify-center gap-4 w-full">
                                            <p className="text-lg text-slate-600">Amount Paid:</p>
                                            <p className="text-lg text-slate-600">$35.00</p>
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-start items-center w-[66%] h-auto shadow-xl bg-white">
                                    <span className="flex flex-row w-full items-end justify-start border-b-[8px] border-sky-600 h-auto px-10 gap-4 h-[45px]">
                                        <button type="button" className='h-[40px] px-3 border-2 border-sky-600 bg-sky-600 text-slate-200 rounded-t-[5px] border-b-0' >Statement History</button>
                                        <button type="button" className='h-[40px] px-3 border-2 border-sky-600 rounded-t-[5px] border-b-0 bg-white' >Patient Payment</button>
                                    </span>

                                    <div className="w-full h-auto flex flex-col justify-start items-center pt-3">
                                        <span className="flex items-center justify-start w-full border border-blue-300 bg-blue-300 text-lg font-bold text-slate-600 px-2 h-[50px] rounded-t-[5px]">
                                            Statement History
                                        </span>
                                        <span className="flex flex-row items-center justify-between w-full h-[43px]">
                                            <p className="h-full flex px-3 items-center justify-start text-[16px] text-slate-600 w-1/5 bg-slate-300 border-r border-slate-400">Print Date</p>
                                            <p className="h-full flex px-3 items-center justify-start text-[16px] text-slate-600 w-1/5 bg-slate-300 border-r border-slate-400">Type</p>
                                            <p className="h-full flex px-3 items-center justify-start text-[16px] text-slate-600 w-1/5 bg-slate-300 border-r border-slate-400">Printed By</p>
                                            <p className="h-full flex px-3 items-center justify-start text-[16px] text-slate-600 w-1/5 bg-slate-300 border-r border-slate-400">Amount</p>
                                            <p className="h-full flex px-3 items-center justify-start text-[16px] text-slate-600 w-1/5 bg-slate-300">E-Statement</p>
                                        </span>
                                        <div className="w-full h-[200px] flex items-center justify-center bg-white mb-3">
                                            <p className="text-lg font-semibold">
                                                No Data Found
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}

export default PatientFinancial