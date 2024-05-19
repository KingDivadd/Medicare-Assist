'use client'
import React, {useState, useEffect} from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'
import { MdSkipPrevious, MdSkipNext } from 'react-icons/md'
import CreateCptModal from './createCptModal'

const ProfilesPage = () => {
    const [menuRoleModal, setMenuRoleModal] = useState(false)
    const [selecteMenuRole, setSelecteMenuRole] = useState({})
    const [menuRoleList, setMenuRoleList] = useState<any[]>([])
    const [clickedBtn, setClickedBtn] = useState('')
    const [pageNum, setPageNum] = useState(1)
    const [dropElements, setDropElements] = useState({
        cpt: '', procCategory: '', procedure: '', description: '', notDiscontinue: false, discontinue: false, all: false

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
        sessionStorage.setItem('profiles','procedure')
    }

    return (
        <div className='w-full flex flex-col justify-start align-center gap-3 bg-white rounded-[5px] px-2 py-2 cont-11 overflow-y-auto'>
            <div className="w-full flex flex-col justify-start items-center rounded-[6px]">
                <span className="w-[98%] mx-auto flex flex-row items-end justify-start px-5 border-b-[6px] gap-2 border-sky-600 ">
                    <button type="button" onClick={()=>{handleClickedBtn('cpt&fee')}} className={clickedBtn === 'cpt&fee'? "active-payment-btn " : "payment-btn"}>CPT & FEE</button>
                    <button type="button" onClick={()=>{handleClickedBtn('planFeeLink')}} className={clickedBtn === 'planFeeLink'? 'active-payment-btn': 'payment-btn'}>Plan Fee Link</button>
                    <button type="button" onClick={()=>{handleClickedBtn('fuDenailCodes')}} className={clickedBtn === 'fuDenailCodes'? 'active-payment-btn': 'payment-btn'}>F/U Denial Codes</button>
                </span>
                {clickedBtn === 'cpt&fee' &&  
                    <div className="w-[90%] flex flex-col gap-3 items-center justify-start pt-[15px] ">
                        <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                            <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[100px]">CPT</p>
                                <input onChange={handleChange} value={dropElements.cpt}  type="text" name="cpt" id="cpt" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                            <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[100px]">Proc Category</p>
                                <input onChange={handleChange} value={dropElements.procCategory}  type="text" name="procCategory" id="procCategory" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                            <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[100px]">Procedure</p>
                                <input onChange={handleChange} value={dropElements.procedure}  type="text" name="procedure" id="procedure" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>
                            
                            
                        </span>

                        <span className="w-[70%] mx-auto flex flex-row items-center justify-center gap-[10px] h-auto">
                            <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[100px]">Description</p>
                                <input onChange={handleChange} value={dropElements.description}  type="text" name="description" id="description" placeholder='' className='w-[250px] flex h-full items-center justify-center text-slate-500 text-sm font-semibold border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />
                            </span>

                            <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                <span className='w-[20px]' ></span>
                                <span className="w-[330px] flex flex-row gap-1 items-center justify-between h-full">
                                    <span className="w-auto flex flex-row items-center justify-center gap-1">
                                        <input type="radio" name="status" id="notDiscontinue" onChange={(e:any)=> {setDropElements({...dropElements, notDiscontinue: e.target.checked})}} checked={dropElements.notDiscontinue} className='w-[16px] h-[16px] ' />
                                        <label htmlFor="notDiscontinue" className='text-sm text-slate-700'>Not Discontinue</label>
                                    </span>
                                    <span className="w-auto flex flex-row items-center justify-center gap-1">
                                        <input type="radio" name="status" id="discontinue" onChange={(e:any)=> {setDropElements({...dropElements, discontinue: e.target.checked})}} checked={dropElements.discontinue} className='w-[16px] h-[16px] ' />
                                        <label htmlFor="discontinue" className='text-sm text-slate-700'>Discontinue</label>
                                    </span>
                                    <span className="w-auto flex flex-row items-center justify-center gap-1">
                                        <input type="radio" name="status" id="all" onChange={(e:any)=> {setDropElements({...dropElements, all: e.target.checked})}} checked={dropElements.all} className='w-[16px] h-[16px] ' />
                                        <label htmlFor="all" className='text-sm text-slate-700'>All</label>
                                    </span>
                                </span>
                            </span>
                            <span className="flex w-[50%] h-[28px] flex-row items-center justify-between gap-5">
                                <p className="text-sm text-slate-700 text-end w-[100px]"></p>
                                <p className="text-sm text-slate-700 text-end w-[250px]"></p>
                            </span>
                            
                            
                        </span>

                        <button type="button" className="px-3 mx-auto flex justify-center items-center h-[35px] rounded-[5px] text-white bg-lime-600 hover:bg-lime-700 ">Search</button>

                        <div className="w-[110%] flex flex-col items-center justify-start border border-sky-600 rounded-[5px] bg-white mt-[10px]">
                            <span className="h-[40px] w-full flex items-center justify-between px-2 bg-sky-600 rounded-t-[5px] border border-sky-600 ">
                                <p className="text-sm text-white text-start font-semibold ">CPT</p>

                                <span className="w-auto h-[30px] flex flex-row items-start justify-center gap-2 ">
                                    <button onClick={handleCreateCpt} className="px-2 h-full rounded-[3px] flex justify-center items-center bg-white hover:bg-slate-100 text-sm text-slate-700">Create CPT</button>

                                    {/* <button className="px-2 h-full rounded-[3px] flex justify-center items-center bg-red-400 hover:bg-red-500 text-sm text-white">Delete</button> */}
                                </span>
                            </span>
                            <div className="w-full flex flex-col items-center justify-start min-h-[20px] border border-sky-600 border-t-0 ">
                                <span className="w-full h-[35px] bg-blue-100 flex flex-row items-center justify-between">
                                    <p className="text-sm font-semibold text-sky-700 px-2 w-[10%] ">CPT</p>
                                    <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Procedure</p>
                                    <p className="text-sm font-semibold text-slate-700 px-2 w-[20%] ">Description</p>
                                    <p className="text-sm font-semibold text-slate-700 px-2 w-[20%] ">Categroy</p>
                                    <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Fee</p>
                                    <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">MHRVS</p>
                                    <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Discontinued</p>
                                    <p className="text-sm font-semibold text-slate-700 px-2 w-[10%] ">Actively Used</p>
                                </span>
                                <span className="w-full flex flex-col items-center justify-start cont-11a overflow-y-auto">
                                    <span className='w-full flex flex-col justif-start itmes-center'>
                                        {[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5].map((data, ind)=>{
                                            return (
                                                <span key={ind} className="w-full h-[35px] hover:bg-gray-100 flex flex-row items-center justify-between">
                                                    <p className="text-sm  text-sky-700 px-2 w-[10%] ">0001</p>
                                                    <p className="text-sm text-slate-700 px-2 w-[10%] ">0001a</p>
                                                    <p className="text-sm text-slate-700 px-2 w-[20%] ">ADM SARSCOV2 30MCG/0.3</p>
                                                    <p className="text-sm text-slate-700 px-2 w-[20%] "></p>
                                                    <p className="text-sm text-slate-700 px-2 w-[10%] "></p>
                                                    <p className="text-sm text-slate-700 px-2 w-[10%] "></p>
                                                    <p className="text-sm text-slate-700 px-2 w-[10%] ">No</p>
                                                    <p className="text-sm text-slate-700 px-2 w-[10%] ">Yes</p>
                                                </span> 
                                            )
                                        })}
                                    </span>
                                </span>
                                <div className="w-full flex flex-row justify-start items-center h-[35px] border-t border-gray-300 ">
                                    <span className="h-full flex flex-row items-center justify-start w-auto">
                                        <span className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><MdSkipPrevious size={18} /> </span>

                                        <span onClick={handlePageDecrease} className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><FaCaretLeft size={17} /> </span>

                                        <p className="w-[50px] text-sm text-slate-700 font-semibold text-center">Page</p>

                                        <input onChange={(handlePageNumber)} value={pageNum} type="text" name="page" id="page" placeholder='' className='w-[50px] flex h-[25px] items-center justify-center text-slate-700 text-sm border border-slate-500 px-2 bg-white focus:bg-gray-100 focus:outline-none rounded-[3px]' />

                                        <p className="w-auto pl-2 px-1 font-semibold  text-sm text-slate-700 text-center">of 950</p>

                                        <span onClick={handlePageIncrease} className="ml-[10px] h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><FaCaretRight size={17} /> </span>

                                        <span className="h-[25px] w-[35px] rounded-[3px] hover:bg-blue-100 flex items-center justify-center text-sky-600"><MdSkipNext size={19} /> </span>

                                        <p className=" px-2 w-auto text-sm text-slate-700 font-semibold text-center">Displaying 1 to 15 of 198400 items</p>
                                    </span>
                                </div>
                            </div>
                        </div>

                    
                </div>}
            </div>
            {menuRoleModal && <CreateCptModal menuRoleList={menuRoleList} setMenuRoleList={setMenuRoleList} menuRoleModal={menuRoleModal} setMenuRoleModal={setMenuRoleModal} selectedMenuRole={selecteMenuRole} setSelectedMenuRole={setSelecteMenuRole} />}
        </div>
    )
}

export default ProfilesPage