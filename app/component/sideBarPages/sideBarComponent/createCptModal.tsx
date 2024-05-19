'use client'
import { MenuRoleModalProps, MessageModalProps, UserModalProps } from '@/types';
import React,{useState, useEffect, Dispatch, SetStateAction} from 'react'
import { FaCaretUp, FaCaretDown, FaLeaf } from 'react-icons/fa6'
import DropDown, { SmallDropDown } from '../../dropDown';

const CreateCptModal = ({menuRoleList, menuRoleModal, selectedMenuRole, setMenuRoleList, setMenuRoleModal, setSelectedMenuRole }:MenuRoleModalProps) => {
    const [updateBtn, setUpdateBtn] = useState(false)
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        measurementCode: false, activelyUsed: false, clia: false, typeOfService: false, speciality: false, procCategory: false
    });

    const [dropElements, setDropElements] = useState({
        dashboard: false,
        shortName: '', description: '', cpt: '', fee: '', mhrvs: '', measurementCode: '', ndc: '', discontinued: false, procCategory: '',
        activelyUsed: '', clia: '', serviceDescription: '', typeOfService: '', speciality: '', modifiers: '', patientResponsibility: false, dontPrint: false, comments: ''

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
                    <div className="h-auto w-[80%] mx-auto shadow-xl">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            CPT                            
                        </span>
                        {/* the container for the input fields */}
                        <div onClick={(e) => e.stopPropagation()} className="w-full flex flex-col items-end justify-start gap-3 h-auto bg-white  py-[15px] pb-[20px] rounded-b-[5px] ">
                            {/* each particular rows */}
                            <span className="w-full flex flex-row items-end justify-start px-5 border-b-[6px] gap-2 border-sky-600 ">
                                <button type="button" onClick={()=>{handleClickedBtn('procedure')}} className={clickedBtn === 'procedure'? "active-payment-btn " : "payment-btn"}>Procedure</button>
                                <button type="button" onClick={()=>{handleClickedBtn('modifier-fee')}} className={clickedBtn === 'modifier-fee'? 'active-payment-btn': 'payment-btn'}>Modifier Fee</button>
                            </span>
                            {clickedBtn === 'procedure' && 
                                <div className="w-[70%] mx-auto flex flex-col justify-start items-center gap-5 ">
                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Short Name</p>
                                            <input onChange={handleChange} value={dropElements.shortName} type="text" name="shortName" id="shortName" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Description</p>
                                            <input onChange={handleChange} value={dropElements.description}  type="text" name="description" id="description" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">CPT</p>
                                            <input onChange={handleChange} value={dropElements.cpt} type="text" name="cpt" id="cpt" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Fee</p>
                                            <input onChange={handleChange} value={dropElements.fee}  type="text" name="fee" id="fee" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">MHRVS</p>
                                            <input onChange={handleChange} value={dropElements.mhrvs} type="text" name="mhrvs" id="mhrvs" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Measurement Code</p>
                                            <span className="flex-1 flex items-center justify-center">
                                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'measurementCode'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">NDC#</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                                <input onChange={handleChange} value={dropElements.ndc} type="text" name="ndc" id="ndc" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                                <span className="w-[50%] gap-3 h-full flex flex-row items-center justify-between">
                                                    <label htmlFor="discontinued" className='text-sm text-slate-700 text-end w-full' >Discontinued</label>
                                                    <input type="checkbox" onChange={(e:any)=> {setDropElements({...dropElements, discontinued: e.target.checked})}} checked={dropElements.discontinued} name="discontinued" id="discontinued" className='w-[16px] h-[16px] ' />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Proc Category</p>
                                            <span className="flex-1 flex items-center justify-center">
                                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'procCategory'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Actively Used</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                                <span className="w-[40%] ">
                                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'activelyUsed'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                                </span>
                                                <span className="w-[60%] gap-[10px] h-full flex flex-row items-center justify-between">
                                                    <label htmlFor="discontinued" className='text-sm text-slate-700 text-end w-[30%] ' >CLIA</label>
                                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'clia'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Service Description</p>
                                            <input onChange={handleChange} value={dropElements.serviceDescription}  type="text" name="s.serviceDescription" id="s.serviceDescription" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Type of Service</p>
                                            <span className="flex-1 flex items-center justify-center">
                                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'typeOfService'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Speciality</p>
                                            <span className="flex-1 flex items-center justify-center">
                                                <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'speciality'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Modifiers</p>
                                            <input onChange={handleChange} value={dropElements.modifiers} type="text" name="modifiers" id="modifiers" placeholder='' className='flex-1 flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <p className="text-sm text-slate-700 text-end w-[30%] "></p>
                                            <p className="text-sm text-slate-700 text-end flex-1 "></p>

                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5">
                                            <label htmlFor='patientResponsibility' className="text-sm text-slate-700 text-end w-[30%] ">Patient Responsibility</label>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between">
                                                <input type="checkbox" onChange={(e:any)=> {setDropElements({...dropElements, patientResponsibility: e.target.checked})}} checked={dropElements.patientResponsibility} name="patientResponsibility" id="patientResponsibility" className='w-[16px] h-[16px] ' />
                                                <span className="w-[50%] gap-3 h-full flex flex-row items-center justify-between ">
                                                    <label htmlFor="dontPrint" className='text-sm text-slate-700 text-end w-full text-end' >Don' Print</label>
                                                    <input type="checkbox" onChange={(e:any)=> {setDropElements({...dropElements, dontPrint: e.target.checked})}} checked={dropElements.dontPrint} name="dontPrint" id="dontPrint" className='w-[16px] h-[16px] ' />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="flex w-1/2 h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] "></p>
                                            <span className="flex-1 flex items-center justify-center">
                                                
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
                            }

                            {clickedBtn === 'modifier-fee' && <div className="w-full flex flex-col items-center justify-center gap-3 h-[300px] ">
                                Still under development 
                            </div> }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateCptModal