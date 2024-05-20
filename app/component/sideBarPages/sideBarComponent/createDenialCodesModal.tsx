'use client'
import { MenuRoleModalProps, MessageModalProps, UserModalProps } from '@/types';
import React,{useState, useEffect, Dispatch, SetStateAction} from 'react'
import { FaCaretUp, FaCaretDown, FaLeaf, FaCaretLeft, FaCaretRight } from 'react-icons/fa6'
import DropDown, { SmallDropDown } from '../../dropDown';
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md';

const CreateFUDenialCodesModal = ({menuRoleList, menuRoleModal, selectedMenuRole, setMenuRoleList, setMenuRoleModal, setSelectedMenuRole }:MenuRoleModalProps) => {
    const [ediPayer, setEdiPayer] = useState(false)
    const [pageNum, setPageNum] = useState(1)
    const [updateBtn, setUpdateBtn] = useState(false)
    const [dropMenus, setDropMenus] = useState<{ [key: string]: boolean }>({
        autoAction: false, followupReason: false,
    });
    
    const [dropElements, setDropElements] = useState({
        code: '', autoAction: 'SELECT', followupReason: 'SELECT', remarkCode1: '', remarkCode2: ''
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
        sessionStorage.setItem('carrierFee',item)
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
                    <div className="h-auto w-[80%] mx-auto shadow-xl">
                        <span className="w-full flex flex-row items-center justify-between bg-sky-600 text-[15px] text-white rounded-t-[5px] h-[40px] px-3 ">
                            Carrier Link, Carrier Fee
                        </span>
                        {/* the container for the input fields */}
                        <div onClick={(e) => e.stopPropagation()} className="w-full flex flex-col items-end justify-start gap-3 h-auto bg-white  py-[15px] pb-[20px] rounded-b-[5px] ">
                            
                            
                            <div className="w-[100%] mx-auto flex flex-row justify-end px-[50px] items-start gap-[50px] ">
                                <div className="w-[70%] mx-auto flex flex-col justify-start items-center gap-5 py-2 ">
                                    
                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-full h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Code</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between ">
                                                <input onChange={handleChange} value={dropElements.code} type="text" name="code" id="code" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-full h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Remark Code 1</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between ">
                                                <input onChange={handleChange} value={dropElements.remarkCode1} type="text" name="remarkCode1" id="remarkCode1" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-full h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Remark Code 2</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between ">
                                                <input onChange={handleChange} value={dropElements.remarkCode2} type="text" name="remarkCode2" id="remarkCode2" placeholder='' className='w-[40%] flex h-full items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-full h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Followup reason</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between ">
                                                <span className="w-[40%] flex items-center justify-center">
                                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'followupReason'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                                </span>
                                            </span>
                                        </span>
                                    </span>

                                    <span className="w-full mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                                        <span className="flex w-full h-[28px] flex-row items-center justify-between gap-5 ">
                                            <p className="text-sm text-slate-700 text-end w-[30%] ">Auto Action</p>
                                            <span className="flex-1 h-[28px] flex flex-row items-center justify-between ">
                                                <span className="w-[40%] flex items-center justify-center">
                                                    <SmallDropDown handleSelectDropdown={handleSelectDropdown} title={'autoAction'} dropArray={['statement 1', 'statement 2', 'statement 3']} dropElements={dropElements} dropMenus={dropMenus} handleDropMenu={handleDropMenu} setDropElements={setDropElements} setDropMenus={setDropMenus} />
                                                </span>
                                            </span>
                                        </span>
                                    </span>


                                    <span className="w-full mx-auto flex flex-row items-start justify-center gap-5 mt-2 h-auto mt-3 pr-[100px] ">
                                        <button className="w-[150px] rounded-[3px] bg-lime-500 hover:bg-lime-600 text-white text-sm h-[35px] ">Create Denial Code</button>
                                        <button onClick={handleCloseModal} className="w-[150px] rounded-[3px] bg-blue-500 hover:bg-blue-600 text-white text-sm h-[35px] ">Close</button>
                                    </span>
                                    

                                    

                                </div>                                  
                            </div>

                            {clickedBtn === 'modifier' && 
                            <div className="w-full mx-auto flex flex-row justify-center items-center min-h-[400px]">
                                <p className="text-sm font-semibold text-slate-700">No Picture referece was provided!!!</p>
                            </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateFUDenialCodesModal