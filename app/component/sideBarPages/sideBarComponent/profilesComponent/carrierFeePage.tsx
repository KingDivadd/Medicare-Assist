'use client'
import React, {useState, useEffect} from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md'
import CreateCarrierFeeModal from '../createCarrierFeeModal'

const CarrierFeePage = () => {
    const [menuRoleModal, setMenuRoleModal] = useState(false)
    const [selecteMenuRole, setSelecteMenuRole] = useState({})
    const [menuRoleList, setMenuRoleList] = useState<any[]>([])
    const [clickedBtn, setClickedBtn] = useState('')
    const [pageNum, setPageNum] = useState(1)
    const [dropElements, setDropElements] = useState({
        planFeeLink: '', cpt: '', procedure: ''

    })

    useEffect(() => {
    const item = sessionStorage.getItem('profilesTab')
    if (item === null || item.trim() === ''){
        setClickedBtn('cpt&fee')
    }else{
        setClickedBtn(item)
    }
    }, [])

    const handleClickedBtn = (item:string)=>{
        setClickedBtn(item)
        sessionStorage.setItem('profilesTab',item)
    }

    const handleChange = (e:any)=>{
        const name = e.target.name
        const value = e.target.value
        setDropElements({...dropElements, [name]:value})
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

    const handleCreateCpt = ()=>{
        setMenuRoleModal(true)
        sessionStorage.setItem('carrierFee','procedure')
    }

    return (
        <div className="w-[90%] flex flex-col gap-3 items-center justify-start pt-[15px] ">
            <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                    <p className="text-sm text-slate-700 text-end w-[100px]">Plan Fee Link</p>
                    <input onChange={handleChange} value={dropElements.planFeeLink}  type="text" name="planFeeLink" id="planFeeLink" placeholder='' className='w-[300px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                </span>
                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                    <p className="text-sm text-slate-700 text-end w-[100px]">CPT</p>
                    <input onChange={handleChange} value={dropElements.cpt}  type="text" name="cpt" id="cpt" placeholder='' className='w-[300px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                </span>
            </span>

            <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                    <p className="text-sm text-slate-700 text-end w-[100px]">Procedure</p>
                    <input onChange={handleChange} value={dropElements.procedure}  type="text" name="procedure" id="procedure" placeholder='' className='w-[300px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                </span>
                <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                    <p className="text-sm text-slate-700 text-end w-[100px]"></p>
                    <p className="text-sm text-slate-700 text-end w-[300px]"></p>
                </span>
                
            </span>

            <button type="button" className="px-3 mx-auto flex justify-center items-center h-[35px] rounded-[5px] text-white bg-lime-600 hover:bg-lime-700 ">Search</button>

            <div className="w-[110%] flex flex-col items-center justify-start border border-sky-600 rounded-[5px] bg-white mt-[10px]">
                <span className="h-[40px] w-full flex items-center justify-between px-2 bg-sky-600 rounded-t-[5px] border border-sky-600 ">
                    <p className="text-sm text-white text-start font-semibold ">Carrier Fee</p>

                    <span className="w-auto h-[30px] flex flex-row items-start justify-center gap-2 ">
                        <button onClick={handleCreateCpt} className="px-2 h-full rounded-[3px] flex justify-center items-center bg-white hover:bg-slate-100 text-sm text-slate-700">Create Carrier Fee</button>

                    </span>
                </span>
                <div className="w-full flex flex-col items-center justify-start min-h-[20px] border border-sky-600 border-t-0 ">
                    <span className="w-full h-[35px] bg-blue-100 flex flex-row items-center justify-between">
                        <p className="text-sm font-semibold text-sky-700 px-2 w-[10%] ">Name</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[20%] ">Description</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Payer Id</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Categroy</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Claim Flag</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[20%] ">Plan Link</p>
                        <p className="text-sm font-semibold text-slate-700 px-2 w-[20%] ">Outstanding Days</p>
                    </span>
                    <span className="w-full flex flex-col items-center justify-start cont-11a overflow-y-auto">
                        <span className='w-full flex flex-col justif-start itmes-center'>
                            {[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5].map((data, ind)=>{
                                return (
                                    <span key={ind} className="w-full h-[35px] hover:bg-gray-100 flex flex-row items-center justify-between">
                                        <p className="text-sm  text-sky-700 px-2 w-[10%] "></p>
                                        <p className="text-sm text-slate-700 px-2 w-[20%] "></p>
                                        <p className="text-sm text-slate-700 px-3 w-[10%] "></p>
                                        <p className="text-sm text-slate-700 px-3 w-[10%] "></p>
                                        <p className="text-sm text-slate-700 px-3 w-[10%] "></p>
                                        <p className="text-sm text-slate-700 px-3 w-[20%] "></p>
                                        <p className="text-sm text-slate-700 px-4 w-[20%] "></p>
                                    </span> 
                                )
                            })}
                        </span>
                    </span>
                    <div className="w-full flex flex-row justify-start items-center h-[32px] border-t border-gray-300 ">
                        <span className="h-full flex flex-row items-center justify-start w-auto">
                            <span className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><MdSkipPrevious size={18} /> </span>

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

            {menuRoleModal && <CreateCarrierFeeModal menuRoleList={menuRoleList} setMenuRoleList={setMenuRoleList} menuRoleModal={menuRoleModal} setMenuRoleModal={setMenuRoleModal} selectedMenuRole={selecteMenuRole} setSelectedMenuRole={setSelecteMenuRole} />}
        </div>
    )
}

export default CarrierFeePage