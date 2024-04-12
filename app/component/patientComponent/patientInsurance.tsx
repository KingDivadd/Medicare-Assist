import { PatientTabProps } from '@/types'
import React from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import { IoMdAdd } from "react-icons/io";

const PatientInsurance = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3">
                <div className="w-full h-full flex flex-row gap-3 items-start pt-3 justify-between bg-slate-100 overflow-hidden">
                    <div className=" w-[200px] h-full flex flex-col justify-start">
                        <span className="w-full h-10 bg-blue-100"></span>
                        <span className="w-full h-10 bg-sky-500"></span>
                        <button type="button" className="text-sm text-white flex items-center justify-center gap-1 h-10 bg-sky-500 hover:bg-sky-600 mt-5 w-[100px] mx-auto rounded-[3px]">
                            <IoMdAdd size={20} />
                            New Plan
                        </button>
                    </div>
                    <div className="h-full flex-1 cont-5 overflow-y-auto">
                        <div className="w-full h-full flex-1">
                            <span className="w-full flex flex-row items-center justify-between gap-3 h-[55px] px-4 mb-4">
                                <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Insured Party</p>
                                <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[73%]"></span>
                            </span>
                            <div className="w-full px-20 flex flex-col items-end justify-start gap-3">

                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2">
                                        <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">Relation</p>
                                        <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                    </span>

                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2">
                                        <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">Relation</p>
                                        <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                    </span>
                                </div>
                                
                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">First Name</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Last Name</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">DOB</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">SEX</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                </div>

                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2">
                                        <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">Address 1</p>
                                        <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                    </span>

                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2">
                                        <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">City</p>
                                        <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                    </span>
                                </div>

                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">State</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Zip</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Ext</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Home Tel</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                </div>

                            </div>

                            <span className="w-full flex flex-row items-center justify-between gap-3 h-[55px] px-4 mb-4">
                                <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Plan</p>
                                <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[73%]"></span>
                            </span>

                            <div className="w-full  px-20 flex flex-col items-end justify-start gap-3">

                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2">
                                        <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">Plan</p>
                                        <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                    </span>

                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Payer ID</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Plan Family</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>
                                </div>
                                
                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">ID #</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Visit Copay</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2">
                                        <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">Eligibility</p>
                                        <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                    </span>

                                </div>

                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Gropp</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Date Signed</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Effective Date</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Exp Date</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                </div>

                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">WC Case</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Injury (Accident)</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Lawyer</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Employer</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                </div>

                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2">
                                        <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">Address</p>
                                        <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                    </span>

                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Group Name</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full ">
                                                <span className="flex flex-row items-center justify-start gap-5 h-full">
                                                    <p className="text-[15px]  flex items-center justify-end text-sky-600 font-semibold">Accept Assg</p>
                                                    <input type="checkbox" name="" id=""  className='h-[20px] w-[20px]' />
                                                </span>
                                                <span className="flex flex-row items-center justify-start gap-5 h-full">
                                                    <p className="text-[15px] flex items-center justify-end text-sky-600 font-semibold">Active</p>
                                                    <input type="checkbox" name="" id=""  className='h-[20px] w-[20px]' />
                                                </span>

                                            </span>
                                        </span>
                                    </span>
                                </div>

                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold "></p>
                                        <span className="flex items-center justify-center w-[75%]">
                                            <span className="flex flex-row items-center justify-center gap-5 w-full ">
                                                <input type="radio" name="one" id="" className='h-[20px] w-[20px] ' /> 
                                                <p className="text-[15px] flex items-center justify-end text-sky-600 font-semibold h-full">On Job Accident</p>
                                            </span>
                                            <span className="flex flex-row items-center justify-center gap-5 w-full">
                                                <input type="radio" name="one" id="" className='h-[20px] w-[20px] ' /> 
                                                <p className="text-[15px] flex items-center justify-end text-sky-600 font-semibold h-full">Auto Accident</p>
                                            </span>
                                            <span className="flex flex-row items-center justify-center gap-5 w-full">
                                                <input type="radio" name="one" id="" className='h-[20px] w-[20px] ' /> 
                                                <p className="text-[15px] flex items-center justify-end text-sky-600 font-semibold h-full">Other Accident</p>
                                            </span>
                                            <span className="flex flex-row items-center justify-center gap-5 w-full">
                                                <input type="radio" name="one" id="" className='h-[20px] w-[20px] ' /> 
                                                <p className="text-[15px] flex items-center justify-end text-sky-600 font-semibold h-full">None</p>
                                            </span>
                                        </span>                                    
                                    </span>

                                    <span className="flex flex-row h-full w-1/2 items-center justify-between gap-5 ">
                                        <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Accident Hour</p>
                                        <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                            <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                                <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Accident State</p>
                                                <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>
                                </div>

                                <div className="w-[90%] h-[80px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2">
                                        <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">Comments</p>
                                        <textarea  id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' ></textarea>
                                    </span>

                                    <span className="flex flex-col h-full w-1/2 items-center justify-start gap-3">
                                        <span className="flex flex-row h-[35px] item-center justify-between gap-5 w-full">
                                            <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">Medicare Sec Plan Type</p>
                                            <input  id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex flex-row w-full h-[35px] items-center justify-between gap-5 ">
                                            <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Last Seen Date</p>
                                            <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                                <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                                <span className="flex flex-row gap-2 items-center justify-end flex-1 h-full">
                                                    <p className="text-[15px] w-auto flex items-center justify-end text-sky-600 font-semibold">Pat on Hospice</p>
                                                    <input type="checkbox" name="" id="" placeholder='' className='w-[20px] flex h-[20px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                                </span>
                                            </span>
                                        </span>
                                        
                                    </span>

                                    
                                </div>

                                <div className="w-[90%] h-[35px] flex flex-row gap-5 ">
                                    <span className="flex flex-row h-full item-center justify-between gap-5 w-1/2"></span>

                                    <span className="flex flex-col h-full w-1/2 items-center justify-start gap-3">
                                        <span className="flex flex-row h-full item-center justify-between gap-5 w-full">
                                            <p className="text-sm font-semibold text-sky-500 w-[25%] h-full flex items-center justify-end">Initial Teatment Date</p>
                                            <input  id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-[35px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex flex-row w-full h-[35px] items-center justify-between gap-5 "></span>
                                        
                                    </span>

                                    
                                </div>

                            </div>
                            <span className="w-full flex h-auto items-center justify-center">
                                <button type="button" className="mx-auto mt-5  h-10 px-3 text-white bg-lime-500 hover:bg-lime-600">
                                    Update Plan
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PatientInsurance