'use client'
import { MenuRoleModalProps, MessageModalProps, UserModalProps } from '@/types';
import React,{useState, useEffect, Dispatch, SetStateAction} from 'react'
import { FaCaretUp, FaCaretDown, FaLeaf, FaCaretLeft, FaCaretRight } from 'react-icons/fa6'
import DropDown, { SmallDropDown } from '../../dropDown';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';

const CreatePlanModal = ({menuRoleList, menuRoleModal, selectedMenuRole, setMenuRoleList, setMenuRoleModal, setSelectedMenuRole }:MenuRoleModalProps) => {
    const [ediPayer, setEdiPayer] = useState(false)
    const [pageNum, setPageNum] = useState(1)
    const [updateBtn, setUpdateBtn] = useState(false)
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        category: false, insurance: false, planFeeLink: false, planEditLink: false, claimFlag: false
    });
    
    const [dropElements, setDropElements] = useState({
        category: 'SELECT', insurance: 'SELECT', planFeeLink: false, active: false, planEditLink: 'SELECT', planShortName: '', ediPayerId: '',
        description: '', planFamily: '', planType: false, medical: false, noFault: false, wc: false, outstandingDays: '', fax: '', enforceLastSeenDate: false, medicareAllowedCalc: false, comments: '', medicare: false, medicaid: false, champus: false, champusVa: false, group: false, feca: false, bcBs: false, claimFlag: 'SELECT', payerId: '', payerInsurance: ''
    })
    const [clickedBtn, setClickedBtn] = useState('')

    useEffect(() => {
    const item = sessionStorage.getItem('profiles')
    if (item === null || item.trim() === ''){
        setClickedBtn('procedure')
    }else{
        setClickedBtn(item)
    }
    }, [])

    const handleClickedBtn = (item:string)=>{
        setClickedBtn(item)
        sessionStorage.setItem('profiles',item)
    }


    const handleCloseModal = ()=>{
        setMenuRoleModal(false)
        setSelectedMenuRole({})
    }

    useEffect(() => {
        if (selectedMenuRole.ind + 1){
            setUpdateBtn(true)
            const {emergencyRole, menuRole, defaultProvider, defaultLocation, labProvider, first_name, last_name, mi, email, allowDelete, epcsSetting, allowEpcs, secondApprover, admin, setupProfiles, pmpNarx, multiSeason, twoFactorAuth, activee } = selectedMenuRole.data

            // setDropElements({...dropElements, emergencyRole:emergencyRole, menuRole: menuRole, defaultProvider: defaultProvider, defaultLocation: defaultLocation, labProvider: labProvider, first_name: first_name, last_name: last_name, mi: mi, email:email, allowDelete: allowDelete, epcsSetting: epcsSetting, allowEpcs: allowEpcs, secondApprover: secondApprover, admin: admin, setupProfiles: setupProfiles, pmpNarx: pmpNarx, multiSeason: multiSeason, twoFactorAuth: twoFactorAuth, activee: activee })

        }
    }, [])

    const handleDropMenu = (dropdown: any) => {
        const updatedDropMenus = Object.keys(dropMenus).reduce((acc, key) => {
            acc[key] = key === dropdown ? !dropMenus[key] : false;
            return acc;
        }, {} as { [key: string]: boolean });
        setDropMenus(updatedDropMenus);
        setDropElements({...dropElements, [dropdown]: 'SELECT'});
    };

    const handleSelectDropdown = (dropdown: any, title:any)=>{
        setDropElements({...dropElements, [title]: dropdown}); setDropMenus({...dropMenus, [title]: false})
    }

    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setDropElements({...dropElements, [name]:value})
    }

    const handleCreateMenuRole = (e:any)=>{
        e.preventDefault()
        setMenuRoleList([...menuRoleList, dropElements])
        handleCloseModal()
    }

    const handleMenuRoleUpdate = ()=>{
        menuRoleList[selectedMenuRole.ind] = dropElements
        setMenuRoleList(menuRoleList)
        handleCloseModal()
    }

    const handlePayerId = ()=>{
        console.log('handling payer id')
    }

    const handlePageNumber = (e:any)=>{
        const value = e.target.value
        setPageNum(value)
    }

    const handlePageIncrease = ()=>{
        setPageNum(Number(pageNum) + 1)
    }

    const handlePageDecrease = ()=>{
        setPageNum(Number(pageNum) - 1)
        if (Number(pageNum) < 2 ){
            setPageNum(1)
        }
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-35"></div>
                </div>
                <div className="w-full h-screen pt-[90px] rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" onClick={handleCloseModal}>
                    <div className="h-auto w-[98%] mx-auto shadow-xl">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            {ediPayer ? "EDI Payer Search":"Insurance Carriers" }
                        </span>
                        {/* the container for the input fields */}
                        <div onClick={(e) => e.stopPropagation()} className="w-full flex flex-col items-end justify-start gap-3 h-auto bg-white  py-[15px] pb-[20px] rounded-b-[5px] ">
                                
                            {ediPayer ? 
                            <div className="w-[100%] mx-auto flex flex-col justify-start items-center px-[10px] items-start gap-[50px] ">
                                <div className="w-[80%] mx-auto flex flex-col justify-start items-center gap-5 ">
                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Insurance</p>
                                            <input onChange={handleChange} value={dropElements.payerInsurance} type="text" name="payerInsurance" id="payerInsurance" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-sky-700 text-end w-[30%] hover:text-underline ">Payer ID</p>
                                            <input onChange={handleChange} value={dropElements.payerId}  type="text" name="payerId" id="payerId" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-start justify-center gap-5 mt-2 h-auto">
                                        <button className="w-[100px] rounded-[3px] bg-lime-500 hover:bg-lime-600 text-white text-sm h-[35px] ">Search</button>
                                        <button onClick={()=>setEdiPayer(false)} className="w-[100px] rounded-[3px] bg-blue-500 hover:bg-blue-600 text-white text-sm h-[35px] ">Close</button>
                                    </span>
                                </div>
                                <div className="w-full flex flex-col items-center justify-start border border-sky-600 rounded-[5px] bg-white ">
                                    <span className="h-[40px] w-full flex items-center justify-between px-2 bg-sky-600 rounded-t-[5px] border border-sky-600 ">
                                        <p className="text-sm text-white text-start font-semibold ">EDI Payer Search Results</p>

                                    </span>
                                    <div className="w-full flex flex-col items-center justify-start min-h-[20px] border border-sky-600 border-t-0 ">
                                        <span className="w-full h-[35px] bg-blue-100 flex flex-row items-center justify-between">
                                            <p className="text-sm font-semibold text-slate-700 px-2 w-[17.5%] ">Insurance</p>
                                            <p className="text-sm font-semibold text-slate-700 px-2 w-[7.5%] ">Payer Id</p>
                                            <p className="text-sm font-semibold text-slate-700 px-2 w-[7.5%] ">Categroy</p>
                                            <p className="text-sm font-semibold text-slate-700 px-2 w-[12.5%] ">Eligibility Supproted</p>
                                            <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">ERA Supproted</p>
                                            <p className="text-sm font-semibold text-slate-700 px-2 w-[14%] ">Claim Status Supproted</p>
                                            <p className="text-sm font-semibold text-slate-700 px-2 w-[15%] ">ERA Enrollment Required</p>
                                            <p className="text-sm font-semibold text-slate-700 px-2 w-[17.5%] ">Eligibility Enrollment Required</p>
                                            <p className="text-sm font-semibold text-slate-700 px-2 w-[18.5%] ">Claim Status Enrollment Required</p>
                                        </span>
                                        <span className="w-full flex flex-col items-center justify-start cont-11a overflow-y-auto">
                                            <span className='w-full flex flex-col justif-start itmes-center'>
                                                {[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5].map((data, ind)=>{
                                                    return (
                                                        <span key={ind} className="w-full h-[35px] hover:bg-gray-100 flex flex-row items-center justify-between">
                                                            <p className="text-sm text-slate-700 px-2 w-[17.5%] ">Insurance</p>
                                                            <p className="text-sm text-slate-700 px-2 w-[7.5%] ">Payer Id</p>
                                                            <p className="text-sm text-slate-700 pr-2 pl-3 w-[7.5%] ">Categroy</p>
                                                            <p className="text-sm text-slate-700 pr-2 pl-3 w-[12.5%] ">Eligibility Supproted</p>
                                                            <p className="text-sm text-slate-700 pr-2 pl-3 w-[10%] ">ERA Supproted</p>
                                                            <p className="text-sm text-slate-700 pr-2 pl-3 w-[14%] ">Claim Status Supproted</p>
                                                            <p className="text-sm text-slate-700 pr-2 pl-3 w-[15%] ">ERA Enrollment Required</p>
                                                            <p className="text-sm text-slate-700 pr-2 pl-4 w-[17.5%] ">Eligibility Enrollment Required</p>
                                                            <p className="text-sm text-slate-700 pr-2 pl-4 w-[18.5%] ">Claim Status Enrollment Required</p>
                                                        </span> 
                                                    )
                                                })}
                                            </span>
                                        </span>
                                        <div className="w-full flex flex-row justify-start items-center h-[32px] border-t border-gray-300 ">
                                            <span className="h-full flex flex-row items-center justify-start w-auto">
                                                <span className="h-[30px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><MdSkipPrevious size={18} /> </span>

                                                <span onClick={handlePageDecrease} className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><FaCaretLeft size={17} /> </span>

                                                <p className="w-[50px] text-sm text-slate-700 text-center">Page</p>

                                                <input onChange={(handlePageNumber)} value={pageNum} type="text" name="page" id="page" placeholder='' className='w-[50px] flex h-[23px] items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />

                                                <p className="w-auto pl-2 px-1  text-sm text-slate-700 text-center">of 3</p>

                                                <span onClick={handlePageIncrease} className="ml-[10px] h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><FaCaretRight size={17} /> </span>

                                                <span className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><MdSkipNext size={19} /> </span>

                                                <p className=" px-2 w-auto text-sm text-slate-700 text-center">Displaying 1 to 15 of 42 items</p>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>  
                            :
                            <div className="w-[100%] mx-auto flex flex-row justify-end px-[50px] items-start gap-[50px] ">
                                <div className="w-[80%] mx-auto flex flex-col justify-start items-center gap-5 ">
                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Plan Short Name</p>
                                            <input onChange={handleChange} value={dropElements.planShortName} type="text" name="planShortName" id="planShortName" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-sky-700 text-end w-[30%] hover:text-underline" onClick={()=>setEdiPayer(true)}>EDI Payer ID</p>
                                            <input onChange={handleChange} value={dropElements.ediPayerId}  type="text" name="ediPayerId" id="ediPayerId" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Description</p>
                                            <input onChange={handleChange} value={dropElements.description} type="text" name="description" id="description" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Category</p>
                                            <span className="flex-1 flex items-center justify-center">
                                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'category'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Insurance</p>
                                            <span className="flex-1 flex items-center justify-center">
                                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'insurance'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] "></p>
                                            <span className="flex-1 flex items-center justify-center"></span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Plan Fee Link</p>
                                            <span className="flex-1 flex items-center justify-center">
                                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'planFeeLink'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Plan Family</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                                <input onChange={handleChange} value={dropElements.planFamily} type="text" name="planFamily" id="planFamily" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                                <span className="w-[50%] gap-3 h-full flex flex-row items-center justify-end">
                                                    <label htmlFor="active" className='text-sm text-slate-700 text-end w-[60%]' >Active</label>
                                                    <input type="checkbox" onChange={(e:any)=> {setDropElements({...dropElements, active: e.target.checked})}} checked={dropElements.active} name="active" id="active" className='w-[16px] h-[16px] ' />
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Plan Type</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                                {/* check boex */}
                                                <span className="w-auto flex flex-row items-center justify-center gap-3">
                                                    <input type="checkbox" name="medical" id="medical" onChange={(e:any)=> {setDropElements({...dropElements, medical: e.target.checked})}} checked={dropElements.medical} className='w-[16px] h-[16px] ' />
                                                    <label htmlFor="medical" className='text-sm text-slate-700'>Medical</label>
                                                </span>
                                                <span className="w-auto flex flex-row items-center justify-center gap-3">
                                                    <input type="checkbox" name="noFault" id="noFault" onChange={(e:any)=> {setDropElements({...dropElements, noFault: e.target.checked})}} checked={dropElements.noFault} className='w-[16px] h-[16px] ' />
                                                    <label htmlFor="noFault" className='text-sm text-slate-700'>No Fault</label>
                                                </span>
                                                
                                                <span className="w-auto flex flex-row items-center justify-center gap-3">
                                                    <input type="checkbox" name="wc" id="wc" onChange={(e:any)=> {setDropElements({...dropElements, wc: e.target.checked})}} checked={dropElements.wc} className='w-[16px] h-[16px] ' />
                                                    <label htmlFor="wc" className='text-sm text-slate-700'>WC</label>
                                                </span>
                                            </span>
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Outstanding Days</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                                <input onChange={handleChange} value={dropElements.outstandingDays} type="text" name="outstandingDays" id="outstandingDays" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                                <span className="w-[55%] gap-3 h-full flex flex-row items-center justify-between">
                                                    <p  className='text-sm text-slate-700 text-end w-auto ' >Fax#</p>
                                                    <input onChange={handleChange} value={dropElements.fax} type="text" name="fax" id="fax" placeholder='' className='w-full flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <label htmlFor='enforceLastSeenDate' className="text-sm text-slate-700 text-end w-[30%] ">Enforce Last Seen Date</label>
                                            <span className="flex-1 gap-3 h-[28px] flex flex-row items-center justify-between">
                                                <input type="checkbox" name="enforceLastSeenDate" id="enforceLastSeenDate" onChange={(e:any)=> {setDropElements({...dropElements, enforceLastSeenDate: e.target.checked})}} checked={dropElements.enforceLastSeenDate} className='w-[16px] h-[16px] ' />
                                                <span className="w-[80%] gap-3 h-full flex flex-row items-center justify-end">
                                                    <label htmlFor='medicareAllowedCalc'  className='text-sm text-slate-700 text-end w-auto ' >Medicare Allowed Calc</label>
                                                    <input type="checkbox" name="medicareAllowedCalc" id="medicareAllowedCalc" onChange={(e:any)=> {setDropElements({...dropElements, medicareAllowedCalc: e.target.checked})}} checked={dropElements.medicareAllowedCalc} className='w-[16px] h-[16px] ' />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] "></p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Plan Edit Link</p>
                                            <span className="flex-1 flex items-center justify-center">
                                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'planEditLink'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] "></p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                                
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-start justify-center gap-5 h-auto">
                                        <p className="text-sm text-slate-700 text-end w-[15%] ">Comments</p>
                                        <textarea onChange={handleChange} value={dropElements.comments} rows={3} name="comments" id="comments" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 py-1 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px] resize-none '  ></textarea>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-start justify-center gap-5 mt-2 h-auto">
                                        <button className="w-[100px] rounded-[3px] bg-lime-500 hover:bg-lime-600 text-white text-sm h-[35px] ">Create Cpt</button>
                                        <button onClick={handleCloseModal} className="w-[100px] rounded-[3px] bg-blue-500 hover:bg-blue-600 text-white text-sm h-[35px] ">Close</button>
                                    </span>
                                </div>
                                <div className="w-[20%] flex items-start justify-center py-5 h-full">
                                    <div className="relative w-[200px] flex flex-col items-center justify-start gap-1 px-3 border-2 border-sky-600 rounded-[5px] py-3">
                                        <span className="w-auto px-2 h-[30px] absolute bg-white -top-[15px] flex items-center justify-center">
                                            <p className="text-sm text-slate-700 font-semibold ">Claim Flag</p>
                                        </span>
                                        <span className="w-full gap-3 h-[30px] flex flex-row items-center justify-start ">
                                            <input type="checkbox" name="medicare" id="medicare" onChange={(e:any)=> {setDropElements({...dropElements, medicare: e.target.checked})}} checked={dropElements.medicare} className='w-[16px] h-[16px] ' />
                                            <label htmlFor='medicare'  className='text-sm text-sky-700 font-semibold text-start w-full ' >Medicare </label>
                                        </span>
                                        <span className="w-full gap-3 h-[30px] flex flex-row items-center justify-start ">
                                            <input type="checkbox" name="medicaid" id="medicaid" onChange={(e:any)=> {setDropElements({...dropElements, medicaid: e.target.checked})}} checked={dropElements.medicaid} className='w-[16px] h-[16px] ' />
                                            <label htmlFor='medicaid'  className='text-sm text-sky-700 font-semibold text-start w-full ' >Medicaid </label>
                                        </span>
                                        <span className="w-full gap-3 h-[30px] flex flex-row items-center justify-start ">
                                            <input type="checkbox" name="champus" id="champus" onChange={(e:any)=> {setDropElements({...dropElements, champus: e.target.checked})}} checked={dropElements.champus} className='w-[16px] h-[16px] ' />
                                            <label htmlFor='champus'  className='text-sm text-sky-700 font-semibold text-start w-full ' >Champus </label>
                                        </span>
                                        <span className="w-full gap-3 h-[30px] flex flex-row items-center justify-start ">
                                            <input type="checkbox" name="champusVa" id="champusVa" onChange={(e:any)=> {setDropElements({...dropElements, champusVa: e.target.checked})}} checked={dropElements.champusVa} className='w-[16px] h-[16px] ' />
                                            <label htmlFor='champusVa'  className='text-sm text-sky-700 font-semibold text-start w-full ' >Champus Va </label>
                                        </span>
                                        <span className="w-full gap-3 h-[30px] flex flex-row items-center justify-start ">
                                            <input type="checkbox" name="group" id="group" onChange={(e:any)=> {setDropElements({...dropElements, group: e.target.checked})}} checked={dropElements.group} className='w-[16px] h-[16px] ' />
                                            <label htmlFor='group'  className='text-sm text-sky-700 font-semibold text-start w-full ' >Group </label>
                                        </span>
                                        <span className="w-full gap-3 h-[30px] flex flex-row items-center justify-start ">
                                            <input type="checkbox" name="feca" id="feca" onChange={(e:any)=> {setDropElements({...dropElements, feca: e.target.checked})}} checked={dropElements.feca} className='w-[16px] h-[16px] ' />
                                            <label htmlFor='feca'  className='text-sm text-sky-700 font-semibold text-start w-full ' >FECA </label>
                                        </span>
                                        <span className="w-full gap-3 h-[30px] flex flex-row items-center justify-start ">
                                            <input type="checkbox" name="bcBs" id="bcBs" onChange={(e:any)=> {setDropElements({...dropElements, bcBs: e.target.checked})}} checked={dropElements.bcBs} className='w-[16px] h-[16px] ' />
                                            <label htmlFor='bcBs'  className='text-sm text-sky-700 font-semibold text-start w-full ' >BC/BS </label>
                                        </span>
                                        <span className="w-full gap-3 h-[30px] flex flex-row items-center justify-start ">
                                            <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'claimFlag'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                        </span>
                                    </div>
                                </div>                                    
                            </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreatePlanModal