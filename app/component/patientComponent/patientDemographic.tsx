import { PatientTabProps } from '@/types'
import React from 'react'
import RouteNav from '../routeNav'
import TabBar from './tabBar'
import InputComponent from '../inputComponent'

const PatientDemographic = ({patient_tab, setPatient_tab}:PatientTabProps) => {
    return (
        <main className="w-full h-screen flex flex-col bg-slate-100 overflow-hidden">
            <RouteNav />
            <TabBar patient_tab={patient_tab} setPatient_tab={setPatient_tab} />
            <div className="w-full bg-sky-600 flex-1 py-3 overflow-hidden">
                <div className="flex w-full bg-slate-100 cont-2 overflow-y-auto px-5">
                    <div className="w-full h-auto flex-col pt-2 flex flex-col gap-3 overflow-hidden">
                        <span className="w-full flex flex-row items-center justify-between gap-3 h-[55px] px-4 ">
                            <p className="text-lg text-sky-800 font-semibold h-full flex items-end">Patient Demographic</p>
                            <span className="flex flex-1 flex-row items-center justify-end gap-2 border-b-2 border-sky-700 h-[73%]"></span>
                        </span>

                        <div className="max-2xl:mx-[10px] mx-[150px] mx-auto flex flex-col jusitify-start overflow-y-auto gap-3 cont-4 flex flex-col justify-start items-center">
                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Account #</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">SSN</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Med Rec #</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                            </div>
                            
                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">First Name</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                            <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">MI</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Last Name</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full ">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                            <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Old Name</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Preferred Name</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full ">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                            <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Suffix</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>
                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">DOB</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                            <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Sex</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>

                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Age</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Marital Status</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] mt-5">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Address 1</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Address 2</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                            <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">City</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>

                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">State</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                            <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Zip</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] mt-5">
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Home Tel</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Work Tel</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                            <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Ext</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>

                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5 ">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold ">Cell#</p>
                                    <span className="flex flex-row items-center justify-between gap-2 w-[75%] max-2xl:w-[60%] h-full">
                                        <input type="text" name="" id="" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="flex flex-row gap-2 items-center justify-between flex-1 h-full">
                                            <p className="text-[15px] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Chart#</p>
                                            <input type="text" name="" id="" placeholder='' className='w-[75%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>
                                </span>                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Fax</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Email</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Primary Contact</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] ">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Practice</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Location</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Provider</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px] mt-5">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Race</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Ethnicity</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5"></span>
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px]">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Preferred Language</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Preferred Communication</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">PCP</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                            </div>

                            <div className="flex w-full flex-row items-center justify-between gap-2 h-[35px]">
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Pharmacy</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Resp Party</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                                <span className="flex flex-row h-full w-1/3 items-center justify-between gap-5">
                                    <p className="text-[15px] max-2xl:w-[40%] w-[25%] flex items-center justify-end text-sky-600 font-semibold">Ref By</p>
                                    <input type="text" name="" id="" placeholder='' className='w-[75%] max-2xl:w-[60%] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                </span>
                                
                            </div>


                            
                        </div>


                    </div>
                </div>
            </div>
        </main>
    )
}

export default PatientDemographic