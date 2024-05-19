'use client'
import { MenuRoleModalProps, MessageModalProps, UserModalProps } from '@/types';
import React,{useState, useEffect, Dispatch, SetStateAction} from 'react'
import { FaCaretUp, FaCaretDown, FaLeaf } from 'react-icons/fa6'
import DropDown, { SmallDropDown } from '../../dropDown';

const CreatePlanModal = ({menuRoleList, menuRoleModal, selectedMenuRole, setMenuRoleList, setMenuRoleModal, setSelectedMenuRole }:MenuRoleModalProps) => {
    const [updateBtn, setUpdateBtn] = useState(false)
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        category: false, insurance: false, planFeeLink: false, planEditLink: false
    });
    
    const [dropElements, setDropElements] = useState({
        category: 'SELECT', insurance: 'SELECT', planFeeLink: false, active: false, planEditLink: 'SELECT', planShortName: '', ediPlayerId: '',
        description: '', planFamily: '', planType: false, medical: false, noFault: false, wc: false, outstandingDays: '', fax: '', enforceLastSeenDate: false, medicareAllowedCalc: false, comments: ''
        

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
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto" id="modal">
            <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div className="absolute inset-0 bg-gray-500 opacity-35"></div>
                </div>
                <div className="w-full h-screen pt-[90px] rounded-lg overflow-hidden shadow-xl transform transition-all" role="dialog" aria-modal="true" aria-labelledby="modal-title" aria-describedby="modal-description" onClick={handleCloseModal}>
                    <div className="h-auto w-[95%] mx-auto shadow-xl">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            Insurance Carriers                            
                        </span>
                        {/* the container for the input fields */}
                        <div onClick={(e) => e.stopPropagation()} className="w-full flex flex-col items-end justify-start gap-3 h-auto bg-white  py-[15px] pb-[20px] rounded-b-[5px] ">
                                
                            <div className="w-[100%] mx-auto flex flex-row justify-between px-[50px] items-start gap-[100px] ">
                                <div className="w-[80%] mx-auto flex flex-col justify-start items-center gap-5 ">
                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Plan Short Name</p>
                                            <input onChange={handleChange} value={dropElements.planShortName} type="text" name="plan" id="plan" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-sky-700 text-end w-[30%] ">EDI Player ID</p>
                                            <input onChange={handleChange} value={dropElements.ediPlayerId}  type="text" name="ediPlayerId" id="ediPlayerId" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
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
                                <div className="w-[20%] flex items-start justify-center bg-red-200 h-[400px]">
                                    </div>                                    
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreatePlanModal