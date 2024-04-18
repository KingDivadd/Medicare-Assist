'use client'
import React,{useState, useEffect} from 'react'
import { FaCaretUp, FaCaretDown } from 'react-icons/fa6'

const NewMessageModal = () => {
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        type: false,
        status: false,
        alertType: false,
        assignedTo: false,
        priority: false,
        assignedCC: false,
        trackingField: false,
        predefinedMessage: false,
    });


    const [dropElement, setDropElement] = useState('SELECT')

    const handleDropMenu = (dropdown: any) => {
        const updatedDropMenus = Object.keys(dropMenus).reduce((acc, key) => {
            acc[key] = key === dropdown ? !dropMenus[key] : false;
            return acc;
        }, {} as { [key: string]: boolean });
        setDropMenus(updatedDropMenus);
        setDropElement('SELECT');
    };

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-35"></div>
                </div>
                <div className="w-full h-screen pt-[120px] rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description">
                    <div className="h-auto w-[80%] mx-auto shadow-xl">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            New Message                            
                        </span>
                        {/* the container for the input fields */}
                        <div className="w-full flex flex-col items-end justify-start gap-5 h-auto bg-white  py-[30px]">
                            {/* each particular rows */}
                            
                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Type</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('type')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 text-slate-600 text-sm">{dropElement}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 text-white">
                                                {dropMenus.type ? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.type && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','First Type', 'Second Type', 'Other type' ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElement(data); setDropMenus({...dropMenus, type: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Status</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('status')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 text-slate-600 text-sm">{dropElement}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 text-white">
                                                {dropMenus.status? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.status && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','first status', 'second status', 'other status' ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElement(data); setDropMenus({...dropMenus, status: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                            </div>
                            
                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600 ">
                                    <p className="text-sm text-end flex-1 ">Called Date</p>
                                    <input  id="" placeholder='' className='w-[70%] flex h-[35px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-400 px-2 bg-white focus:bg-slate-100 focus:outline-none rounded-[3px]' />
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end flex-1">Alert Type</p>
                                    <div className="w-[70%] flex flex-row gap-3 items-center justify-between">
                                        <div className="relative flex h-auto items-center justify-start w-[55%] w-full">
                                            <span onClick={()=> handleDropMenu('alertType')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                                <span className="flex w-[80%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 text-slate-600 text-sm">{dropElement}</span>
                                                <span className="flex flex-row w-[20%] h-full items-center justify-center bg-sky-600 border border-sky-600 text-white">
                                                    {dropMenus.alertType? <FaCaretUp  /> : <FaCaretDown  />}
                                                </span>
                                            </span>

                                            {dropMenus.alertType && 
                                            <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                                {['SELECT','Collect Balances', 'eRefill', 'Financial', ].map((data, ind)=>{
                                                    return (
                                                        <span onClick={()=> {setDropElement(data); setDropMenus({...dropMenus, alertType: false})}} key={ind} className="drop-element">{data}</span>
                                                    )
                                                })}
                                            </span>
                                            }
                                        </div>
                                        <span className="w-[45%] flex flex-row gap-3 items-center justify-end flex-1 h-full">
                                            <p className="text-sm text-end w-auto flex items-center justify-end text-sky-600 font-semibold">Patient View</p>
                                            <input type="checkbox" name="" id="" placeholder='' className='w-[20px] flex h-[20px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </div>
                                </span>

                            </div>

                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Assigned To</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('assignedTo')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 text-slate-600 text-sm">{dropElement}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 text-white">
                                                {dropMenus.assignedTo? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.assignedTo && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','Collect Balances', 'eRefill', 'Financial', ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElement(data); setDropMenus({...dropMenus, assignedTo: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Priority</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('priority')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 text-slate-600 text-sm">{dropElement}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 text-white">
                                                {dropMenus.priority? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.priority && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','Collect Balances', 'eRefill', 'Financial', ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElement(data); setDropMenus({...dropMenus, priority: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                            </div>

                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Assigned CC</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('assignedCC')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 text-slate-600 text-sm">{dropElement}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 text-white">
                                                {dropMenus.assignedCC? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.assignedCC && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','Collect Balances', 'eRefill', 'Financial', ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElement(data); setDropMenus({...dropMenus, assignedCC: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Tracking Field</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('trackingField')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 text-slate-600 text-sm">{dropElement}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 text-white">
                                                {dropMenus.trackingField? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.trackingField && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','Collect Balances', 'eRefill', 'Financial', ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElement(data); setDropMenus({...dropMenus, trackingField: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                            </div>

                            <div className="w-full h-[35px] flex flex-row items-center justify-end gap-4  pl-[100px] pr-[20px]">
                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end w-[40%]">Pre-defined Message</p>
                                    <div className="relative flex h-auto items-center justify-start w-[60%] w-full">
                                        <span onClick={()=> handleDropMenu('predefinedMessage')} className="flex flex-row item-center jusitify-between w-full h-[35px] cursor-pointer  ">
                                            <span className="flex w-[90%] h-full items-center justify-start px-3 bg-white border border-slate-400 border-r-0 text-slate-600 text-sm">{dropElement}</span>
                                            <span className="flex flex-row w-[10%] h-full items-center justify-center bg-sky-600 border border-sky-600 text-white">
                                                {dropMenus.predefinedMessage? <FaCaretUp  /> : <FaCaretDown  />}
                                            </span>
                                        </span>

                                        {dropMenus.predefinedMessage && 
                                        <span className="absolute flex flex-col justify-start items-center w-full h-auto top-[40px] left-0 rounded-[6px] z-10 border border-slate-400 shadow-xl ">
                                            {['SELECT','Collect Balances', 'eRefill', 'Financial', ].map((data, ind)=>{
                                                return (
                                                    <span onClick={()=> {setDropElement(data); setDropMenus({...dropMenus, predefinedMessage: false})}} key={ind} className="drop-element">{data}</span>
                                                )
                                            })}
                                        </span>
                                        }
                                    </div>
                                </span>

                                <span className="w-[50%] flex flex-row items-center justify-between gap-3 font-semibold text-sky-600">
                                    <p className="text-sm text-end flex-1">By Text</p>
                                    <div className="w-[70%] flex flex-row gap-3 items-center justify-between">
                                        <input type="checkbox" name="" id="" placeholder='' className='w-[20px] flex h-[20px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        <span className="w-[50%] flex flex-row gap-3 items-center justify-end flex-1 h-full">
                                            <p className="text-sm text-end w-auto flex items-center justify-end text-sky-600 font-semibold">By Email</p>
                                            <input type="checkbox" name="" id="" placeholder='' className='w-[20px] flex h-[20px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-slate-100 focus:bg-gray-200 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </div>
                                </span>

                            </div>

                            <div className="w-full flex flex-row items-start justify-end gap-3  pl-[100px] pr-[20px]">
                                    <p className="text-sm text-end h-[35px] flex flex-row items-start font-semibold text-sky-600">Message</p>
                                    <textarea  id="" placeholder='' className='w-[85.2%] max-2xl:w-[60%] flex h-[80px] items-center justify-center text-slate-500 text-sm font-semibold border border-slate-400 px-2 bg-white focus:bg-slate-100 focus:outline-none rounded-[3px] py-[5px]' ></textarea>

                            </div>

                            <div className="w-full flex flex-row items-start justify-center gap-6  pl-[100px] pr-[20px]">
                                <button type="button" className="flex items-center justify-center text-sm text-white font-semibold rounded-[3px] h-[40px] w-[150px] bg-lime-500 hover:bg-lime-600">Create Message</button>
                                <button type="button" className="flex items-center justify-center text-sm text-white font-semibold rounded-[3px] h-[40px] w-[150px] bg-sky-500 hover:bg-sky-600">Close</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NewMessageModal